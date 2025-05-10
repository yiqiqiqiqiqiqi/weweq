// Language Data
const languages = {
    zh: {
        hero_title: "永恒交融",
        hero_subtitle: "HAF 将历史、艺术与时尚融为一体，开启一场跨越时空的美学之旅",
        hero_button: "发现 HAF",
        nav_history: "历史",
        nav_art: "艺术",
        nav_fashion: "时尚",
        nav_shop: "商店",
        story_title: "我们的故事",
        story_image_alt: "HAF 故事",
        story_text_1: "HAF 诞生于对美学的热爱。我们相信，历史是根基，艺术是灵魂，时尚是表达。每一件作品、每一场展览、每一款设计，都在诉说跨越千年的故事。",
        story_text_2: "从古老文明的遗迹，到现代画廊的色彩，再到T台上的潮流，HAF 将这些元素交织，创造出独特的生活方式。我们邀请你加入这场旅程，探索属于你的永恒之美。",
        gallery_title: "灵感画廊",
        gallery_subtitle: "捕捉美学瞬间，感受 HAF 的创意脉动",
        gallery_image_1_alt: "灵感 1",
        gallery_image_1_text: "灵感瞬间",
        gallery_image_2_alt: "灵感 2",
        gallery_image_2_text: "创意之光",
        gallery_image_3_alt: "灵感 3",
        gallery_image_3_text: "永恒之美",
        gallery_image_4_alt: "灵感 4",
        gallery_image_4_text: "文化交融",
        gallery_image_5_alt: "灵感 5",
        gallery_image_5_text: "时光流转",
        gallery_image_6_alt: "灵感 6",
        gallery_image_6_text: "设计之魂",
        gallery_image_7_alt: "灵感 7",
        gallery_image_7_text: "未来展望",
        gallery_image_8_alt: "灵感 8",
        gallery_image_8_text: "个性表达",
        gallery_image_9_alt: "灵感 9",
        gallery_image_9_text: "美学碰撞",
        gallery_image_10_alt: "灵感 10",
        gallery_image_10_text: "时代之声",
        gallery_image_11_alt: "灵感 11",
        gallery_image_11_text: "创意新生",
        gallery_image_12_alt: "灵感 12",
        gallery_image_12_text: "永恒传承",
        gallery_image_13_alt: "灵感 13",
        gallery_image_13_text: "灵感新生",
        gallery_image_14_alt: "灵感 14",
        gallery_image_14_text: "美学传承",
        gallery_image_15_alt: "灵感 15",
        gallery_image_15_text: "创意时代",
        gallery_image_16_alt: "灵感 16",
        gallery_image_16_text: "永恒之光",
        inspiration_title: "灵感故事",
        inspiration_subtitle: "从历史到时尚，HAF 的每一刻都在点燃灵感",
        inspiration_image_1_alt: "故事 1",
        inspiration_title_1: "历史的回响",
        inspiration_text_1: "古老文物诉说千年往事，启发我们珍惜每一段传承。",
        inspiration_image_2_alt: "故事 2",
        inspiration_title_2: "艺术的火花",
        inspiration_text_2: "一抹色彩，一笔勾勒，艺术赋予生活无限可能。",
        inspiration_image_3_alt: "故事 3",
        inspiration_title_3: "时尚的脉动",
        inspiration_text_3: "潮流是自信的表达，HAF 让你成为风尚的引领者。",
        testimonials_title: "用户心声",
        testimonials_subtitle: "来自全球的 HAF 爱好者分享他们的体验",
        testimonial_image_1_alt: "用户 1",
        testimonial_text_1: '"HAF 的设计让我感受到历史的深邃与现代的活力，太棒了！"',
        testimonial_name_1: "李明",
        testimonial_image_2_alt: "用户 2",
        testimonial_text_2: '"艺术与时尚的完美结合，HAF 让我重新定义了美学！"',
        testimonial_name_2: "Sarah Tan",
        testimonial_image_3_alt: "用户 3",
        testimonial_text_3: '"每件商品都像一件艺术品，HAF 是我的灵感源泉！"',
        testimonial_name_3: "Ahmad Zulkifli",
        journey_title: "品牌历程",
        journey_subtitle: "HAF 的成长故事，记录美学与创意的每一步",
        journey_image_1_alt: "里程碑 1",
        journey_title_1: "2018 - 诞生",
        journey_text_1: "HAF 成立，致力于融合历史、艺术与时尚。",
        journey_image_2_alt: "里程碑 2",
        journey_title_2: "2020 - 首展",
        journey_text_2: "首次全球展览，展示跨界设计。",
        journey_image_3_alt: "里程碑 3",
        journey_title_3: "2023 - 扩展",
        journey_text_3: "进入亚洲市场，推出新系列。",
        journey_image_4_alt: "里程碑 4",
        journey_title_4: "2025 - 未来",
        journey_text_4: "持续创新，定义美学新篇章。",
        events_title: "活动预告",
        events_subtitle: "加入 HAF 的未来盛会，感受美学的无限可能",
        event_image_1_alt: "活动 1",
        event_title_1: "历史回顾展",
        event_text_1: "探索古代文明与现代设计的对话。",
        event_image_2_alt: "活动 2",
        event_title_2: "艺术工作坊",
        event_text_2: "亲手创作，释放你的艺术潜能。",
        event_image_3_alt: "活动 3",
        event_title_3: "时尚发布会",
        event_text_3: "见证 HAF 2025 新品首发。",
        community_title: "加入我们的社区",
        community_subtitle: "分享你的 HAF 故事，与全球美学爱好者连接",
        community_image_alt: "社区",
        community_button: "分享你的故事",
        themes_title: "探索三大主题",
        themes_subtitle: "历史、艺术、时尚，HAF 为你打开三扇美学之门",
        theme_history_title: "历史",
        theme_history_text: "追溯文明的辉煌，感受时间的深邃与厚重。",
        theme_history_button: "走进历史",
        theme_art_title: "艺术",
        theme_art_text: "沉浸于色彩与创意，探索灵感的无限可能。",
        theme_art_button: "发现艺术",
        theme_fashion_title: "时尚",
        theme_fashion_text: "引领潮流的步伐，展现个性与自信的风格。",
        theme_fashion_button: "追逐时尚",
        cta_title: "开启你的美学之旅",
        cta_subtitle: "探索 HAF 的独家商品，找到属于你的历史、艺术与时尚",
        cta_button: "立即选购",
        footer_copyright: "© 2025 历史、艺术与时尚. 保留所有权利。"
    },
    en: {
        hero_title: "Timeless Fusion",
        hero_subtitle: "HAF weaves history, art, and fashion into a timeless aesthetic journey.",
        hero_button: "Discover HAF",
        nav_history: "History",
        nav_art: "Art",
        nav_fashion: "Fashion",
        nav_shop: "Shop",
        story_title: "Our Story",
        story_image_alt: "HAF Story",
        story_text_1: "HAF was born from a passion for aesthetics. We believe history is the foundation, art is the soul, and fashion is the expression. Every piece, exhibition, and design tells a story spanning millennia.",
        story_text_2: "From ancient relics to modern gallery hues and runway trends, HAF intertwines these elements to create a unique lifestyle. Join us on this journey to explore your timeless beauty.",
        gallery_title: "Inspiration Gallery",
        gallery_subtitle: "Capture aesthetic moments and feel the creative pulse of HAF.",
        gallery_image_1_alt: "Inspiration 1",
        gallery_image_1_text: "Moment of Inspiration",
        gallery_image_2_alt: "Inspiration 2",
        gallery_image_2_text: "Light of Creativity",
        gallery_image_3_alt: "Inspiration 3",
        gallery_image_3_text: "Timeless Beauty",
        gallery_image_4_alt: "Inspiration 4",
        gallery_image_4_text: "Cultural Fusion",
        gallery_image_5_alt: "Inspiration 5",
        gallery_image_5_text: "Flow of Time",
        gallery_image_6_alt: "Inspiration 6",
        gallery_image_6_text: "Soul of Design",
        gallery_image_7_alt: "Inspiration 7",
        gallery_image_7_text: "Future Vision",
        gallery_image_8_alt: "Inspiration 8",
        gallery_image_8_text: "Personal Expression",
        gallery_image_9_alt: "Inspiration 9",
        gallery_image_9_text: "Aesthetic Collision",
        gallery_image_10_alt: "Inspiration 10",
        gallery_image_10_text: "Voice of the Era",
        gallery_image_11_alt: "Inspiration 11",
        gallery_image_11_text: "Creative Rebirth",
        gallery_image_12_alt: "Inspiration 12",
        gallery_image_12_text: "Eternal Legacy",
        gallery_image_13_alt: "Inspiration 13",
        gallery_image_13_text: "New Inspiration",
        gallery_image_14_alt: "Inspiration 14",
        gallery_image_14_text: "Aesthetic Legacy",
        gallery_image_15_alt: "Inspiration 15",
        gallery_image_15_text: "Creative Era",
        gallery_image_16_alt: "Inspiration 16",
        gallery_image_16_text: "Eternal Light",
        inspiration_title: "Inspiration Stories",
        inspiration_subtitle: "From history to fashion, every moment at HAF ignites inspiration.",
        inspiration_image_1_alt: "Story 1",
        inspiration_title_1: "Echoes of History",
        inspiration_text_1: "Ancient artifacts tell tales of millennia, inspiring us to cherish every legacy.",
        inspiration_image_2_alt: "Story 2",
        inspiration_title_2: "Spark of Art",
        inspiration_text_2: "A splash of color, a stroke of brilliance—art unlocks endless possibilities.",
        inspiration_image_3_alt: "Story 3",
        inspiration_title_3: "Pulse of Fashion",
        inspiration_text_3: "Trends are expressions of confidence, and HAF empowers you to lead the way.",
        testimonials_title: "User Voices",
        testimonials_subtitle: "HAF enthusiasts worldwide share their experiences.",
        testimonial_image_1_alt: "User 1",
        testimonial_text_1: '"HAF’s designs blend history’s depth with modern vibrancy—amazing!"',
        testimonial_name_1: "Li Ming",
        testimonial_image_2_alt: "User 2",
        testimonial_text_2: '"The perfect fusion of art and fashion—HAF redefined aesthetics for me!"',
        testimonial_name_2: "Sarah Tan",
        testimonial_image_3_alt: "User 3",
        testimonial_text_3: '"Every item feels like a work of art—HAF is my inspiration!"',
        testimonial_name_3: "Ahmad Zulkifli",
        journey_title: "Brand Journey",
        journey_subtitle: "HAF’s growth story, chronicling every step of aesthetics and creativity.",
        journey_image_1_alt: "Milestone 1",
        journey_title_1: "2018 - Founded",
        journey_text_1: "HAF was established, dedicated to blending history, art, and fashion.",
        journey_image_2_alt: "Milestone 2",
        journey_title_2: "2020 - First Exhibition",
        journey_text_2: "Debuted a global exhibition showcasing cross-disciplinary designs.",
        journey_image_3_alt: "Milestone 3",
        journey_title_3: "2023 - Expansion",
        journey_text_3: "Entered the Asian market with a new collection.",
        journey_image_4_alt: "Milestone 4",
        journey_title_4: "2025 - Future",
        journey_text_4: "Continuing to innovate and define new chapters in aesthetics.",
        events_title: "Upcoming Events",
        events_subtitle: "Join HAF’s future events and experience the boundless possibilities of aesthetics.",
        event_image_1_alt: "Event 1",
        event_title_1: "History Retrospective",
        event_text_1: "Explore the dialogue between ancient civilizations and modern design.",
        event_image_2_alt: "Event 2",
        event_title_2: "Art Workshop",
        event_text_2: "Create hands-on and unleash your artistic potential.",
        event_image_3_alt: "Event 3",
        event_title_3: "Fashion Launch",
        event_text_3: "Witness the debut of HAF’s 2025 collection.",
        community_title: "Join Our Community",
        community_subtitle: "Share your HAF story and connect with global aesthetic enthusiasts.",
        community_image_alt: "Community",
        community_button: "Share Your Story",
        themes_title: "Explore Three Themes",
        themes_subtitle: "History, art, and fashion—HAF opens three doors to aesthetics.",
        theme_history_title: "History",
        theme_history_text: "Trace the glory of civilizations and feel the depth of time.",
        theme_history_button: "Enter History",
        theme_art_title: "Art",
        theme_art_text: "Immerse in colors and creativity, exploring boundless inspiration.",
        theme_art_button: "Discover Art",
        theme_fashion_title: "Fashion",
        theme_fashion_text: "Lead the trend and showcase your unique style with confidence.",
        theme_fashion_button: "Chase Fashion",
        cta_title: "Begin Your Aesthetic Journey",
        cta_subtitle: "Explore HAF’s exclusive products and find your history, art, and fashion.",
        cta_button: "Shop Now",
        footer_copyright: "© 2025 History, Art & Fashion. All rights reserved."
    },
    ms: {
        hero_title: "Gabungan Kekal",
        hero_subtitle: "HAF menganyam sejarah, seni, dan fesyen ke dalam perjalanan estetik yang kekal abadi.",
        hero_button: "Terokai HAF",
        nav_history: "Sejarah",
        nav_art: "Seni",
        nav_fashion: "Fesyen",
        nav_shop: "Kedai",
        story_title: "Kisah Kami",
        story_image_alt: "Kisah HAF",
        story_text_1: "HAF lahir daripada semangat untuk estetika. Kami percaya sejarah adalah asas, seni adalah jiwa, dan fesyen adalah ekspresi. Setiap karya, pameran, dan reka bentuk menceritakan kisah merentasi ribuan tahun.",
        story_text_2: "Dari peninggalan tamadun kuno hingga warna galeri moden dan trend catwalk, HAF menyatukan elemen-elemen ini untuk mencipta gaya hidup yang unik. Sertai kami dalam perjalanan ini untuk meneroka keindahan kekal anda.",
        gallery_title: "Galeri Inspirasi",
        gallery_subtitle: "Tangkap detik-detik estetik dan rasakan denyut kreatif HAF.",
        gallery_image_1_alt: "Inspirasi 1",
        gallery_image_1_text: "Detik Inspirasi",
        gallery_image_2_alt: "Inspirasi 2",
        gallery_image_2_text: "Cahaya Kreativiti",
        gallery_image_3_alt: "Inspirasi 3",
        gallery_image_3_text: "Keindahan Kekal",
        gallery_image_4_alt: "Inspirasi 4",
        gallery_image_4_text: "Gabungan Budaya",
        gallery_image_5_alt: "Inspirasi 5",
        gallery_image_5_text: "Aliran Masa",
        gallery_image_6_alt: "Inspirasi 6",
        gallery_image_6_text: "Jiwa Reka Bentuk",
        gallery_image_7_alt: "Inspirasi 7",
        gallery_image_7_text: "Visi Masa Depan",
        gallery_image_8_alt: "Inspirasi 8",
        gallery_image_8_text: "Ekspresi Peribadi",
        gallery_image_9_alt: "Inspirasi 9",
        gallery_image_9_text: "Pertembungan Estetik",
        gallery_image_10_alt: "Inspirasi 10",
        gallery_image_10_text: "Suara Zaman",
        gallery_image_11_alt: "Inspirasi 11",
        gallery_image_11_text: "Kelahiran Semula Kreatif",
        gallery_image_12_alt: "Inspirasi 12",
        gallery_image_12_text: "Warisan Kekal",
        gallery_image_13_alt: "Inspirasi 13",
        gallery_image_13_text: "Inspirasi Baharu",
        gallery_image_14_alt: "Inspirasi 14",
        gallery_image_14_text: "Warisan Estetik",
        gallery_image_15_alt: "Inspirasi 15",
        gallery_image_15_text: "Zaman Kreatif",
        gallery_image_16_alt: "Inspirasi 16",
        gallery_image_16_text: "Cahaya Kekal",
        inspiration_title: "Cerita Inspirasi",
        inspiration_subtitle: "Dari sejarah ke fesyen, setiap detik di HAF mencetuskan inspirasi.",
        inspiration_image_1_alt: "Cerita 1",
        inspiration_title_1: "Gema Sejarah",
        inspiration_text_1: "Artifak kuno menceritakan kisah ribuan tahun, memberi inspirasi untuk menghargai setiap warisan.",
        inspiration_image_2_alt: "Cerita 2",
        inspiration_title_2: "Percikan Seni",
        inspiration_text_2: "Semburan warna, satu sapuan berus—seni membuka peluang tanpa batas.",
        inspiration_image_3_alt: "Cerita 3",
        inspiration_title_3: "Denyut Fesyen",
        inspiration_text_3: "Trend adalah ekspresi keyakinan, dan HAF memberi kuasa kepada anda untuk memimpin.",
        testimonials_title: "Suara Pengguna",
        testimonials_subtitle: "Peminat HAF dari seluruh dunia berkongsi pengalaman mereka.",
        testimonial_image_1_alt: "Pengguna 1",
        testimonial_text_1: '"Reka bentuk HAF memadukan kedalaman sejarah dengan dinamisme moden—hebat!"',
        testimonial_name_1: "Li Ming",
        testimonial_image_2_alt: "Pengguna 2",
        testimonial_text_2: '"Gabungan sempurna seni dan fesyen—HAF mentakrif semula estetika untuk saya!"',
        testimonial_name_2: "Sarah Tan",
        testimonial_image_3_alt: "Pengguna 3",
        testimonial_text_3: '"Setiap item seperti karya seni—HAF adalah sumber inspirasi saya!"',
        testimonial_name_3: "Ahmad Zulkifli",
        journey_title: "Perjalanan Jenama",
        journey_subtitle: "Kisah perkembangan HAF, merekod setiap langkah estetika dan kreativiti.",
        journey_image_1_alt: "Pencapaian 1",
        journey_title_1: "2018 - Ditubuhkan",
        journey_text_1: "HAF ditubuhkan, berdedikasi untuk menggabungkan sejarah, seni, dan fesyen.",
        journey_image_2_alt: "Pencapaian 2",
        journey_title_2: "2020 - Pameran Pertama",
        journey_text_2: "Memulakan pameran global yang mempamerkan reka bentuk pelbagai disiplin.",
        journey_image_3_alt: "Pencapaian 3",
        journey_title_3: "2023 - Pengembangan",
        journey_text_3: "Memasuki pasaran Asia dengan koleksi baharu.",
        journey_image_4_alt: "Pencapaian 4",
        journey_title_4: "2025 - Masa Depan",
        journey_text_4: "Terus berinovasi dan mentakrif bab baharu dalam estetika.",
        events_title: "Acara Akan Datang",
        events_subtitle: "Sertai acara masa depan HAF dan alami kemungkinan estetik yang tanpa batas.",
        event_image_1_alt: "Acara 1",
        event_title_1: "Retrospektif Sejarah",
        event_text_1: "Terokai dialog antara tamadun kuno dan reka bentuk moden.",
        event_image_2_alt: "Acara 2",
        event_title_2: "Bengkel Seni",
        event_text_2: "Cipta dengan tangan anda dan lepaskan potensi seni anda.",
        event_image_3_alt: "Acara 3",
        event_title_3: "Pelancaran Fesyen",
        event_text_3: "Saksikan pelancaran koleksi HAF 2025.",
        community_title: "Sertai Komuniti Kami",
        community_subtitle: "Kongsi kisah HAF anda dan berhubung dengan peminat estetik global.",
        community_image_alt: "Komuniti",
        community_button: "Kongsi Kisah Anda",
        themes_title: "Terokai Tiga Tema",
        themes_subtitle: "Sejarah, seni, dan fesyen—HAF membuka tiga pintu estetika.",
        theme_history_title: "Sejarah",
        theme_history_text: "Jejaki kemuliaan tamadun dan rasakan kedalaman masa.",
        theme_history_button: "Masuk Sejarah",
        theme_art_title: "Seni",
        theme_art_text: "Tenggelam dalam warna dan kreativiti, meneroka inspirasi tanpa batas.",
        theme_art_button: "Temui Seni",
        theme_fashion_title: "Fesyen",
        theme_fashion_text: "Pimpin trend dan pamerkan gaya unik anda dengan keyakinan.",
        theme_fashion_button: "Kejar Fesyen",
        cta_title: "Mulakan Perjalanan Estetik Anda",
        cta_subtitle: "Terokai produk eksklusif HAF dan temui sejarah, seni, dan fesyen anda.",
        cta_button: "Beli Sekarang",
        footer_copyright: "© 2025 Sejarah, Seni & Fesyen. Hak cipta terpelihara."
    }
};

