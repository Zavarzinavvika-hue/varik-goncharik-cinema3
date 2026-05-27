/**
 * «Варик - Гончарик» Cinema Network
 * Core Client-Side Logic & Unified Cart System (2026)
 */

// Movie Database
const moviesData = [
    {
        id: "barbie",
        title: "Барби",
        originalTitle: "Barbie",
        rating: "8.1",
        duration: "114 мин.",
        genres: ["комедия", "фантастика", "мелодрама"],
        desc: "Самая популярная кукла в истории переживает экзистенциальный кризис и отправляется из идеального Барбиленда в реальный мир вместе с Кеном, чтобы понять свое истинное предназначение.",
        poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=600&auto=format&fit=crop",
        emoji: "🎀",
        hall: "Зал 1",
        showtimes: {
            today: [
                { time: "10:15", price: 350, format: "Зал 1" },
                { time: "13:40", price: 500, format: "Зал 1" },
                { time: "18:20", price: 750, format: "Зал 1" },
                { time: "21:00", price: 750, format: "Зал 1" }
            ],
            tomorrow: [
                { time: "10:15", price: 350, format: "Зал 1" },
                { time: "13:40", price: 500, format: "Зал 1" },
                { time: "18:20", price: 750, format: "Зал 1" },
                { time: "21:00", price: 750, format: "Зал 1" }
            ]
        },
        status: "now"
    },
    {
        id: "oppenheimer",
        title: "Оппенгеймер",
        originalTitle: "Oppenheimer",
        rating: "8.6",
        duration: "180 мин.",
        genres: ["драма", "биография", "история"],
        desc: "Грандиозная история жизни американского физика Роберта Оппенгеймера, стоявшего во главе первых разработок ядерного оружия во времена Второй мировой войны в рамках Манхэттенского проекта.",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=600&auto=format&fit=crop",
        emoji: "🎩",
        hall: "Зал IMAX",
        showtimes: {
            today: [
                { time: "10:30", price: 450, format: "Зал IMAX" },
                { time: "14:00", price: 650, format: "Зал IMAX" },
                { time: "18:00", price: 800, format: "Зал IMAX" },
                { time: "21:45", price: 800, format: "Зал IMAX" }
            ],
            tomorrow: [
                { time: "10:30", price: 450, format: "Зал IMAX" },
                { time: "14:00", price: 650, format: "Зал IMAX" },
                { time: "18:00", price: 800, format: "Зал IMAX" },
                { time: "21:45", price: 800, format: "Зал IMAX" }
            ]
        },
        status: "now"
    },
    {
        id: "cheburashka",
        title: "Чебурашка",
        originalTitle: "Cheburashka",
        rating: "8.0",
        duration: "113 мин.",
        genres: ["семейный", "комедия", "мультфильм"],
        desc: "Иногда, чтобы вернуть солнце и улыбки в мир взрослых, требуется всего один маленький ушастый герой из далекой апельсиновой страны. Приключения любимого героя в южном приморском городке.",
        poster: "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?q=80&w=600&auto=format&fit=crop",
        emoji: "🍊",
        hall: "Семейный зал",
        showtimes: {
            today: [
                { time: "09:40", price: 350, format: "Семейный зал" },
                { time: "12:15", price: 450, format: "Семейный зал" },
                { time: "15:00", price: 600, format: "Семейный зал" },
                { time: "17:45", price: 600, format: "Семейный зал" }
            ],
            tomorrow: [
                { time: "09:40", price: 350, format: "Семейный зал" },
                { time: "12:15", price: 450, format: "Семейный зал" },
                { time: "15:00", price: 600, format: "Семейный зал" },
                { time: "17:45", price: 600, format: "Семейный зал" }
            ]
        },
        status: "now"
    },
    {
        id: "avatar2",
        title: "Аватар 2: Путь воды",
        originalTitle: "Avatar: The Way of Water",
        rating: "8.3",
        duration: "192 мин.",
        genres: ["фантастика", "боевик", "приключения"],
        desc: "После принятия человеческого облика Джейк Салли становится предводителем народа нави и берет на себя миссию по защите своей семьи и Пандоры от возвращающихся колонизаторов.",
        poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
        emoji: "🌊",
        hall: "Зал 3D",
        showtimes: {
            today: [
                { time: "11:00", price: 450, format: "Зал 3D" },
                { time: "15:30", price: 600, format: "Зал 3D" },
                { time: "19:40", price: 800, format: "Зал 3D" },
                { time: "23:10", price: 800, format: "Зал 3D" }
            ],
            tomorrow: [
                { time: "11:00", price: 450, format: "Зал 3D" },
                { time: "15:30", price: 600, format: "Зал 3D" },
                { time: "19:40", price: 800, format: "Зал 3D" },
                { time: "23:10", price: 800, format: "Зал 3D" }
            ]
        },
        status: "now"
    },
    {
        id: "avengers_doomsday",
        title: "Мстители «Думсдей»",
        originalTitle: "Avengers: Doomsday",
        rating: "8.7",
        duration: "155 мин.",
        genres: ["боевик", "фантастика", "приключения"],
        desc: "Мстители сталкиваются с величайшей угрозой для мультивселенной — всемогущим Виктором фон Думом, подчиняющим себе саму реальность с помощью темной магии и передовых технологий.",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=600&auto=format&fit=crop",
        emoji: "🦸‍♂️",
        hall: "VIP Зал",
        showtimes: {
            today: [
                { time: "10:00", price: 400, format: "VIP Зал" },
                { time: "14:15", price: 550, format: "VIP Зал" },
                { time: "18:30", price: 800, format: "VIP Зал" },
                { time: "22:00", price: 800, format: "VIP Зал" }
            ],
            tomorrow: [
                { time: "10:00", price: 400, format: "VIP Зал" },
                { time: "14:15", price: 550, format: "VIP Зал" },
                { time: "18:30", price: 800, format: "VIP Зал" },
                { time: "22:00", price: 800, format: "VIP Зал" }
            ]
        },
        status: "now"
    },
    {
        id: "batman2",
        title: "Бэтмен: Часть 2",
        originalTitle: "The Batman: Part II",
        rating: "8.4",
        duration: "160 мин.",
        genres: ["триллер", "боевик", "драма"],
        desc: "Темный Рыцарь погружается в темную изнанку Готэма еще глубже. Столкнувшись с новыми безумными криминальными гениями, Брюс Уэйн проверяет на прочность свой моральный кодекс.",
        poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=600&auto=format&fit=crop",
        emoji: "🦇",
        hall: "Зал IMAX 2",
        showtimes: {
            today: [
                { time: "11:20", price: 400, format: "Зал IMAX 2" },
                { time: "15:10", price: 550, format: "Зал IMAX 2" },
                { time: "19:15", price: 800, format: "Зал IMAX 2" },
                { time: "22:45", price: 800, format: "Зал IMAX 2" }
            ],
            tomorrow: [
                { time: "11:20", price: 400, format: "Зал IMAX 2" },
                { time: "15:10", price: 550, format: "Зал IMAX 2" },
                { time: "19:15", price: 800, format: "Зал IMAX 2" },
                { time: "22:45", price: 800, format: "Зал IMAX 2" }
            ]
        },
        status: "now"
    },
    {
        id: "dune3",
        title: "Дюна: Часть 3",
        originalTitle: "Dune: Part Three",
        rating: "8.8",
        duration: "172 мин.",
        genres: ["фантастика", "драма", "боевик"],
        desc: "Адаптация романа «Мессия Дюны». Пол Атрейдес сталкивается с заговорами внутри своей собственной империи, пытаясь предотвратить джихад, охвативший всю изученную вселенную под его именем.",
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
        emoji: "⏳",
        hall: "Зал IMAX 3",
        showtimes: {
            today: [
                { time: "10:45", price: 450, format: "Зал IMAX 3" },
                { time: "14:45", price: 650, format: "Зал IMAX 3" },
                { time: "18:50", price: 800, format: "Зал IMAX 3" },
                { time: "22:30", price: 800, format: "Зал IMAX 3" }
            ],
            tomorrow: [
                { time: "10:45", price: 450, format: "Зал IMAX 3" },
                { time: "14:45", price: 650, format: "Зал IMAX 3" },
                { time: "18:50", price: 800, format: "Зал IMAX 3" },
                { time: "22:30", price: 800, format: "Зал IMAX 3" }
            ]
        },
        status: "now"
    },
    {
        id: "elki12",
        title: "Елки 12",
        originalTitle: "Yolki 12",
        rating: "7.1",
        duration: "95 мин.",
        genres: ["комедия", "семейный"],
        desc: "Новые новогодние новеллы о чудесах, любви и дружбе. Герои из самых разных уголков России находят невероятные способы связаться друг с другом и исполнить заветные новогодние желания.",
        poster: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=600&auto=format&fit=crop",
        emoji: "🎄",
        hall: "Зал 2",
        showtimes: {
            today: [
                { time: "10:20", price: 350, format: "Зал 2" },
                { time: "13:30", price: 450, format: "Зал 2" },
                { time: "17:15", price: 600, format: "Зал 2" },
                { time: "20:30", price: 700, format: "Зал 2" }
            ],
            tomorrow: [
                { time: "10:20", price: 350, format: "Зал 2" },
                { time: "13:30", price: 450, format: "Зал 2" },
                { time: "17:15", price: 600, format: "Зал 2" },
                { time: "20:30", price: 700, format: "Зал 2" }
            ]
        },
        status: "now"
    },
    {
        id: "f1",
        title: "F1",
        originalTitle: "F1",
        rating: "8.2",
        duration: "132 мин.",
        genres: ["спорт", "боевик", "драма"],
        desc: "Бывший гонщик Формулы-1 возвращается в спорт, чтобы стать наставником молодого перспективного пилота в вымышленной команде APXGP. Скорость, адреналин и борьба за чемпионство.",
        poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop",
        emoji: "🏎",
        hall: "VIP Зал 2",
        showtimes: {
            today: [
                { time: "11:15", price: 400, format: "VIP Зал 2" },
                { time: "16:00", price: 550, format: "VIP Зал 2" },
                { time: "20:10", price: 800, format: "VIP Зал 2" },
                { time: "23:20", price: 800, format: "VIP Зал 2" }
            ],
            tomorrow: [
                { time: "11:15", price: 400, format: "VIP Зал 2" },
                { time: "16:00", price: 550, format: "VIP Зал 2" },
                { time: "20:10", price: 800, format: "VIP Зал 2" },
                { time: "23:20", price: 800, format: "VIP Зал 2" }
            ]
        },
        status: "now"
    },
    {
        id: "tribogatyrya",
        title: "Три Богатыря 12",
        originalTitle: "Three Heroes 12",
        rating: "7.7",
        duration: "85 мин.",
        genres: ["мультфильм", "комедия", "семейный"],
        desc: "Новые увлекательные приключения Алеши Поповича, Добрыни Никитича и Ильи Муромца. Князь Киевский снова втягивает богатырей в невероятную историю, грозящую перевернуть всю русскую землю.",
        poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
        emoji: "🐎",
        hall: "Зал 4",
        showtimes: {
            today: [
                { time: "09:30", price: 350, format: "Зал 4" },
                { time: "11:45", price: 450, format: "Зал 4" },
                { time: "14:00", price: 500, format: "Зал 4" },
                { time: "16:30", price: 600, format: "Зал 4" }
            ],
            tomorrow: [
                { time: "09:30", price: 350, format: "Зал 4" },
                { time: "11:45", price: 450, format: "Зал 4" },
                { time: "14:00", price: 500, format: "Зал 4" },
                { time: "16:30", price: 600, format: "Зал 4" }
            ]
        },
        status: "now"
    },
    {
        id: "alien_romulus",
        title: "Чужой: Ромул",
        originalTitle: "Alien: Romulus",
        rating: "8.2",
        duration: "120 мин.",
        genres: ["ужасы", "фантастика", "триллер"],
        desc: "Группа молодых колонизаторов исследует заброшенную космическую станцию «Ромул» и сталкивается лицом к лицу с самой ужасающей формой жизни во вселенной — ксеноморфами.",
        poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
        emoji: "👽",
        hall: "Зал 6",
        showtimes: {
            today: [
                { time: "12:00", price: 400, format: "Зал 6" },
                { time: "16:45", price: 550, format: "Зал 6" },
                { time: "21:20", price: 750, format: "Зал 6" },
                { time: "23:55", price: 750, format: "Зал 6" }
            ],
            tomorrow: [
                { time: "12:00", price: 400, format: "Зал 6" },
                { time: "16:45", price: 550, format: "Зал 6" },
                { time: "21:20", price: 750, format: "Зал 6" },
                { time: "23:55", price: 750, format: "Зал 6" }
            ]
        },
        status: "now"
    },
    {
        id: "predator",
        title: "Хищник: Планета смерти",
        originalTitle: "Predator: Death Planet",
        rating: "7.9",
        duration: "118 мин.",
        genres: ["боевик", "фантастика", "триллер"],
        desc: "Группа элитных солдат оказывается заброшенной на охотничьи угодья Хищников на далекой болотной планете. Чтобы выжить, им предстоит стать охотниками самим, разгадав инопланетные ловушки.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop",
        emoji: "🎯",
        hall: "Зал 8",
        showtimes: {
            today: [
                { time: "12:30", price: 400, format: "Зал 8" },
                { time: "17:20", price: 550, format: "Зал 8" },
                { time: "21:40", price: 750, format: "Зал 8" },
                { time: "00:15", price: 750, format: "Зал 8" }
            ],
            tomorrow: [
                { time: "12:30", price: 400, format: "Зал 8" },
                { time: "17:20", price: 550, format: "Зал 8" },
                { time: "21:40", price: 750, format: "Зал 8" },
                { time: "00:15", price: 750, format: "Зал 8" }
            ]
        },
        status: "now"
    }
];

