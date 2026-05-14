// --- 1. تفعيل الـ Sticky Navbar ---
window.addEventListener("scroll", function(){
    let navbar = document.querySelector(".navbar");
    if(navbar) {
        navbar.classList.toggle("sticky", window.scrollY > 50);
    }
});

// --- 2. عداد الزيارات (LocalStorage) ---
let visits = localStorage.getItem('visit_count') || 0;
visits++;
localStorage.setItem('visit_count', visits);

const welcomeBar = document.querySelector('.welcome-back-bar p');
if (welcomeBar) {
    welcomeBar.innerHTML = `<i class="fas fa-gamepad"></i> Welcome back! You have visited ${visits} times.`;
}

// --- 3. فتح وغلق نافذة الـ Login (Modal) ---
const loginModal = document.getElementById('loginModal');
const openLogin = document.querySelector('.sign-in');
const closeLogin = document.getElementById('closeBtn');

if (openLogin && loginModal) {
    openLogin.onclick = (e) => {
        e.preventDefault();
        loginModal.style.display = 'flex';
    }
}
if (closeLogin && loginModal) {
    closeLogin.onclick = () => {
        loginModal.style.display = 'none';
    }
}

// --- 4. تشغيل المنيو للموبايل (Hamburger Menu) ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.onclick = () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    };
}



// --- 6. تشغيل البحث ---
const searchBtn = document.getElementById('searchBtn');
const gameInput = document.getElementById('gameInput');

if (searchBtn && gameInput) {
    searchBtn.onclick = () => {
        let searchValue = gameInput.value;
        if (searchValue.trim() !== "") {
            alert("Searching for: " + searchValue);
        } else {
            alert("Please enter a game name first!");
        }
    };

    gameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });
}

