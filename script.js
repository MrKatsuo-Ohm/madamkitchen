document.addEventListener('DOMContentLoaded', function() {
    
    // กำหนดข้อมูลการแปล (Translation Data)
    const translations = {
        'en': {
            'slogan_line1': 'Authentic Thai Flavors,',
            'slogan_line2': 'Just Like Mom\'s Cooking',
            'nav_menu': 'Menu',
            'nav_about': 'About',
            'nav_contact': 'Contact',
            'cta_order': 'ORDER ONLINE',
            'cta_menu': 'VIEW MENU',
            'menu_title': 'Our Popular A La Carte Dishes',
            'menu_subtitle': 'A quick look at our signature dishes.',
            'dish1_name': 'Pad Krapao',
            'dish1_desc': 'Spicy stir-fried with holy basil.',
            'dish2_name': 'Tom Yum Goong',
            'dish2_desc': 'Famous spicy and sour prawn soup.',
            'dish3_name': 'Green Curry',
            'dish3_desc': 'Sweet and spicy curry with coconut milk.',
            'order_now': 'Order Now'
        },
        'th': {
            'slogan_line1': 'รสชาติไทยแท้',
            'slogan_line2': 'เหมือนคุณแม่ทำให้ทาน',
            'nav_menu': 'เมนู',
            'nav_about': 'เกี่ยวกับเรา',
            'nav_contact': 'ติดต่อ',
            'cta_order': 'สั่งอาหารออนไลน์',
            'cta_menu': 'ดูเมนู',
            'menu_title': 'เมนูตามสั่งยอดนิยม',
            'menu_subtitle': 'ภาพรวมเมนูที่เราภูมิใจนำเสนอ',
            'dish1_name': 'ผัดกะเพรา',
            'dish1_desc': 'ผัดเผ็ดกับใบกะเพรา',
            'dish2_name': 'ต้มยำกุ้ง',
            'dish2_desc': 'ซุปกุ้งรสเผ็ดเปรี้ยว',
            'dish3_name': 'แกงเขียวหวาน',
            'dish3_desc': 'แกงรสหวานเผ็ดกับกะทิ',
            'order_now': 'สั่งเลย'
        }
    };

    const elementsToTranslate = document.querySelectorAll('[data-i18n-key]');
    const langButtons = document.querySelectorAll('.lang-btn');

    // ฟังก์ชันหลักสำหรับเปลี่ยนภาษา
    function setLanguage(lang) {
        // 1. แปลเนื้อหาตาม data-i18n-key
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // 2. จัดการสถานะปุ่ม (Active/Inactive)
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Event Listeners สำหรับการกดปุ่มเปลี่ยนภาษา
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // กำหนดค่าเริ่มต้นเมื่อโหลดหน้าเว็บ (เป็นภาษาไทย)
    setLanguage('th'); 
});
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================================
    // 1. โค้ดส่วน translations (ตรวจสอบให้แน่ใจว่าไม่มีการสะกดผิด)
    // ===================================================
    const translations = {
        // ... (ข้อมูลการแปลทั้งหมดของคุณ - ต้องถูกต้อง) ...
        'en': {
            'slogan_line1': 'Authentic Thai Flavors,',
            'slogan_line2': 'Just Like Mom\'s Cooking',
            // ... (กุญแจอื่นๆ) ...
        },
        'th': {
            'slogan_line1': 'รสชาติไทยแท้',
            'slogan_line2': 'เหมือนคุณแม่ทำให้ทาน',
            // ... (กุญแจอื่นๆ) ...
        }
    };
    
    const elementsToTranslate = document.querySelectorAll('[data-i18n-key]');
    const langButtons = document.querySelectorAll('.lang-btn');

    // ฟังก์ชันหลักสำหรับเปลี่ยนภาษา
    function setLanguage(lang) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        // จัดการสถานะปุ่ม
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Event Listeners สำหรับการกดปุ่มเปลี่ยนภาษา
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // *** เรียกใช้ฟังก์ชันทันทีเมื่อ DOM โหลดเสร็จ เพื่อแสดงผลภาษาเริ่มต้น ***
    setLanguage('th'); 


    // ===================================================
    // 2. โค้ดลูกเล่น Fade-In on Scroll (Intersection Observer)
    // ===================================================
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ถ้าองค์ประกอบอยู่ในจอ ให้เปลี่ยนคลาสเพื่อเริ่ม Animation
                entry.target.classList.remove('hidden-on-scroll');
                entry.target.classList.add('visible-on-scroll');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // *** ตรวจสอบให้แน่ใจว่า selector นี้ครอบคลุมทุกองค์ประกอบที่คุณต้องการทำให้เกิด Animation ***
    const sectionsToAnimate = document.querySelectorAll('.menu-section h2, .menu-section p, .menu-item');
    
    // เพิ่มคลาสเริ่มต้นให้กับองค์ประกอบ
    sectionsToAnimate.forEach(element => {
        // *** เพิ่มคลาส hidden-on-scroll ให้กับทุกองค์ประกอบที่ต้องการซ่อนก่อน ***
        element.classList.add('hidden-on-scroll');
        // เริ่มติดตาม
        observer.observe(element);
    });
});
// translations dictionary: เพิ่มข้อความสำหรับหน้า 'เกี่ยวกับเรา' เข้าไปในส่วนนี้
const translations = {
    // ------------------------------------
    // NAVIGATION LINKS (ใช้ร่วมกันทุกหน้า)
    // ------------------------------------
    nav_menu: {
        en: "Menu ",
        th: "เมนู" // ในทางปฏิบัติ, อาจเป็น "Menu" ใน EN และ "เมนู" ใน TH
    },
    nav_about: {
        en: "About",
        th: "เกี่ยวกับเรา"
    },
    nav_contact: {
        en: "Contact",
        th: "ติดต่อ"
    },

    // ------------------------------------
    // INDEX.HTML (เพิ่มแค่ตัวอย่าง)
    // ------------------------------------
    slogan_line1: {
        en: "Authentic Thai Flavors.",
        th: "รสชาติไทยแท้ดั้งเดิม"
    },
    slogan_line2: {
        en: "Prepared with passion and tradition.",
        th: "ปรุงด้วยความหลงใหลและวิถีแห่งประเพณี"
    },
    cta_order: {
        en: "ORDER ONLINE",
        th: "สั่งอาหารออนไลน์"
    },
    cta_menu: {
        en: "VIEW MENU",
        th: "ดูเมนู"
    },
    menu_title: {
        en: "Our Popular A La Carte Dishes",
        th: "เมนูตามสั่งยอดนิยม"
    },
    menu_subtitle: {
        en: "A quick look at our signature dishes.",
        th: "ภาพรวมเมนูที่เราภูมิใจนำเสนอ"
    },
    
    // ------------------------------------
    // ABOUT.HTML (เพิ่มใหม่)
    // ------------------------------------
    about_team_heading: {
        en: "Meet Our Chefs & Team ",
        th: "พบกับเชฟและทีมงานของเรา "
    },
    team_name_madam: {
        en: "Madam ",
        th: "คุณนาย "
    },
    team_name_sombat:{
        en: "Chef Sombat",
        th: "เชฟสมบัติ"
    },
    team_name_lek:{
        en:"Khun Lek",
        th: "คุณเล็ก"
    },
    about_hero_title: {
        en: "Our Story",
        th: "เรื่องราวของเรา"
    },
    about_hero_subtitle: {
        en: "A taste of tradition, served with passion.",
        th: "รสชาติแห่งประเพณี เสิร์ฟด้วยความหลงใหล"
    },
    about_story_heading: {
        en: "From Thailand to Your Table",
        th: "จากไทยสู่โต๊ะอาหารของคุณ"
    },
    about_story_paragraph1: {
        en: "Madam's Kitchen was founded in 2025 with a simple mission: to bring the authentic, vibrant flavors of Thai home cooking to the world. Our recipes have been passed down through generations, ensuring every dish carries the warmth and tradition of Thailand. We use only the freshest local ingredients and traditional techniques to create a truly unforgettable culinary experience.",
        th: "ครัวคุณนายก่อตั้งขึ้นในปี 2568 ด้วยภารกิจง่ายๆ คือการนำรสชาติอาหารไทยต้นตำรับที่มีชีวิตชีวามาสู่ทั่วโลก สูตรอาหารของเราสืบทอดกันมาหลายชั่วอายุคน ทำให้มั่นใจได้ว่าทุกจานจะเต็มไปด้วยความอบอุ่นและประเพณีของประเทศไทย เราใช้เฉพาะวัตถุดิบในท้องถิ่นที่สดใหม่ที่สุดและเทคนิคแบบดั้งเดิมเพื่อสร้างสรรค์ประสบการณ์การทำอาหารที่น่าจดจำอย่างแท้จริง"
    },
    about_story_paragraph2: {
        en: "Our namesake, the 'Madam,' is the heart and soul of our kitchen. Her dedication to culinary perfection and her passion for sharing Thai culture through food inspire our entire team. Come and taste the difference tradition makes!",
        th: " 'คุณนาย' ผู้เป็นชื่อร้านของเรา คือหัวใจและจิตวิญญาณของห้องครัวของเรา ความทุ่มเทของเธอในความเป็นเลิศด้านอาหารและความหลงใหลในการแบ่งปันวัฒนธรรมไทยผ่านอาหารเป็นแรงบันดาลใจให้กับทีมงานทั้งหมดของเรา มาลิ้มลองความแตกต่างที่เกิดจากประเพณีกัน!"
    },
    about_image_caption: {
        en: "The founder, preparing a signature dish.",
        th: "ผู้ก่อตั้ง กำลังเตรียมอาหารจานเด่น"
    },
    about_values_heading: {
        en: "Our Core Values",
        th: "ค่านิยมหลักของเรา"
    },
    
    value_authenticity: {
        en: "Authenticity: Using time-honored recipes and traditional ingredients.",
        th: "ความเป็นต้นตำรับ: ใช้สูตรอาหารที่สืบทอดมานานและวัตถุดิบแบบดั้งเดิม"
    },
    value_freshness: {
        en: "Freshness: Sourcing the best local produce daily.",
        th: "ความสดใหม่: จัดหาผลผลิตในท้องถิ่นที่ดีที่สุดทุกวัน"
    },
    value_passion: {
        en: "Passion: Cooking with heart and sharing the joy of Thai food.",
        th: "ความหลงใหล: ทำอาหารด้วยใจและแบ่งปันความสุขของอาหารไทย"
    }
    
    // หมายเหตุ: ใน HTML หน้า about มีการแยก TH/EN ในแท็ก strong 
    // ถ้าไม่ต้องการซ้ำซ้อนให้เปลี่ยน value_X เป็น: en: "Authenticity", th: "ความเป็นต้นตำรับ" และนำข้อความมาใส่ใน HTML แทน
};