// Language Switcher
document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('language-switcher');
    if (switcher) {
        switcher.addEventListener('change', (e) => {
            const lang = e.target.value;
            document.querySelectorAll('[data-lang-key]').forEach(element => {
                const key = element.getAttribute('data-lang-key');
                if (languages[lang] && languages[lang][key]) {
                    element.textContent = languages[lang][key];
                }
            });
            document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'en' ? 'en' : 'ms';
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Particles
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) { // Reduced from 50 to 30
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particlesContainer.appendChild(particle);
        }
    }

    // Parallax Effect
    const parallaxImages = document.querySelectorAll('.animate-parallax');
    window.addEventListener('scroll', () => {
        parallaxImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            const scrollY = window.scrollY;
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                img.style.transform = `translateY(${scrollY * 0.2}px)`;
            }
        });
    });

    // Lazy Load Animations
    const animatedElements = document.querySelectorAll('.animate-slide-left, .animate-slide-right, .animate-zoom, .animate-flip, .animate-rotate, .animate-bounce, .animate-gradient');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => observer.observe(element));
});

// Particle Styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: var(--accent-color);
            border-radius: 50%;
            animation: float 5s infinite ease-in-out;
        }
        @keyframes float {
            0% { transform: translateY(0) scale(1); opacity: 0.2; }
            50% { transform: translateY(-60px) scale(1.3); opacity: 0.5; }
            100% { transform: translateY(0) scale(1); opacity: 0.2; }
        }
    </style>
`);