// Seating Map Configuration
const SEATING_ROWS = 6;
const SEATING_COLS = 10;
const VIP_ROWS = [5]; // Row 5 is VIP

let currentBookingState = {
    movieId: "",
    movieTitle: "",
    time: "",
    date: "",
    format: "",
    pricePerSeat: 0,
    selectedSeats: [], // Array of {row, col}
    occupiedSeats: {} // Key: "movieId-date-time", Value: Array of "row-col" strings
};

// ==========================================
// UNIFIED GLOBAL CART SYSTEM
// ==========================================
window.Cart = {
    items: [],

    init() {
        this.load();
        this.injectHTML();
        this.bindEvents();
        this.renderUI();
    },

    load() {
        try {
            const stored = localStorage.getItem('unifiedCart');
            this.items = stored && stored !== "null" && stored !== "undefined" ? JSON.parse(stored) || [] : [];
        } catch(e) {
            this.items = [];
            localStorage.removeItem('unifiedCart');
        }
        
        try {
            const savedOccupied = localStorage.getItem('occupiedSeatsDB');
            if (savedOccupied && savedOccupied !== "null" && savedOccupied !== "undefined") {
                currentBookingState.occupiedSeats = JSON.parse(savedOccupied) || {};
            } else {
                currentBookingState.occupiedSeats = {};
            }
        } catch(e) {
            currentBookingState.occupiedSeats = {};
        }
    },

    save() {
        localStorage.setItem('unifiedCart', JSON.stringify(this.items));
    },

    // Inject cart sidebar & floating button programmatically on DOM load
    injectHTML() {
        if (document.getElementById('cartSidebar')) return;

        // Floating Drawer Toggle
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'cart-drawer-toggle';
        toggleBtn.id = 'cartToggle';
        toggleBtn.innerHTML = `
            🛒
            <span class="cart-badge" id="cartBadgeCount" style="display: none;">0</span>
        `;
        document.body.appendChild(toggleBtn);

        // Sidebar Drawer
        const sidebar = document.createElement('aside');
        sidebar.className = 'cart-sidebar';
        sidebar.id = 'cartSidebar';
        sidebar.innerHTML = `
            <div class="cart-header">
                <h3>Моя корзина</h3>
                <button class="close-cart-btn" id="closeCart">&times;</button>
            </div>
            <div class="cart-items-container" id="cartItemsList">
                <div class="cart-empty-text">Ваша корзина пуста 🍿</div>
            </div>
            <div class="cart-footer">
                <div class="cart-total-row">
                    <span>Итого к оплате:</span>
                    <span id="cartTotalPrice">0 ₽</span>
                </div>
                <button class="cart-checkout-btn" id="cartCheckoutBtn" disabled>Оплатить заказ</button>
            </div>
        `;
        document.body.appendChild(sidebar);

        // Universal Checkout Success Modal
        const orderModal = document.createElement('div');
        orderModal.className = 'modal-overlay';
        orderModal.id = 'orderModal';
        orderModal.innerHTML = `
            <div class="modal-card" style="max-width: 500px;">
                <div class="modal-header">
                    <h3>Заказ оплачен!</h3>
                    <button class="modal-close-btn" onclick="document.getElementById('orderModal').classList.remove('active')" title="Вернуться на сайт">&times;</button>
                </div>
                <div class="modal-body" id="orderModalBody"></div>
            </div>
        `;
        document.body.appendChild(orderModal);

        orderModal.addEventListener('click', (e) => {
            if (e.target === orderModal) {
                orderModal.classList.remove('active');
            }
        });
    },

    bindEvents() {
        const toggle = document.getElementById('cartToggle');
        const close = document.getElementById('closeCart');
        const sidebar = document.getElementById('cartSidebar');
        const checkout = document.getElementById('cartCheckoutBtn');

        if (toggle && sidebar) {
            toggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });
        }

        if (close && sidebar) {
            close.addEventListener('click', () => {
                sidebar.classList.remove('open');
            });
        }

        if (checkout) {
            checkout.addEventListener('click', () => {
                this.checkout();
            });
        }
    },

    addTicket(movieId, movieTitle, time, date, format, row, col, price) {
        const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
        const seatLabel = `Ряд ${rowLabels[row - 1]}, Место ${col}`;
        const isVip = VIP_ROWS.includes(row);
        const finalPrice = price + (isVip ? 150 : 0);
        
        const itemId = `ticket-${movieId}-${date === "Сегодня" ? "today" : "tomorrow"}-${time}-${row}-${col}`;

        // Prevent duplicates
        if (this.items.some(item => item.id === itemId)) return;

        this.items.push({
            id: itemId,
            type: 'ticket',
            title: `${movieTitle} (Билет)`,
            details: `${date}, в ${time} • ${format} • ${seatLabel}`,
            price: finalPrice,
            qty: 1,
            image: '🎟️',
            meta: { movieId, movieTitle, time, date, format, row, col, seatLabel, price: finalPrice }
        });

        this.save();
        this.renderUI();
        this.playChimeSound();
    },

    addBarItem(productId, title, size, price, image) {
        const itemId = `bar-${productId}-${size}`;
        const existingIndex = this.items.findIndex(item => item.id === itemId);

        if (existingIndex > -1) {
            this.items[existingIndex].qty += 1;
        } else {
            this.items.push({
                id: itemId,
                type: 'bar',
                title: title,
                details: `Размер: ${size}`,
                price: price,
                qty: 1,
                image: image,
                meta: { productId, title, size, price, image }
            });
        }

        this.save();
        this.renderUI();
        this.playChimeSound();
    },

    remove(index) {
        this.items.splice(index, 1);
        this.save();
        this.renderUI();
    },

    updateQty(index, qty) {
        if (qty <= 0) {
            this.items.splice(index, 1);
        } else {
            this.items[index].qty = qty;
        }
        this.save();
        this.renderUI();
    },

    clear() {
        this.items = [];
        this.save();
        this.renderUI();
    },

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    },

    renderUI() {
        const list = document.getElementById('cartItemsList');
        const badge = document.getElementById('cartBadgeCount');
        const total = document.getElementById('cartTotalPrice');
        const checkout = document.getElementById('cartCheckoutBtn');

        if (!list) return;

        let totalItems = this.items.reduce((sum, item) => sum + item.qty, 0);
        let totalPrice = this.getTotal();

        if (totalItems > 0) {
            badge.textContent = totalItems;
            badge.style.display = 'flex';
            checkout.disabled = false;
        } else {
            badge.style.display = 'none';
            checkout.disabled = true;
        }

        total.textContent = `${totalPrice} ₽`;

        if (this.items.length === 0) {
            list.innerHTML = `<div class="cart-empty-text">Ваша корзина пуста 🍿</div>`;
            return;
        }

        list.innerHTML = "";
        this.items.forEach((item, index) => {
            const row = document.createElement('div');
            row.className = 'cart-item';

            // Tickets are unit lines; only offer a direct 'delete' rather than spinner qty
            const controlsHtml = item.type === 'ticket'
                ? `<button class="cart-control-btn delete-ticket" data-index="${index}" style="width: auto; height: auto; padding: 4px 10px; font-size: 0.75rem; border: 1px solid var(--border-glass); border-radius: 6px;">Удалить</button>`
                : `
                    <button class="cart-control-btn minus" data-index="${index}">&minus;</button>
                    <span class="cart-item-qty">${item.qty}</span>
                    <button class="cart-control-btn plus" data-index="${index}">&plus;</button>
                `;

            row.innerHTML = `
                <span style="font-size: 2.2rem; background: #150f28; padding: 5px; border-radius: 8px;">${item.image}</span>
                <div class="cart-item-details">
                    <h4 class="cart-item-name" style="font-size: 0.95rem;">${item.title}</h4>
                    <div class="cart-item-option" style="font-size: 0.75rem;">${item.details}</div>
                    <div class="cart-item-price" style="font-size: 0.85rem; font-weight: 700; color: var(--neon-yellow);">${item.price * item.qty}₽</div>
                </div>
                <div class="cart-item-control">
                    ${controlsHtml}
                </div>
            `;
            list.appendChild(row);
        });

        // Bind item adjustments
        list.querySelectorAll('.cart-control-btn.minus, .cart-control-btn.delete-ticket').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.index);
                const item = this.items[idx];
                if (item.type === 'ticket') {
                    this.remove(idx);
                } else {
                    this.updateQty(idx, item.qty - 1);
                }
            });
        });

        list.querySelectorAll('.cart-control-btn.plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.index);
                const item = this.items[idx];
                this.updateQty(idx, item.qty + 1);
            });
        });
    },

    checkout() {
        const modal = document.getElementById('orderModal');
        const modalBody = document.getElementById('orderModalBody');
        const sidebar = document.getElementById('cartSidebar');

        if (!modal || !modalBody) return;

        // Close sidebar
        sidebar.classList.remove('open');

        const tickets = this.items.filter(item => item.type === 'ticket');
        const barItems = this.items.filter(item => item.type === 'bar');

        let html = `
            <div class="ticket-success-wrap">
                <div class="success-icon-anim">🎉</div>
                <h3 style="color: var(--neon-cyan); margin-bottom: 8px;">Оплата прошла успешно!</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">
                    Ваш заказ успешно оплачен. Штрихкоды и билеты для входа в зал представлены ниже:
                </p>
        `;

        // 1. Process Tickets
        if (tickets.length > 0) {
            let userTickets = JSON.parse(localStorage.getItem('userTickets') || '[]');
            
            tickets.forEach(t => {
                const ticketCode = 'VG-' + Math.floor(100000 + Math.random() * 900000);
                const meta = t.meta || {};
                const seatLabel = meta.seatLabel || t.details || 'Ряд A, Место 1';
                const time = meta.time || '10:30';
                const date = meta.date || 'Сегодня';
                const format = meta.format || '2D';
                const movieId = meta.movieId || 'dune2';
                const row = meta.row || 1;
                const col = meta.col || 1;

                const ticketData = {
                    code: ticketCode,
                    movieTitle: t.title ? t.title.replace(' (Билет)', '') : 'Фильм',
                    seats: seatLabel,
                    time: time,
                    date: date,
                    price: t.price || 350,
                    timestamp: new Date().getTime()
                };
                userTickets.unshift(ticketData);

                // Save seat as fully occupied in memory DB
                const dateKey = date === "Сегодня" ? "today" : "tomorrow";
                const occupiedKey = `${movieId}-${dateKey}-${time}`;
                if (!currentBookingState.occupiedSeats[occupiedKey]) {
                    currentBookingState.occupiedSeats[occupiedKey] = [];
                }
                currentBookingState.occupiedSeats[occupiedKey].push(`${row}-${col}`);

                html += `
                    <div class="ticket-visual-card" style="width: 100%; margin: 15px auto; text-align: left;">
                        <div class="ticket-title">${t.title || 'Билет на фильм'}</div>
                        <div class="ticket-info-grid">
                            <div>
                                <span>Дата / Время</span>
                                <strong>${date}, в ${time}</strong>
                            </div>
                            <div>
                                <span>Формат</span>
                                <strong>${format}</strong>
                            </div>
                            <div>
                                <span>Место</span>
                                <strong>${seatLabel}</strong>
                            </div>
                            <div>
                                <span>Код брони</span>
                                <strong style="color: var(--neon-pink);">${ticketCode}</strong>
                            </div>
                        </div>
                        <div class="ticket-qr" style="margin-top: 15px;">
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0" y="0" width="100" height="100" fill="#fff"/>
                                <rect x="10" y="10" width="20" height="20" fill="#000"/>
                                <rect x="13" y="13" width="14" height="14" fill="#fff"/>
                                <rect x="16" y="16" width="8" height="8" fill="#000"/>
                                
                                <rect x="70" y="10" width="20" height="20" fill="#000"/>
                                <rect x="73" y="13" width="14" height="14" fill="#fff"/>
                                <rect x="76" y="16" width="8" height="8" fill="#000"/>
                                
                                <rect x="10" y="70" width="20" height="20" fill="#000"/>
                                <rect x="13" y="73" width="14" height="14" fill="#fff"/>
                                <rect x="16" y="76" width="8" height="8" fill="#000"/>
                                
                                <rect x="40" y="20" width="5" height="10" fill="#000"/>
                                <rect x="45" y="10" width="10" height="5" fill="#000"/>
                                <rect x="50" y="30" width="15" height="5" fill="#000"/>
                                <rect x="35" y="45" width="20" height="10" fill="#000"/>
                                <rect x="70" y="40" width="5" height="15" fill="#000"/>
                                <rect x="15" y="45" width="10" height="5" fill="#000"/>
                                <rect x="45" y="60" width="5" height="15" fill="#000"/>
                                <rect x="55" y="70" width="20" height="5" fill="#000"/>
                                <rect x="80" y="65" width="10" height="15" fill="#000"/>
                                <rect x="40" y="80" width="15" height="10" fill="#000"/>
                            </svg>
                        </div>
                    </div>
                `;
            });
            
            localStorage.setItem('userTickets', JSON.stringify(userTickets));
            // Persist occupied seatings
            localStorage.setItem('occupiedSeatsDB', JSON.stringify(currentBookingState.occupiedSeats));
        }

        // 2. Process Bar Items
        if (barItems.length > 0) {
            let userOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
            const orderNumber = 'VG-BAR-' + Math.floor(1000 + Math.random() * 9000);
            const orderSummary = barItems.map(item => `${item.title || 'Товар'} (${item.meta && item.meta.size ? item.meta.size : 'M'}) × ${item.qty}`).join(', ');
            const barTotalPrice = barItems.reduce((sum, item) => sum + item.price * item.qty, 0);

            userOrders.unshift({
                code: orderNumber,
                summary: orderSummary,
                price: barTotalPrice,
                timestamp: new Date().getTime()
            });
            localStorage.setItem('userOrders', JSON.stringify(userOrders));

            html += `
                <div class="ticket-visual-card" style="width: 100%; margin: 15px auto; text-align: left;">
                    <div class="ticket-title">Заказ в кинобаре № ${orderNumber}</div>
                    <div class="ticket-info-grid" style="grid-template-columns: 1fr;">
                        <div>
                            <span>Состав заказа</span>
                            <strong style="font-size: 0.85rem; line-height: 1.4;">${orderSummary}</strong>
                        </div>
                        <div style="margin-top: 10px;">
                            <span>Итоговая стоимость</span>
                            <strong style="color: var(--neon-yellow); font-size: 1.1rem;">${barTotalPrice} ₽</strong>
                        </div>
                    </div>
                    <div style="background: white; padding: 10px; border-radius: 8px; margin-top: 15px; display: flex; flex-direction: column; align-items: center;">
                        <svg viewBox="0 0 100 30" width="100%" height="45" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" y="0" width="100" height="30" fill="#fff"/>
                            <rect x="5" y="2" width="2" height="26" fill="#000"/>
                            <rect x="9" y="2" width="1" height="26" fill="#000"/>
                            <rect x="12" y="2" width="3" height="26" fill="#000"/>
                            <rect x="17" y="2" width="1" height="26" fill="#000"/>
                            <rect x="19" y="2" width="2" height="26" fill="#000"/>
                            <rect x="23" y="2" width="4" height="26" fill="#000"/>
                            <rect x="29" y="2" width="1" height="26" fill="#000"/>
                            <rect x="32" y="2" width="2" height="26" fill="#000"/>
                            <rect x="36" y="2" width="3" height="26" fill="#000"/>
                            <rect x="41" y="2" width="1" height="26" fill="#000"/>
                            <rect x="44" y="2" width="2" height="26" fill="#000"/>
                            <rect x="48" y="2" width="4" height="26" fill="#000"/>
                            <rect x="54" y="2" width="1" height="26" fill="#000"/>
                            <rect x="57" y="2" width="2" height="26" fill="#000"/>
                            <rect x="61" y="2" width="3" height="26" fill="#000"/>
                            <rect x="66" y="2" width="1" height="26" fill="#000"/>
                            <rect x="69" y="2" width="2" height="26" fill="#000"/>
                            <rect x="73" y="2" width="4" height="26" fill="#000"/>
                            <rect x="79" y="2" width="2" height="26" fill="#000"/>
                            <rect x="83" y="2" width="1" height="26" fill="#000"/>
                            <rect x="86" y="2" width="3" height="26" fill="#000"/>
                            <rect x="91" y="2" width="1" height="26" fill="#000"/>
                            <rect x="93" y="2" width="2" height="26" fill="#000"/>
                        </svg>
                        <span style="font-family: monospace; color: #000; font-size: 0.75rem; font-weight: bold; margin-top: 5px;">${orderNumber}</span>
                    </div>
                </div>
            `;
        }

        html += `
                <button class="action-btn primary" style="padding: 12px 35px; font-size: 0.9rem; margin-top: 20px; text-transform: uppercase; letter-spacing: 1px;" onclick="document.getElementById('orderModal').classList.remove('active')">Вернуться на сайт &times;</button>
            </div>
        `;

        modalBody.innerHTML = html;

        // Clear cart drawer items
        this.clear();

        // Reveal order success modal
        modal.classList.add('active');
    },

    playChimeSound() {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc1 = audioCtx.createOscillator();
            const osc2 = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            osc1.connect(gainNode);
            osc2.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            osc1.type = 'sine';
            osc2.type = 'sine';

            osc1.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
            osc1.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.08); // E5

            osc2.frequency.setValueAtTime(783.99, audioCtx.currentTime); // G5
            osc2.frequency.setValueAtTime(1046.50, audioCtx.currentTime + 0.08); // C6

            gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);

            osc1.start();
            osc2.start();
            osc1.stop(audioCtx.currentTime + 0.35);
            osc2.stop(audioCtx.currentTime + 0.35);
        } catch (e) {}
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initCitySelector();
    initBurgerMenu();
    
    // Initialize Global Cart System
    window.Cart.init();
    
    // Check if we are on index.html and render movies
    if (document.getElementById('schedule')) {
        initSchedule();
        initBookingModal();
    }
});

