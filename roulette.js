/**
 * «Варик - Гончарик» Cinema Network
 * Movie Roulette Game Logic (2026)
 */

const SECTORS = [
    { label: "Боевик 💥", color: "#d946ef", genre: "боевик" },      // neon pink
    { label: "Фантастика 🚀", color: "#06b6d4", genre: "фантастика" }, // neon cyan
    { label: "Семейный 🧸", color: "#10b981", genre: "мультфильм" },  // emerald
    { label: "Драма 🎭", color: "#8b5cf6", genre: "драма" },        // violet
    { label: "Триллеры 🔪", color: "#f97316", genre: "триллер" },      // orange
    { label: "Биографии 📚", color: "#facc15", genre: "биография" },   // gold/yellow
    { label: "Аниме 🌸", color: "#ec4899", genre: "аниме" },         // pink
    { label: "История 🏛️", color: "#64748b", genre: "история" }        // slate
];

let canvas, ctx;
let isSpinning = false;
let wheelAngle = 0; // Current angle in radians

// Web Audio API context for sound effects
let audioCtx = null;

document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('wheelCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    
    // Draw initial wheel
    drawWheel();
    
    // Bind spin event
    const spinBtn = document.getElementById('spinButton');
    spinBtn.addEventListener('click', startSpin);
});

// Synthesize physical clicking sound using Web Audio API oscillator
function playClickSound() {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Resume if suspended (browser security)
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(650, audioCtx.currentTime); // High pitch click
        osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.04);
        
        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {
        // Fallback if audio context is blocked or not supported
    }
}

function drawWheel() {
    const numSectors = SECTORS.length;
    const arcSize = (Math.PI * 2) / numSectors;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = centerX - 10;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Save state and rotate by current wheel angle
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(wheelAngle);
    
    for (let i = 0; i < numSectors; i++) {
        const sector = SECTORS[i];
        const angle = i * arcSize;
        
        // 1. Draw Slice sector
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, angle, angle + arcSize);
        ctx.closePath();
        ctx.fillStyle = sector.color;
        ctx.fill();
        
        // 2. Draw slice border
        ctx.strokeStyle = "rgba(11, 7, 22, 0.4)";
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // 3. Draw Text label
        ctx.save();
        ctx.rotate(angle + arcSize / 2);
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 13px Outfit, Montserrat, sans-serif";
        ctx.shadowColor = "rgba(0,0,0,0.5)";
        ctx.shadowBlur = 4;
        // Text positioning inside the slice
        ctx.fillText(sector.label, radius - 25, 0);
        ctx.restore();
    }
    
    ctx.restore();
    
    // Draw outer boundary glow circle on top
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 6;
    ctx.stroke();
}

function startSpin() {
    if (isSpinning) return;
    
    // Resume audio context to guarantee sound triggers
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const genreFilter = document.getElementById('genreFilter').value;
    const ratingFilter = parseFloat(document.getElementById('ratingFilter').value);
    
    // 1. Filter movie candidates
    let candidates = moviesData.filter(movie => {
        // Filter by rating
        if (parseFloat(movie.rating) < ratingFilter) return false;
        
        // Filter by genre
        if (genreFilter !== 'all' && !movie.genres.includes(genreFilter)) return false;
        
        return true;
    });
    
    // If no candidates match, relax constraints to find ANY movie matching filters
    if (candidates.length === 0) {
        candidates = moviesData.filter(movie => {
            if (genreFilter !== 'all' && !movie.genres.includes(genreFilter)) return false;
            return true;
        });
    }
    
    // Absolute fallback if database is empty or nothing matches
    if (candidates.length === 0) {
        candidates = moviesData;
    }
    
    // Pick recommended movie
    const selectedMovie = candidates[Math.floor(Math.random() * candidates.length)];
    
    // Find matching genre sector index to land on
    let sectorIndex = 0;
    // Attempt to match movie's primary genre
    const primaryGenre = selectedMovie.genres[0];
    const matchIndex = SECTORS.findIndex(s => s.genre === primaryGenre);
    if (matchIndex > -1) {
        sectorIndex = matchIndex;
    } else {
        // Fallback random sector index
        sectorIndex = Math.floor(Math.random() * SECTORS.length);
    }
    
    // Hide previous result
    const resultDiv = document.getElementById('rouletteResult');
    resultDiv.style.display = 'none';
    
    animateSpin(sectorIndex, selectedMovie);
}

function animateSpin(targetSectorIndex, selectedMovie) {
    isSpinning = true;
    const spinBtn = document.getElementById('spinButton');
    spinBtn.disabled = true;
    
    const numSectors = SECTORS.length;
    const arcSize = (Math.PI * 2) / numSectors;
    
    // Configure spin metrics
    const rotations = 6; // Full rotations
    const startAngle = wheelAngle % (Math.PI * 2);
    
    // Calculate final target rotation angle to align sector with the top pointer (-90deg or 3/2 PI)
    // Pointer is at the top of the wheel (angle = -Math.PI / 2)
    // To land on targetSectorIndex, we must align it with the pointer
    const targetSectorCenter = targetSectorIndex * arcSize + arcSize / 2;
    const finalAngle = (Math.PI * 2) * rotations - targetSectorCenter - Math.PI / 2;
    
    const duration = 5000; // 5 seconds
    const startTime = performance.now();
    
    let lastSectorCrossed = -1;
    
    function update(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out cubic: smooth slowing down
        const ease = 1 - Math.pow(1 - progress, 3);
        
        wheelAngle = startAngle + (finalAngle - startAngle) * ease;
        drawWheel();
        
        // Detect sector crossings for ticking sound
        // Pointer is at top (-PI/2), so we calculate what sector matches -PI/2 in local wheel space
        const currentLocalPointerAngle = (-Math.PI / 2 - wheelAngle) % (Math.PI * 2);
        const normalizedPointerAngle = currentLocalPointerAngle < 0 ? currentLocalPointerAngle + Math.PI * 2 : currentLocalPointerAngle;
        const currentSectorCrossed = Math.floor(normalizedPointerAngle / arcSize);
        
        if (currentSectorCrossed !== lastSectorCrossed) {
            playClickSound();
            lastSectorCrossed = currentSectorCrossed;
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            // Spin complete
            isSpinning = false;
            spinBtn.disabled = false;
            showResult(selectedMovie);
        }
    }
    
    requestAnimationFrame(update);
}

function showResult(movie) {
    const resultDiv = document.getElementById('rouletteResult');
    
    // Format genres tags
    const genresHtml = movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');
    
    resultDiv.innerHTML = `
        <div class="roulette-result-card">
            <img class="result-poster" src="${movie.poster}" alt="${movie.title}">
            <div class="result-info">
                <h4 class="result-title">${movie.title}</h4>
                <div class="result-meta">
                    <span style="color: var(--neon-yellow); font-weight: 700;">🍿 IMDb ${movie.rating}</span>
                    <span>•</span>
                    <span>${movie.duration}</span>
                </div>
                <div style="margin-bottom: 8px;">${genresHtml}</div>
                <p class="result-desc">${movie.desc}</p>
                
                ${movie.status === 'now' ? `
                    <button class="result-action-btn" onclick="window.location.href='index.html#schedule'">Выбрать сеанс</button>
                ` : `
                    <span style="color: var(--neon-yellow); font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">Скоро в кино!</span>
                `}
            </div>
        </div>
    `;
    
    resultDiv.style.display = 'flex';
}