// ------------------------------------
// CORE LANGUAGE SWITCHER LOGIC
// ------------------------------------

/**
 * ฟังก์ชันหลักในการเปลี่ยนภาษาของทุกองค์ประกอบที่มี attribute data-i18n-key
 * @param {string} lang - 'th' หรือ 'en'
 */
const setLanguage = (lang) => {
    // 1. เปลี่ยนภาษาสำหรับองค์ประกอบที่มี data-i18n-key
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });

    // 2. จัดการสถานะปุ่ม (Active Class)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // 3. บันทึกภาษาที่เลือกไว้ใน Local Storage
    localStorage.setItem('selectedLang', lang);

    // 4. ตั้งค่า HTML lang attribute
    document.documentElement.lang = lang;
};

// ------------------------------------
// EVENT LISTENERS AND INITIAL LOAD
// ------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // 1. อ่านภาษาที่บันทึกไว้ หรือใช้ค่าเริ่มต้นเป็นภาษาไทย ('th')
    const savedLang = localStorage.getItem('selectedLang') || 'th';
    setLanguage(savedLang);

    // 2. ตั้งค่า Event Listeners สำหรับปุ่มเปลี่ยนภาษา
    document.getElementById('lang-th').addEventListener('click', () => setLanguage('th'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
});

// หมายเหตุ: โค้ดนี้สมมติว่าคุณได้รวมทุกคำแปล (index และ about) เข้าไปใน object 'translations' ข้างต้นแล้ว
// ในไฟล์ script.js, เพิ่มส่วนนี้เข้าไปใน object translations
// ...

    // ------------------------------------
    // ABOUT.HTML (Team Section - เพิ่มใหม่)
    // ------------------------------------
    