// --- 1. PERSISTENT LANGUAGE STATE & LOGIC ---
let lang = localStorage.getItem('siteLang') || 'zh';

const sectorData = {
    "manufacturing": {
        "en": {
            "title": "Industrial Excellence: Forge Your Future in East Africa",
            "body": `
                <h4>The Continental Gateway</h4>
                <p>Tanzania is no longer just a market; it is the <strong>manufacturing engine</strong> of the continent. By establishing your production base here, you aren't just selling to 65 million Tanzanians—you are gaining duty-free access to <strong>300 million consumers</strong> across the EAC and SADC regions.</p>
                
                <h4>Why Leading Firms are Moving to Tanzania:</h4>
                <ul>
                    <li><strong>Unrivaled Policy Support:</strong> The 'Made in Tanzania' initiative provides a 10-year corporate tax holiday and 0% import duty on all essential machinery.</li>
                    <li><strong>The China-Tanzania Corridor:</strong> Capitalize on the 98% zero-tariff treatment for Tanzanian exports entering the Chinese market.</li>
                    <li><strong>Operational Stability:</strong> Access to a young, trainable workforce and a surge in industrial energy capacity via the Nyerere Hydropower project.</li>
                </ul>

                <div class="popup-gallery">
                    <div class="gallery-item"><img src="images/manufacturing1.jpeg" alt="Industrial Hub"></div>
                    <div class="gallery-item"><img src="images/manufacturing2.jpeg" alt="Agriculture"></div>
                </div>
                <p><em>中坦达资 handles every permit, from TIC certification to industrial land titles, ensuring your factory is operational in record time.</em></p>
            `
        },
        "zh": {
            "title": "工业卓越：在东非打造您的未来",
            "body": `
                <h4>大陆门户</h4>
                <p>坦桑尼亚不仅是一个市场，它是整个非洲大陆的<strong>工业引擎</strong>。在这里建立生产基地，您不仅是面向6500万坦桑尼亚人销售，更是获得了进入拥有<strong>3亿消费者</strong>的东非和南共体市场的免税通行证。</p>
                
                <h4>领军企业入驻坦桑尼亚的核心原因：</h4>
                <ul>
                    <li><strong>无与伦比的政策支持：</strong> “坦桑尼亚制造”倡议提供长达10年的企业所得税免征期，且所有关键机械进口免关税。</li>
                    <li><strong>中坦贸易走廊：</strong> 充分利用坦桑尼亚出口中国产品98%零关税的特殊政策。</li>
                    <li><strong>运营稳定性：</strong> 拥有年轻、可塑性强的劳动力，以及尼雷尔水电站带来的充足工业电力保障。</li>
                </ul>
                <div class="popup-gallery">
                    <div class="gallery-item"><img src="images/manufacturing1.jpeg" alt="工业园区"></div>
                    <div class="gallery-item"><img src="images/manufacturing2.jpeg" alt="农业"></div>
                </div>
                <p><em>中坦达资处理从TIC认证到工业用地所有权的每一个许可，确保您的工厂以创纪录的速度投入运营。</em></p>
            `
        }
    },
    "mining": {
        "en": {
            "title": "Mining & Resources: Wealth Beneath the Surface",
            "body": `
                <p>Tanzania is the 4th largest gold producer in Africa and holds world-class reserves of critical minerals essential for the global energy transition.</p>
                
                <h4>Strategic Opportunities</h4>
                <ul>
                    <li><strong>Critical Minerals:</strong> Massive undeveloped reserves of Graphite, Lithium, and Rare Earth Elements (REE).</li>
                    <li><strong>Precious Metals & Stones:</strong> Home to the world's only supply of Tanzanite, along with significant Gold and Diamond deposits.</li>
                    <li><strong>Value Addition:</strong> The government is offering major incentives for local mineral processing and smelting facilities.</li>
                </ul>

                <div class="popup-gallery">
                    <div class="gallery-item"><img src="images/mining1.jpeg" alt="Mineral Processing Industry"></div>
                    <div class="gallery-item"><img src="images/mining2.jpeg" alt="Mineral Sample"></div>
                </div><br><br>

                <h4>How We Secure Your Investment</h4>
                <p>Navigating the Mining Act and local content regulations requires expert guidance. We facilitate your <strong>Prospecting Licenses (PL)</strong>, <strong>Mining Licenses (ML)</strong>, and ensure your operations align with the latest Tanzanian tax and royalty frameworks.</p>
            `
        },
        "zh": {
            "title": "矿业与资源：地表之下的财富",
            "body": `
                <p>坦桑尼亚是非洲第四大黄金生产国，并拥有对全球能源转型至关重要的世界级关键矿产储备。</p>
                
                <h4>战略机遇</h4>
                <ul>
                    <li><strong>关键矿产：</strong> 拥有大量未开发的石墨、锂和稀土元素 (REE) 储量。</li>
                    <li><strong>贵金属与宝石：</strong> 全球唯一的坦桑石产地，同时拥有显著的黄金和钻石矿藏。</li>
                    <li><strong>增值加工：</strong> 政府正为设立当地矿产加工和冶炼设施提供重大优惠政策。</li>
                </ul>

                <div class="popup-gallery">
                    <div class="gallery-item"><img src="images/mining1.jpeg" alt="矿产加工产业"></div>
                    <div class="gallery-item"><img src="images/mining2.jpeg" alt="矿样"></div>
                </div><br><br>
                
                <h4>我们如何保障您的投资</h4>
                <p>遵循《矿业法》和本地化法规需要专家指导。我们协助您办理<strong>勘探许可证 (PL)</strong>、<strong>采矿许可证 (ML)</strong>，并确保您的运营符合坦桑尼亚最新的税务和特许权使用费框架。</p>
            `
        }
    },
    "infrastructure": {
        "en": {
            "title": "Infrastructure: Engineering the Future of African Logistics",
            "body": `
                <h4>THE GREAT TRANSFORMATION</h4>
                <p>Tanzania is currently the site of the most ambitious infrastructure projects in East Africa. With over <strong>$15 Billion</strong> in active projects, we are building the gateway for the next century of African trade.</p>
                <br>
                <br>
                <h4>HIGH-VALUE SECTORS FOR ENTRY:</h4>
                <ul>
                    <li><strong>Transport & Logistics:</strong> The $10B Standard Gauge Railway (SGR) and Dar es Salaam Port expansion are creating massive opportunities for specialized engineering firms.</li>
                    <li><strong>Urban & Commercial Development:</strong> Unprecedented demand for Grade-A office spaces, industrial parks, and luxury hospitality in the diplomatic hub of Dar es Salaam.</li>
                    <li><strong>Energy & Utilities:</strong> Participate in the national grid expansion, including the massive Nyerere Hydropower project and renewable energy transitions.</li>
                </ul>

                <div class="popup-gallery">
                    <div class="gallery-item"><img src="images/infrastructure1.jpeg" alt="SGR"></div>
                    <div class="gallery-item"><img src="images/infrastructure2.jpeg" alt="Port of Dar es Salaam"></div>
                </div>
                <p><em>中坦达资 provides the local legal framework, Joint Venture (JV) structures, and government liaison services required to win and execute major tenders.</em></p>
            `
        },
        "zh": {
            "title": "基础设施：打造非洲物流的未来",
            "body": `
                <h4>伟大的变革</h4>
                <p>坦桑尼亚目前是东非最宏伟的基础设施项目所在地。拥有超过<strong>150亿美元</strong>的在建项目，我们正在打造下一个世纪非洲贸易的门户。</p>
                
                <h4>高价值准入领域：</h4>
                <ul>
                    <li><strong>交通与物流：</strong> 100亿美元的标准轨铁路 (SGR) 和达累斯萨拉姆港扩建工程，为专业工程公司创造了海量机遇。</li>
                    <li><strong>城市与商业开发：</strong> 达累斯萨拉姆作为外交和商业中心，对甲级写字楼、工业园区和高端酒店的需求达到了前所未有的高度。</li>
                    <li><strong>能源与公用事业：</strong> 参与国家电网扩展计划，包括宏伟的尼雷尔水电站项目及可再生能源转型。</li>
                </ul>
                <div class="popup-gallery">
                    <div class="gallery-item"><img src="images/infrastructure1.jpeg" alt="SGR"></div>
                    <div class="gallery-item"><img src="images/infrastructure2.jpeg" alt="Port of Dar es Salaam"></div>
                </div>
                <p><em>中坦达资提供赢得和执行重大招标所需的本地法律框架、合资企业 (JV) 结构和政府联络服务。</em></p>
            `
        }
    }
};

