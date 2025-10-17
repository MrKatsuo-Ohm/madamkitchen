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