// 1. Navigation Active State
function initHeader() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 2. City Selection Logic with Persistence
function initCitySelector() {
    const citySelect = document.getElementById('citySelect');
    if (!citySelect) return;
    
    // Load city from localStorage
    const savedCity = localStorage.getItem('selectedCity');
    if (savedCity) {
        citySelect.value = savedCity;
    }
    
    citySelect.addEventListener('change', (e) => {
        const selected = e.target.value;
        localStorage.setItem('selectedCity', selected);
        window.dispatchEvent(new CustomEvent('cityChanged', { detail: selected }));
    });
}

// 3. Responsive Burger Menu
function initBurgerMenu() {
    const headerContainer = document.querySelector('.header-container');
    if (!headerContainer) return;
    
    let burgerBtn = document.querySelector('.burger-menu-btn');
    if (!burgerBtn) {
        burgerBtn = document.createElement('button');
        burgerBtn.className = 'burger-menu-btn';
        burgerBtn.innerHTML = '<span></span><span></span><span></span>';
        headerContainer.appendChild(burgerBtn);
    }
    
    const mainNav = document.querySelector('.main-navigation');
    
    burgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        burgerBtn.classList.toggle('open');
        
        const spans = burgerBtn.querySelectorAll('span');
        if (burgerBtn.classList.contains('open')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// 4. Interactive Schedule System
let activeTab = "today"; 
let activeGenre = "all";

function initSchedule() {
    const scheduleSection = document.getElementById('schedule');
    if (!scheduleSection) return;
    
    const filtersWrap = document.createElement('div');
    filtersWrap.className = 'filters-container';
    filtersWrap.innerHTML = `
        <div class="tab-group">
            <button class="tab-btn active" data-tab="today">Сегодня в прокате</button>
            <button class="tab-btn" data-tab="tomorrow">Завтра</button>
            <button class="tab-btn" data-tab="soon">Скоро в кино</button>
        </div>
        <div class="genre-filters">
            <button class="genre-btn active" data-genre="all">Все жанры</button>
            <button class="genre-btn" data-genre="фантастика">Фантастика</button>
            <button class="genre-btn" data-genre="боевик">Боевики</button>
            <button class="genre-btn" data-genre="драма">Драмы</button>
            <button class="genre-btn" data-genre="мультфильм">Семейные</button>
        </div>
    `;
    
    const placeholder = scheduleSection.querySelector('.placeholder-box');
    if (placeholder) placeholder.remove();
    
    const gridContainer = document.createElement('div');
    gridContainer.className = 'movies-grid';
    
    scheduleSection.appendChild(filtersWrap);
    scheduleSection.appendChild(gridContainer);
    
    const tabs = filtersWrap.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeTab = tab.dataset.tab;
            renderMovies();
        });
    });
    
    const genreBtns = filtersWrap.querySelectorAll('.genre-btn');
    genreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            genreBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeGenre = btn.dataset.genre;
            renderMovies();
        });
    });
    
    renderMovies();
}