function applyLanguage() {
    localStorage.setItem('siteLang', lang);
    if (lang === 'zh') {
        document.body.classList.add('zh');
    } else {
        document.body.classList.remove('zh');
    }

    document.querySelectorAll("[data-en]").forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    document.querySelectorAll("[placeholder]").forEach(el => {
        if (el.hasAttribute(`data-${lang}-placeholder`)) {
            el.setAttribute('placeholder', el.getAttribute(`data-${lang}-placeholder`));
        }
    });

    const btn = document.getElementById("langToggle");
    const btnMob = document.getElementById("langToggleMobile");
    if (btn) btn.textContent = (lang === "en" ? "中文" : "EN");
    if (btnMob) btnMob.textContent = (lang === "en" ? "中文" : "EN");
}

const setupLangToggles = () => {
    const toggles = ["langToggle", "langToggleMobile"];
    toggles.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.onclick = () => {
                lang = (lang === "en" ? "zh" : "en");
                applyLanguage();
            };
        }
    });
};

const setupAccordions = () => {
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
};

const setupScrollReveal = () => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

function openPopup() { document.getElementById("popup").style.display = "block"; }
function closePopup() { document.getElementById("popup").style.display = "none"; }
function openTerms() { document.getElementById("termsPopup").style.display = "block"; }
function closeTerms() { document.getElementById("termsPopup").style.display = "none"; }
function openPrivacy() { document.getElementById("privacyPopup").style.display = "block"; }
function closePrivacy() { document.getElementById("privacyPopup").style.display = "none"; }
function openMenu() { document.getElementById("mobileMenu").style.display = "flex"; }
function closeMenu() { document.getElementById("mobileMenu").style.display = "none"; }

const startHeroSlideshow = () => {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
};

const setupSectorPopups = () => {
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.onclick = () => {
            const id = btn.getAttribute('data-id');
            const data = sectorData[id][lang];
            
            // Fixed: Use innerHTML to allow the formatting to show
            document.getElementById('popupTitle').innerHTML = data.title;
            document.getElementById('popupBody').innerHTML = data.body;
            document.getElementById('sectorPopup').style.display = 'block';
            document.body.classList.add('modal-open');
        };
    });
};

function closeSectorPopup() {
    document.getElementById('sectorPopup').style.display = 'none';
    document.body.classList.remove('modal-open');
}

window.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
    setupLangToggles();
    setupAccordions();
    setupScrollReveal();
    startHeroSlideshow();
    setupSectorPopups();

    if (document.getElementById("hamburger")) {
        document.getElementById("hamburger").onclick = openMenu;
    }

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

    let testimonials = document.querySelectorAll(".testimonial");
    if (testimonials.length > 0) {
        let i = 0;
        setInterval(() => {
            testimonials.forEach(el => el.classList.remove("active"));
            testimonials[i].classList.add("active");
            i = (i + 1) % testimonials.length;
        }, 4000);
    }
});