// --- 1. PERSISTENT LANGUAGE STATE & LOGIC ---
let lang = localStorage.getItem('siteLang') || 'zh';

function applyLanguage() {
  localStorage.setItem('siteLang', lang);

  // A. Class-based toggle (For the new Tanzania page CSS)
  if (lang === 'zh') {
    document.body.classList.add('zh');
  } else {
    document.body.classList.remove('zh');
  }

  // B. Data-attribute toggle (For your other pages)
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // C. Placeholder updates
  document.querySelectorAll("[placeholder]").forEach(el => {
    if(el.hasAttribute(`data-${lang}-placeholder`)) {
        el.setAttribute('placeholder', el.getAttribute(`data-${lang}-placeholder`));
    }
  });

  // D. Update Button Labels
  const btn = document.getElementById("langToggle");
  const btnMob = document.getElementById("langToggleMobile");
  if(btn) btn.textContent = (lang === "en" ? "中文" : "EN");
  if(btnMob) btnMob.textContent = (lang === "en" ? "中文" : "EN");
}

// Language Toggle Listeners
const setupLangToggles = () => {
    const toggles = ["langToggle", "langToggleMobile"];
    toggles.forEach(id => {
        const el = document.getElementById(id);
        if(el) {
            el.onclick = () => {
                lang = (lang === "en" ? "zh" : "en");
                applyLanguage();
            };
        }
    });
};

// --- 2. NEW: ACCORDION LOGIC (For Tanzania Policies) ---
const setupAccordions = () => {
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.addEventListener('click', () => {
            // Optional: Close other items when one opens
            // document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            item.classList.toggle('active');
        });
    });
};

// --- 3. NEW: SCROLL REVEAL ANIMATION (For All Pages) ---
const setupScrollReveal = () => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Matches your CSS .visible
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// --- 4. EXISTING FUNCTIONS (Popups & Menus) ---
function openPopup() { document.getElementById("popup").style.display = "block"; }
function closePopup() { document.getElementById("popup").style.display = "none"; }
function openTerms() { document.getElementById("termsPopup").style.display = "block"; }
function closeTerms() { document.getElementById("termsPopup").style.display = "none"; }
function openPrivacy() { document.getElementById("privacyPopup").style.display = "block"; }
function closePrivacy() { document.getElementById("privacyPopup").style.display = "none"; }
function openMenu() { document.getElementById("mobileMenu").style.display = "flex"; }
function closeMenu() { document.getElementById("mobileMenu").style.display = "none"; }

// --- 5. INITIALIZATION ON LOAD ---
window.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
    setupLangToggles();
    setupAccordions();   // Initialize new Accordions
    setupScrollReveal(); // Initialize new Animations

    // Hamburger Menu
    if(document.getElementById("hamburger")) {
        document.getElementById("hamburger").onclick = openMenu;
    }

    // Animated Counters
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        let update = () => {
            let target = +counter.getAttribute("data-target");
            let count = +counter.innerText;
            let speed = target / 50;
            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(update, 30);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });

    // Testimonial Rotation
    let testimonials = document.querySelectorAll(".testimonial");
    if(testimonials.length > 0) {
        let i = 0;
        setInterval(() => {
            testimonials.forEach(el => el.classList.remove("active"));
            testimonials[i].classList.add("active");
            i = (i + 1) % testimonials.length;
        }, 4000);
    }

    // Slider Logic
    let slides = document.querySelectorAll(".slide");
    if(slides.length > 0) {
        let index = 0;
        setInterval(() => {
            slides.forEach(s => s.classList.remove("active"));
            slides[index].classList.add("active");
            index = (index + 1) % slides.length;
        }, 2500);
    }

    // Services Page Navigation
    const pageInner = document.querySelector(".page-inner");
    const sectionButtons = document.querySelectorAll(".page-screen");
    const scrollUp = document.getElementById("scrollUp");
    const scrollDown = document.getElementById("scrollDown");
    if (pageInner && scrollUp && scrollDown && sectionButtons.length > 0) {
        let currentSection = 0;
        const updateSections = () => {
            pageInner.style.transform = `translateY(-${currentSection * 100}vh)`;
            scrollUp.disabled = currentSection === 0;
            scrollDown.disabled = currentSection === sectionButtons.length - 1;
        };
        scrollUp.addEventListener("click", () => { if (currentSection > 0) { currentSection--; updateSections(); }});
        scrollDown.addEventListener("click", () => { if (currentSection < sectionButtons.length - 1) { currentSection++; updateSections(); }});
        updateSections();
    }
});