function renderMovies() {
    const grid = document.querySelector('.movies-grid');
    if (!grid) return;
    grid.innerHTML = "";
    
    // Dynamic page title update based on activeTab
    const scheduleTitle = document.getElementById('scheduleTitle');
    const scheduleSubtitle = document.getElementById('scheduleSubtitle');
    if (scheduleTitle) {
        if (activeTab === "today") {
            scheduleTitle.innerHTML = "🗓 Расписание сеансов на сегодня";
            if (scheduleSubtitle) {
                scheduleSubtitle.style.display = "block";
                scheduleSubtitle.textContent = "Цены зависят от времени суток: утром — дешевле, вечером — дороже. Выбирайте удобный сеанс:";
            }
        } else if (activeTab === "tomorrow") {
            scheduleTitle.innerHTML = "🗓 Расписание сеансов на завтра";
            if (scheduleSubtitle) {
                scheduleSubtitle.style.display = "block";
                scheduleSubtitle.textContent = "Цены зависят от времени суток: утром — дешевле, вечером — дороже. Выбирайте удобный сеанс:";
            }
        } else {
            scheduleTitle.innerHTML = "🗓 Скоро в прокате";
            if (scheduleSubtitle) scheduleSubtitle.style.display = "none";
        }
    }
    
    const filtered = moviesData.filter(movie => {
        if (activeTab === "soon") {
            if (movie.status !== "soon") return false;
        } else {
            if (movie.status !== "now") return false;
            if (!movie.showtimes[activeTab] || movie.showtimes[activeTab].length === 0) return false;
        }
        
        if (activeGenre !== "all" && !movie.genres.includes(activeGenre)) return false;
        
        return true;
    });
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="placeholder-box" style="grid-column: 1 / -1; text-align: center; padding: 40px; background: var(--bg-card); border-radius: 20px; border: 1px solid var(--border-glass);">
                <p>Фильмы по выбранным критериям не найдены. Попробуйте изменить фильтры!</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.dataset.id = movie.id;
        
        const genresHtml = movie.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');
        
        let showtimesHtml = '';
        if (activeTab !== 'soon' && movie.showtimes[activeTab]) {
            const timeEmojis = ["🌅", "☀️", "🌆", "🌙"];
            showtimesHtml = `
                <span class="movie-showtimes-label">Выбирайте удобный сеанс:</span>
                <div class="movie-showtimes-row">
                    ${movie.showtimes[activeTab].map((st, idx) => {
                        const emoji = timeEmojis[idx] || "🎬";
                        return `
                            <button class="showtime-item-btn" 
                                    data-movie-id="${movie.id}"
                                    data-movie-title="${movie.title}"
                                    data-time="${st.time}"
                                    data-format="${movie.hall || st.format}"
                                    data-price="${st.price}">
                                <span class="time-emoji">${emoji}</span>
                                <span class="time-value">${st.time}</span>
                                <span class="price-value">[${st.price} ₽]</span>
                            </button>
                        `;
                    }).join('<span class="showtimes-divider">|</span>')}
                </div>
            `;
        } else {
            showtimesHtml = `
                <div style="margin-top: auto; padding-top: 15px; border-top: 1px solid var(--border-glass);">
                    <span style="color: var(--neon-yellow); font-weight: 700; font-size: 0.9rem; text-transform: uppercase;">Скоро в кинотеатрах</span>
                </div>
            `;
        }
        
        const titleWithEmoji = movie.emoji ? `${movie.emoji} ${movie.title}` : movie.title;
        const hallInfo = movie.hall ? ` <span class="movie-hall-tag">(${movie.hall})</span>` : '';
        
        card.innerHTML = `
            <div class="movie-poster-wrap">
                <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
                <div class="movie-rating">🍿 ${movie.rating}</div>
                <div class="movie-duration">${movie.duration}</div>
            </div>
            <div class="movie-info">
                <div class="movie-genres">${genresHtml}</div>
                <h3 class="movie-title">${titleWithEmoji}${hallInfo}</h3>
                <p class="movie-desc">${movie.desc}</p>
                ${showtimesHtml}
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    // Add call-to-action banner at the bottom of the grid
    if (activeTab !== 'soon') {
        const ctaWrap = document.createElement('div');
        ctaWrap.className = 'schedule-cta';
        ctaWrap.innerHTML = `
            <p>👇 Для бронирования билетов нажмите на время сеанса выше или испытайте удачу в нашей Кино-Рулетке!</p>
            <a href="roulette.html" class="action-btn primary" style="padding: 10px 24px; font-size: 0.85rem; border-radius: 20px;">🎲 Кино-Рулетка</a>
        `;
        grid.appendChild(ctaWrap);
    }
    
    const showtimeBtns = grid.querySelectorAll('.showtime-item-btn');
    showtimeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const dataset = btn.dataset;
            openBookingModal(dataset.movieId, dataset.movieTitle, dataset.time, activeTab, dataset.format, parseFloat(dataset.price));
        });
    });
}

// Automatically allocates a free seat for the user on quick showtime click
function getRandomFreeSeat(movieId, dateKey, time) {
    const key = `${movieId}-${dateKey}-${time}`;
    if (!currentBookingState.occupiedSeats[key]) {
        // Pre-fill randomized occupied seats for visual realism
        const occupied = [];
        for (let i = 0; i < 15; i++) {
            const r = Math.floor(Math.random() * SEATING_ROWS) + 1;
            const c = Math.floor(Math.random() * SEATING_COLS) + 1;
            occupied.push(`${r}-${c}`);
        }
        currentBookingState.occupiedSeats[key] = occupied;
    }
    
    const occupied = currentBookingState.occupiedSeats[key];
    
    // Find a free seat in rows A-F, cols 1-10
    let attempts = 0;
    while (attempts < 100) {
        const r = Math.floor(Math.random() * SEATING_ROWS) + 1;
        const c = Math.floor(Math.random() * SEATING_COLS) + 1;
        const seatKey = `${r}-${c}`;
        if (!occupied.includes(seatKey)) {
            return { row: r, col: c };
        }
        attempts++;
    }
    
    return { row: 3, col: 5 }; // Fallback
}

// 5. Booking Modal Seating System
let modalOverlay;

function initBookingModal() {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = 'bookingModal';
    modalOverlay.innerHTML = `
        <div class="modal-card">
            <div class="modal-header">
                <h3>Бронирование билетов</h3>
                <button class="modal-close-btn">&times;</button>
            </div>
            <div class="modal-body"></div>
        </div>
    `;
    
    document.body.appendChild(modalOverlay);
    
    const closeBtn = modalOverlay.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', closeBookingModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeBookingModal();
    });
}

function openBookingModal(movieId, title, time, tabDate, format, price) {
    currentBookingState = {
        movieId: movieId,
        movieTitle: title,
        time: time,
        date: tabDate === "today" ? "Сегодня" : "Завтра",
        format: format,
        pricePerSeat: price,
        selectedSeats: []
    };
    
    const dateStr = tabDate === "today" ? "сегодня" : "завтра";
    modalOverlay.querySelector('h3').textContent = `${title} (${format}) — ${dateStr}, в ${time}`;
    
    const key = `${movieId}-${tabDate}-${time}`;
    if (!currentBookingState.occupiedSeats) {
        currentBookingState.occupiedSeats = {};
    }
    if (!currentBookingState.occupiedSeats[key]) {
        // Pre-fill randomized occupied seats for visual realism
        const occupied = [];
        for (let i = 0; i < 15; i++) {
            const r = Math.floor(Math.random() * SEATING_ROWS) + 1;
            const c = Math.floor(Math.random() * SEATING_COLS) + 1;
            occupied.push(`${r}-${c}`);
        }
        currentBookingState.occupiedSeats[key] = occupied;
    }
    
    renderSeatingChart(key);
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function renderSeatingChart(occupiedKey) {
    const modalBody = modalOverlay.querySelector('.modal-body');
    const occupied = currentBookingState.occupiedSeats[occupiedKey] || [];
    
    let seatRowsHtml = '';
    const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    for (let r = 1; r <= SEATING_ROWS; r++) {
        const isVip = VIP_ROWS.includes(r);
        const rowLabel = rowLabels[r - 1];
        
        let seatsHtml = '';
        for (let c = 1; c <= SEATING_COLS; c++) {
            const seatKey = `${r}-${c}`;
            const isOccupied = occupied.includes(seatKey);
            const classes = ['seat'];
            if (isOccupied) classes.push('occupied');
            if (isVip) classes.push('vip');
            
            seatsHtml += `<div class="${classes.join(' ')}" data-row="${r}" data-col="${c}" title="Ряд ${rowLabel}, Место ${c} ${isVip ? '(VIP +150₽)' : ''}"></div>`;
        }
        
        seatRowsHtml += `
            <div class="seat-row">
                <div class="seat-row-label">${rowLabel}</div>
                ${seatsHtml}
                <div class="seat-row-label">${rowLabel}</div>
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <div class="seating-screen-container">
            <div class="seating-screen"></div>
            <div class="seating-screen-label">ЭКРАН</div>
        </div>
        
        <div class="seats-grid">
            ${seatRowsHtml}
        </div>
        
        <div class="seating-legend">
            <div class="legend-item"><div class="seat"></div> Свободно</div>
            <div class="legend-item"><div class="seat vip"></div> VIP (+150₽)</div>
            <div class="legend-item"><div class="seat occupied"></div> Занято</div>
            <div class="legend-item"><div class="seat selected"></div> Выбрано</div>
        </div>
        
        <div class="seating-summary-card">
            <div class="summary-info">
                <h4>Выбранные места</h4>
                <div class="selected-seats-list">—</div>
            </div>
            <div class="summary-price">
                <h4>Сумма сеанса</h4>
                <span class="total-price">0 ₽</span>
            </div>
            <!-- Modified button routing seats to Cart -->
            <button class="book-ticket-btn" id="addToCartBookingBtn" disabled>Добавить в корзину</button>
        </div>
    `;
    
    const seats = modalBody.querySelectorAll('.seat:not(.occupied)');
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            const row = parseInt(seat.dataset.row);
            const col = parseInt(seat.dataset.col);
            
            const seatIndex = currentBookingState.selectedSeats.findIndex(s => s.row === row && s.col === col);
            if (seatIndex > -1) {
                currentBookingState.selectedSeats.splice(seatIndex, 1);
                seat.classList.remove('selected');
            } else {
                currentBookingState.selectedSeats.push({ row, col });
                seat.classList.add('selected');
            }
            
            updateBookingSummary();
        });
    });
    
    // Bind "Add to Cart" button
    const bookBtn = modalBody.querySelector('#addToCartBookingBtn');
    bookBtn.addEventListener('click', () => {
        checkoutBookingToCart();
    });
}

function updateBookingSummary() {
    const modalBody = modalOverlay.querySelector('.modal-body');
    const selected = currentBookingState.selectedSeats;
    
    const seatListEl = modalBody.querySelector('.selected-seats-list');
    const priceEl = modalBody.querySelector('.total-price');
    const bookBtn = modalBody.querySelector('#addToCartBookingBtn');
    
    if (selected.length === 0) {
        seatListEl.textContent = '—';
        priceEl.textContent = '0 ₽';
        bookBtn.disabled = true;
        return;
    }
    
    const rowLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
    const seatNames = selected.map(s => `Ряд ${rowLabels[s.row - 1]}, Место ${s.col}`);
    seatListEl.textContent = seatNames.join('; ');
    
    let totalPrice = 0;
    selected.forEach(s => {
        const isVip = VIP_ROWS.includes(s.row);
        totalPrice += currentBookingState.pricePerSeat + (isVip ? 150 : 0);
    });
    
    priceEl.textContent = `${totalPrice} ₽`;
    bookBtn.disabled = false;
}

// Routes selected seats directly into the global unified Cart and opens sidebar
function checkoutBookingToCart() {
    const selected = currentBookingState.selectedSeats;
    
    selected.forEach(s => {
        window.Cart.addTicket(
            currentBookingState.movieId,
            currentBookingState.movieTitle,
            currentBookingState.time,
            currentBookingState.date,
            currentBookingState.format,
            s.row,
            s.col,
            currentBookingState.pricePerSeat
        );
    });

    // Close seat modal
    closeBookingModal();

    // Slide open unified Cart drawer
    document.getElementById('cartSidebar').classList.add('open');
}
