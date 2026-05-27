/**
 * «Варик - Гончарик» Cinema Network
 * Simplified Kinobar Shop Logic (2026)
 * Integrates with window.Cart global system
 */

const BAR_PRODUCTS = [
    {
        id: "popcorn_caramel",
        title: "Карамельный попкорн",
        category: "popcorn",
        desc: "Классический хрустящий попкорн в сладкой карамельной глазури с нотками сливочного масла.",
        basePrice: 290,
        sizes: { S: 0, M: 60, L: 120 },
        tag: "хит",
        image: "🍿"
    },
    {
        id: "popcorn_cheese",
        title: "Сырный попкорн",
        category: "popcorn",
        desc: "Суперсырный попкорн с насыщенным вкусом чеддера. Настоящий фаворит киноманов.",
        basePrice: 290,
        sizes: { S: 0, M: 60, L: 120 },
        tag: "сырный",
        image: "🍿"
    },
    {
        id: "popcorn_salted",
        title: "Соленый попкорн",
        category: "popcorn",
        desc: "Традиционный соленый попкорн. Легкий хруст и ничего лишнего для любителей классики.",
        basePrice: 250,
        sizes: { S: 0, M: 50, L: 100 },
        tag: "классика",
        image: "🍿"
    },
    {
        id: "cola",
        title: "Кока-Кола",
        category: "drinks",
        desc: "Освежающая и бодрящая классическая газировка со льдом для максимального вкуса.",
        basePrice: 150,
        sizes: { S: 0, M: 40, L: 80 },
        tag: "ice",
        image: "🥤"
    },
    {
        id: "orange_juice",
        title: "Апельсиновый сок",
        category: "drinks",
        desc: "Натуральный свежевыжатый сок спелых апельсинов с мякотью. Заряд витаминов.",
        basePrice: 180,
        sizes: { S: 0, M: 50, L: 90 },
        tag: "свежий",
        image: "🥤"
    },
    {
        id: "nachos_cheese",
        title: "Начос с сырным соусом",
        category: "snacks",
        desc: "Мексиканские кукурузные чипсы с нежным и тягучим фирменным сырным соусом дип.",
        basePrice: 320,
        sizes: { S: 0, M: 70, L: 130 },
        tag: "острый",
        image: "🌮"
    },
    {
        id: "nachos_salsa",
        title: "Начос с сальсой",
        category: "snacks",
        desc: "Кукурузные чипсы с пикантным соусом сальса из спелых томатов, перца халапеньо и зелени.",
        basePrice: 300,
        sizes: { S: 0, M: 70, L: 130 },
        tag: "vegan",
        image: "🌮"
    },
    {
        id: "combo_superhero",
        title: "Комбо «Супер-Герой»",
        category: "combo",
        desc: "Мега-порция карамельного попкорна + большая Кока-Кола. Экономия 15%!",
        basePrice: 420,
        sizes: { S: 0, M: 80, L: 150 },
        tag: "акция",
        image: "🎁"
    },
    {
        id: "combo_lovestory",
        title: "Комбо «Love Story»",
        category: "combo",
        desc: "Два средних попкорна (на ваш выбор) + два средних напитка. Идеально для свидания.",
        basePrice: 690,
        sizes: { M: 0, L: 140 },
        tag: "топ",
        image: "💖"
    }
];

let activeCategory = "all";

document.addEventListener('DOMContentLoaded', () => {
    initCatalog();
});

// Render dynamic catalog products
function initCatalog() {
    const grid = document.getElementById('barProductsGrid');
    if (!grid) return;
    
    renderCatalog();
    
    // Category filters handling
    const filters = document.querySelectorAll('#barFilters .tab-btn');
    filters.forEach(tab => {
        tab.addEventListener('click', () => {
            filters.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeCategory = tab.dataset.category;
            renderCatalog();
        });
    });
}

function renderCatalog() {
    const grid = document.getElementById('barProductsGrid');
    if (!grid) return;
    grid.innerHTML = "";
    
    const filtered = BAR_PRODUCTS.filter(p => activeCategory === "all" || p.category === activeCategory);
    
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'bar-card';
        card.dataset.id = p.id;
        
        const availableSizes = Object.keys(p.sizes);
        const defaultSize = availableSizes[0];
        const defaultPrice = p.basePrice + p.sizes[defaultSize];
        
        const sizeBtnsHtml = availableSizes.map(size => `
            <button class="size-option-btn ${size === defaultSize ? 'active' : ''}" data-size="${size}">
                ${size}
            </button>
        `).join('');
        
        card.innerHTML = `
            <div class="bar-img-wrap">
                <span style="font-size: 5rem;">${p.image}</span>
                <span class="bar-tag">${p.tag}</span>
            </div>
            <div class="bar-info">
                <h3 class="bar-title">${p.title}</h3>
                <p class="bar-desc">${p.desc}</p>
                <div class="bar-options">
                    <div class="bar-size-selector">
                        ${sizeBtnsHtml}
                    </div>
                    <div class="bar-buy-row">
                        <div class="bar-price"><span class="price-val">${defaultPrice}</span> ₽</div>
                        <button class="add-to-cart-btn" data-id="${p.id}">+</button>
                    </div>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
        
        // Bind size selection events on card
        const sizeBtns = card.querySelectorAll('.size-option-btn');
        sizeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                sizeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const selectedSize = btn.dataset.size;
                const newPrice = p.basePrice + p.sizes[selectedSize];
                card.querySelector('.price-val').textContent = newPrice;
            });
        });
        
        // Bind add to cart click
        const addBtn = card.querySelector('.add-to-cart-btn');
        addBtn.addEventListener('click', () => {
            const activeSizeBtn = card.querySelector('.size-option-btn.active');
            const selectedSize = activeSizeBtn ? activeSizeBtn.dataset.size : 'M';
            const price = p.basePrice + p.sizes[selectedSize];
            
            // Delegate adding to the global window.Cart manager!
            if (window.Cart && typeof window.Cart.addBarItem === 'function') {
                window.Cart.addBarItem(p.id, p.title, selectedSize, price, p.image);
            }
        });
    });
}
