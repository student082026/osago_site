// js/app.js

// ============================================
// 1. ИНИЦИАЛИЗАЦИЯ ДАННЫХ (БОЛЬШОЕ КОЛИЧЕСТВО)
// ============================================
function initData() {
    // --- ПОЛЬЗОВАТЕЛИ (200+ человек) ---
    if (!localStorage.getItem('users') || JSON.parse(localStorage.getItem('users')).length < 50) {
        let users = [];
        let firstNames = ['Александр', 'Дмитрий', 'Максим', 'Артем', 'Иван', 'Елена', 'Ольга', 'Татьяна', 'Наталья', 'Сергей', 'Андрей', 'Мария', 'Анна', 'Владимир', 'Павел', 'Юлия', 'Екатерина', 'Алексей', 'Виктор', 'Ксения', 'Николай', 'Василий', 'Георгий', 'Михаил', 'Даниил', 'Кристина', 'Вероника', 'Алина', 'Валерия', 'Полина', 'Роман', 'Евгений', 'Станислав', 'Игорь', 'Олег', 'Тимур', 'Руслан', 'Вадим', 'Григорий', 'Леонид', 'Надежда', 'Светлана', 'Людмила', 'Галина', 'Валентина', 'Софья', 'Алиса', 'Маргарита', 'Диана', 'Ева', 'Ярослав', 'Виталий', 'Никита', 'Кирилл', 'Денис', 'Анатолий', 'Валентин', 'Евгения', 'Ирина', 'Лариса', 'Алла', 'Жанна', 'Инна', 'Лидия', 'Майя', 'Нина', 'Оксана', 'Раиса', 'Тамара', 'Эльвира', 'Юрий', 'Федор', 'Эдуард', 'Аркадий', 'Борис', 'Валерий', 'Геннадий', 'Давид', 'Захар', 'Илья', 'Константин', 'Лев', 'Матвей', 'Назар', 'Оскар', 'Платон', 'Роберт', 'Семен', 'Тимофей', 'Ульяна', 'Филипп', 'Харитон', 'Цезарь', 'Чеслав', 'Шамиль', 'Щербань', 'Эмилия', 'Юлиан', 'Ян'];
        let lastNames = ['Иванов', 'Петров', 'Сидоров', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Соколов', 'Михайлов', 'Новиков', 'Федоров', 'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семенов', 'Егоров', 'Павлов', 'Козлов', 'Степанов', 'Николаев', 'Орлов', 'Андреев', 'Макаров', 'Никитин', 'Захаров', 'Соловьев', 'Борисов', 'Тимофеев', 'Кудрявцев', 'Беляев', 'Тарасов', 'Баранов', 'Комаров', 'Воронов', 'Фролов', 'Максимов', 'Крылов', 'Белов', 'Наумов', 'Гаврилов', 'Тихонов', 'Киселев', 'Сорокин', 'Медведев', 'Абрамов', 'Кондратьев', 'Гришин', 'Денисов', 'Афанасьев', 'Мартынов', 'Филиппов', 'Давыдов', 'Чернов', 'Романов', 'Герасимов', 'Богданов', 'Осипов', 'Жуков', 'Титов', 'Львов', 'Соболев', 'Бирюков', 'Шарапов', 'Никонов', 'Щукин', 'Дьячков', 'Одинцов', 'Сазонов', 'Якушев', 'Калашников', 'Мясников', 'Гусев', 'Королев', 'Бочаров', 'Кузьмин', 'Суворов', 'Громов'];
        
        // Админ и модераторы
        users.push({ id: 1, username: 'admin', email: 'admin@osago.ru', password: 'admin123', role: 'admin', created_at: '2024-01-01T10:00:00Z' });
        users.push({ id: 2, username: 'moderator', email: 'moderator@osago.ru', password: 'moder123', role: 'moderator', created_at: '2024-01-05T12:00:00Z' });
        
        // Создаем 250 обычных пользователей
        for (let i = 3; i <= 252; i++) {
            let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            let username = (firstName.toLowerCase() + '_' + lastName.toLowerCase()).substring(0, 20);
            // Добавляем номер если имя повторяется
            if (users.some(u => u.username === username)) {
                username = username + i;
            }
            let email = username + '@' + ['mail.ru', 'yandex.ru', 'gmail.com', 'bk.ru', 'rambler.ru'][Math.floor(Math.random() * 5)];
            let year = 2023 + Math.floor(Math.random() * 2);
            let month = Math.floor(Math.random() * 12) + 1;
            let day = Math.floor(Math.random() * 28) + 1;
            let dateStr = year + '-' + String(month).padStart(2,'0') + '-' + String(day).padStart(2,'0') + 'T' + String(Math.floor(Math.random()*24)).padStart(2,'0') + ':00:00Z';
            
            users.push({ 
                id: i, 
                username: username, 
                email: email, 
                password: 'pass123', 
                role: 'user', 
                created_at: dateStr 
            });
        }
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('nextUserId', 253);
    }
    
    // --- ДОГОВОРЫ (500+ шт.) ---
    if (!localStorage.getItem('contracts') || JSON.parse(localStorage.getItem('contracts')).length < 100) {
        let contracts = [];
        let carBrands = ['Toyota', 'Kia', 'Hyundai', 'Renault', 'Volkswagen', 'BMW', 'Mercedes', 'Audi', 'Lada', 'Ford', 'Nissan', 'Mazda', 'Honda', 'Skoda', 'Mitsubishi', 'Subaru', 'Volvo', 'Lexus', 'Infiniti', 'Chery', 'Geely', 'Haval', 'Chery', 'Great Wall', 'Lifan', 'Citroen', 'Peugeot', 'Opel', 'Suzuki', 'Datsun', 'Mitsubishi', 'Acura', 'Cadillac', 'Jaguar', 'Land Rover', 'Porsche', 'Ferrari', 'Lamborghini'];
        let carModels = ['Camry', 'Rio', 'Solaris', 'Logan', 'Polo', 'X5', 'E-Class', 'A4', 'Vesta', 'Focus', 'Qashqai', 'CX-5', 'Civic', 'Octavia', 'Outlander', 'Forester', 'XC60', 'RX350', 'QX50', 'Tiggo', 'Coolray', 'F7', 'T11', 'Hover', 'Smily', 'C4', '308', 'Astra', 'Swift', 'On-Do', 'Lancer', 'MDX', 'Escalade', 'F-Pace', 'Evoque', 'Cayenne', '488', 'Urus'];
        
        let users = JSON.parse(localStorage.getItem('users'));
        let userIds = users.filter(u => u.role === 'user').map(u => u.id);
        let contractId = 1;
        
        // Создаем 500 договоров
        for (let i = 0; i < 520; i++) {
            let userId = userIds[Math.floor(Math.random() * userIds.length)];
            let user = users.find(u => u.id === userId);
            let brandIdx = Math.floor(Math.random() * carBrands.length);
            let brand = carBrands[brandIdx];
            let model = carModels[brandIdx];
            let carNumber = ['А','В','С','Е','К','М','Н','О','Р','Т','У','Х'][Math.floor(Math.random()*12)] + 
                           String(Math.floor(Math.random()*900)+100) + 
                           ['АВ','ВС','СЕ','КМ','МН','ОР','РТ','ТУ','УХ'][Math.floor(Math.random()*9)] + 
                           String(Math.floor(Math.random()*900)+100);
            
            // Даты: 2023, 2024, 2025
            let year = 2023 + Math.floor(Math.random() * 3);
            let startMonth = Math.floor(Math.random() * 12) + 1;
            let startDay = Math.floor(Math.random() * 28) + 1;
            let startDate = year + '-' + String(startMonth).padStart(2,'0') + '-' + String(startDay).padStart(2,'0');
            
            let endDateObj = new Date(startDate);
            endDateObj.setFullYear(endDateObj.getFullYear() + 1);
            let endDateStr = endDateObj.toISOString().split('T')[0];
            
            let premium = Math.floor(Math.random() * 20000) + 3500;
            
            let statuses = ['active', 'active', 'active', 'active', 'active', 'active', 'expired', 'terminated'];
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            
            if (status === 'expired') {
                startDate = '2023-' + String(Math.floor(Math.random() * 12) + 1).padStart(2,'0') + '-' + String(Math.floor(Math.random() * 28) + 1).padStart(2,'0');
                endDate = '2024-' + String(Math.floor(Math.random() * 5) + 1).padStart(2,'0') + '-' + String(Math.floor(Math.random() * 28) + 1).padStart(2,'0');
            }
            if (status === 'terminated') {
                startDate = '2024-01-' + String(Math.floor(Math.random() * 15) + 1).padStart(2,'0');
                endDate = '2024-02-' + String(Math.floor(Math.random() * 15) + 1).padStart(2,'0');
            }
            
            let createdDate = '202' + (2 + Math.floor(Math.random() * 3)) + '-' + 
                             String(startMonth).padStart(2,'0') + '-' + 
                             String(Math.floor(Math.random() * 28) + 1).padStart(2,'0') + 'T' + 
                             String(Math.floor(Math.random()*24)).padStart(2,'0') + ':00:00Z';
            
            contracts.push({
                id: contractId++,
                contract_number: 'ОСАГО-' + String(contractId).padStart(4,'0') + '-' + (2023 + Math.floor(Math.random() * 3)),
                client_name: user.username,
                client_passport: String(Math.floor(Math.random() * 9000) + 1000) + ' ' + String(Math.floor(Math.random() * 900000) + 100000),
                client_phone: '+7 (9' + String(Math.floor(Math.random() * 90) + 10) + ') ' + 
                              String(Math.floor(Math.random() * 900) + 100) + '-' + 
                              String(Math.floor(Math.random() * 90) + 10) + '-' + 
                              String(Math.floor(Math.random() * 90) + 10),
                car_brand: brand,
                car_model: model,
                car_number: carNumber,
                start_date: startDate,
                end_date: endDateStr,
                insurance_sum: 500000,
                premium: premium,
                status: status,
                created_by: userId,
                created_at: createdDate
            });
        }
        localStorage.setItem('contracts', JSON.stringify(contracts));
        localStorage.setItem('nextContractId', contractId);
    }
    
    // --- СТРАХОВЫЕ СЛУЧАИ (300+ шт.) ---
    if (!localStorage.getItem('insurance_cases') || JSON.parse(localStorage.getItem('insurance_cases')).length < 50) {
        let cases = [];
        let contracts = JSON.parse(localStorage.getItem('contracts'));
        let statuses = ['filed', 'under_review', 'paid', 'paid', 'paid', 'paid', 'paid', 'paid', 'paid', 'rejected', 'rejected'];
        let descriptions = ['ДТП на перекрестке', 'Повреждение при парковке', 'Наезд на яму', 'Столкновение с животным', 'Повреждение лобового стекла', 'Удар сзади', 'Царапина на двери', 'Затопление авто', 'Пожар в автомобиле', 'Угон автомобиля', 'Повреждение градом', 'Падение дерева', 'Наезд на бордюр', 'Повреждение зеркала', 'Разбита фара', 'Повреждение бампера', 'Скол на капоте', 'Разбито боковое стекло', 'Повреждение колеса', 'Залив салона', 'Повреждение подвески', 'Авария на трассе', 'Столкновение с ограждением', 'ДТП с участием двух автомобилей'];
        
        // Берем случайные договоры для страховых случаев (около 40% договоров)
        let shuffled = [...contracts];
        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        let casesCount = Math.min(380, Math.floor(shuffled.length * 0.4));
        let selectedContracts = shuffled.slice(0, casesCount);
        
        for (let i = 0; i < selectedContracts.length; i++) {
            let contract = selectedContracts[i];
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            let damageAmount = Math.floor(Math.random() * 350000) + 3000;
            let paymentAmount = null;
            if (status === 'paid') {
                paymentAmount = Math.floor(damageAmount * (Math.random() * 0.85 + 0.15));
            } else if (status === 'rejected') {
                paymentAmount = 0;
            }
            
            let caseYear = 2023 + Math.floor(Math.random() * 2);
            let caseMonth = Math.floor(Math.random() * 12) + 1;
            let caseDay = Math.floor(Math.random() * 28) + 1;
            let caseDate = caseYear + '-' + String(caseMonth).padStart(2,'0') + '-' + String(caseDay).padStart(2,'0');
            
            cases.push({
                id: i + 1,
                contract_id: contract.id,
                contract_number: contract.contract_number,
                client_name: contract.client_name,
                car_brand: contract.car_brand,
                car_model: contract.car_model,
                car_number: contract.car_number,
                case_date: caseDate,
                place: ['Москва, ул. Тверская', 'Москва, МКАД', 'Санкт-Петербург, Невский пр.', 'Екатеринбург, ул. Ленина', 'Казань, ул. Баумана'][Math.floor(Math.random() * 5)],
                description: descriptions[Math.floor(Math.random() * descriptions.length)],
                damage_amount: damageAmount,
                payment_amount: paymentAmount,
                status: status,
                created_at: caseYear + '-' + String(caseMonth).padStart(2,'0') + '-' + String(caseDay).padStart(2,'0') + 'T' + String(Math.floor(Math.random()*24)).padStart(2,'0') + ':00:00Z'
            });
        }
        localStorage.setItem('insurance_cases', JSON.stringify(cases));
        localStorage.setItem('nextCaseId', cases.length + 1);
    }
    
    // --- ОТЗЫВЫ (300+ шт.) ---
    if (!localStorage.getItem('reviews') || JSON.parse(localStorage.getItem('reviews')).length < 50) {
        let reviews = [];
        let users = JSON.parse(localStorage.getItem('users'));
        let userIds = users.filter(u => u.id !== 1 && u.id !== 2).map(u => u.id);
        let reviewTexts = [
            'Отличный сервис! Всё быстро и понятно.', 
            'Очень доволен работой компании. Рекомендую!', 
            'Хороший сервис, но есть куда расти.', 
            'Лучшая страховая компания!', 
            'Быстрое оформление, приятные цены.', 
            'Отличная поддержка, помогли во всём разобраться.', 
            'Уже не первый раз оформляю здесь полис. Всё супер!', 
            'Профессиональный подход. Спасибо!', 
            'Всё чётко и по делу. 5 звезд!', 
            'Лучший сервис по ОСАГО в России!', 
            'Очень удобный сайт, всё интуитивно понятно.', 
            'Спасибо большое за оперативность!', 
            'Буду рекомендовать друзьям и знакомым.', 
            'Отличная компания, всё на высшем уровне.', 
            'Быстро, качественно, недорого.', 
            'Очень понравилось работать с вами!', 
            'Просто отлично! Всем советую.', 
            'Самый удобный сервис для оформления страховки.', 
            'Ребята - профессионалы своего дела!',
            'Выплатили быстро, без лишних вопросов. Спасибо!',
            'Попал в ДТП, всё оформили дистанционно. Очень удобно!',
            'Страховая компания от Бога. Всё на высоте!',
            'Цены ниже чем у конкурентов, а сервис лучше.',
            'Отличный личный кабинет, всё понятно и прозрачно.',
            'Всегда отвечают на звонки, помогают с любым вопросом.'
        ];
        
        // Создаем отзывы для 80% пользователей
        for (let i = 0; i < Math.floor(userIds.length * 0.8); i++) {
            let userId = userIds[Math.floor(Math.random() * userIds.length)];
            let rand = Math.random();
            let rating;
            if (rand < 0.7) rating = 5;
            else if (rand < 0.85) rating = 4;
            else if (rand < 0.95) rating = 3;
            else rating = 2;
            
            let reviewText = reviewTexts[Math.floor(Math.random() * reviewTexts.length)];
            let year = 2023 + Math.floor(Math.random() * 2);
            let month = Math.floor(Math.random() * 12) + 1;
            let day = Math.floor(Math.random() * 28) + 1;
            
            reviews.push({
                id: i + 1,
                user_id: userId,
                rating: rating,
                comment: reviewText,
                created_at: year + '-' + String(month).padStart(2,'0') + '-' + String(day).padStart(2,'0') + 'T' + String(Math.floor(Math.random()*24)).padStart(2,'0') + ':00:00Z'
            });
        }
        localStorage.setItem('reviews', JSON.stringify(reviews));
        localStorage.setItem('nextReviewId', reviews.length + 1);
    }
    
    console.log('✅ Данные инициализированы:');
    console.log('   - Пользователей:', JSON.parse(localStorage.getItem('users')).length);
    console.log('   - Договоров:', JSON.parse(localStorage.getItem('contracts')).length);
    console.log('   - Страховых случаев:', JSON.parse(localStorage.getItem('insurance_cases')).length);
    console.log('   - Отзывов:', JSON.parse(localStorage.getItem('reviews')).length);
}

// ============================================
// 2. ФУНКЦИИ GET / SET (без изменений)
// ============================================
function getCurrentUser() {
    try { return JSON.parse(localStorage.getItem('currentUser') || 'null'); } 
    catch(e) { return null; }
}
function getUsers() {
    try { return JSON.parse(localStorage.getItem('users') || '[]'); } 
    catch(e) { return []; }
}
function getContracts() {
    try { return JSON.parse(localStorage.getItem('contracts') || '[]'); } 
    catch(e) { return []; }
}
function getCases() {
    try { return JSON.parse(localStorage.getItem('insurance_cases') || '[]'); } 
    catch(e) { return []; }
}
function getReviews() {
    try { return JSON.parse(localStorage.getItem('reviews') || '[]'); } 
    catch(e) { return []; }
}
function getAllContracts() { return getContracts(); }
function getAllCases() { return getCases(); }

function hasRole(role) {
    let user = getCurrentUser();
    if (!user) return false;
    if (role === 'admin') return user.role === 'admin';
    if (role === 'moderator') return user.role === 'admin' || user.role === 'moderator';
    return true;
}

function updateContractStatus(contractId, newStatus) {
    let contracts = getAllContracts();
    let index = contracts.findIndex(c => c.id == contractId);
    if (index !== -1) {
        contracts[index].status = newStatus;
        localStorage.setItem('contracts', JSON.stringify(contracts));
        return true;
    }
    return false;
}
function updateCaseStatus(caseId, newStatus, paymentAmount) {
    let cases = getAllCases();
    let index = cases.findIndex(c => c.id == caseId);
    if (index !== -1) {
        cases[index].status = newStatus;
        if (paymentAmount !== null && paymentAmount !== undefined) cases[index].payment_amount = parseFloat(paymentAmount);
        localStorage.setItem('insurance_cases', JSON.stringify(cases));
        return true;
    }
    return false;
}

// ============================================
// 3. УПРАВЛЕНИЕ МЕНЮ И АВТОРИЗАЦИЕЙ
// ============================================
function checkAuth() {
    let user = getCurrentUser();
    let currentPage = window.location.pathname.split('/').pop();
    let protectedPages = ['dashboard.html', 'profile.html', 'contracts.html', 'add_contract.html', 'cases.html', 'add_case.html', 'reviews.html', 'add_review.html', 'analytics.html'];
    let adminPages = ['admin.html'];
    
    if (protectedPages.includes(currentPage) && !user) {
        window.location.href = 'login.html';
        return false;
    }
    if (adminPages.includes(currentPage) && user && user.role !== 'admin') {
        window.location.href = 'index.html';
        return false;
    }
    if ((currentPage === 'login.html' || currentPage === 'register.html') && user) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

function updateMenu() {
    let user = getCurrentUser();
    
    document.querySelectorAll('.auth-only').forEach(el => {
        el.style.display = user ? (el.tagName === 'LI' ? 'block' : 'inline-block') : 'none';
    });
    document.querySelectorAll('.guest-only').forEach(el => {
        el.style.display = user ? 'none' : (el.tagName === 'LI' ? 'block' : 'inline-block');
    });
    document.querySelectorAll('.admin-only').forEach(el => {
        el.style.display = (user && user.role === 'admin') ? (el.tagName === 'LI' ? 'block' : 'inline-block') : 'none';
    });
    
    let userNameSpan = document.getElementById('userName');
    if (userNameSpan && user) userNameSpan.innerText = user.username;
}

// Глобальный запуск при загрузке любой страницы
document.addEventListener('DOMContentLoaded', function() {
    initData();
    checkAuth();
    updateMenu();
});