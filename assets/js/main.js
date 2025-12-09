document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Mobile Menu Toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });
    }

    // Mobile Dropdown Toggle
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const menu = toggle.querySelector('.dropdown-menu');
            const icon = toggle.querySelector('.chevron-icon');
            menu.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });

    // Sticky Header
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    });

    // Global Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Initialize Scroll Animations
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Initialize RTL Toggle with Globe Icon
    const rtlBtns = document.querySelectorAll('#rtl-toggle, #rtl-toggle-mobile');

    // Check saved preference
    const currentDir = localStorage.getItem('dir') || 'ltr';
    document.documentElement.setAttribute('dir', currentDir);
    updateGlobeIcon(currentDir);

    rtlBtns.forEach(btn => {
        // Set initial icon content if not present
        if (!btn.innerHTML.includes('fa-globe')) {
            btn.innerHTML = `<i class="fa-solid fa-globe"></i>`;
            btn.title = "Toggle Language Direction";
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const html = document.documentElement;
            const newDir = html.getAttribute('dir') === 'ltr' ? 'rtl' : 'ltr';

            html.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);
            updateGlobeIcon(newDir);
        });
    });

    // Initialize Matrix Effect if canvas exists
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
        initMatrixEffect(canvas);
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');
            const icon = question.querySelector('i');

            // Toggle current item
            const isOpen = !answer.classList.contains('hidden');

            // Close all other FAQs
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
            document.querySelectorAll('.faq-question i').forEach(i => i.classList.remove('rotate-180'));

            // Toggle current
            if (!isOpen) {
                answer.classList.remove('hidden');
                icon.classList.add('rotate-180');
            }
        });
    });
});

function updateGlobeIcon(dir) {
    const btns = document.querySelectorAll('#rtl-toggle, #rtl-toggle-mobile');
    btns.forEach(btn => {
        btn.setAttribute('aria-label', dir === 'ltr' ? 'Switch to RTL' : 'Switch to LTR');

        // Add smooth rotation animation
        // We use a temporary class or direct style manipulation for the spin
        btn.style.transition = 'transform 0.6s ease';
        btn.style.transform = 'rotate(360deg)';

        // Reset rotation after animation
        setTimeout(() => {
            btn.style.transition = 'none';
            btn.style.transform = 'rotate(0deg)';
            // Force reflow
            void btn.offsetWidth;
            btn.style.transition = 'transform 0.6s ease';
        }, 600);
    });
}

// Matrix Effect
function initMatrixEffect(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    // Check for light theme
    const isLight = document.body.classList.contains('light-theme');
    const color = isLight ? '#0f172a' : '#0ea5e9'; // Dark text for light theme, Cyan for dark theme

    function draw() {
        ctx.fillStyle = isLight ? 'rgba(248, 250, 252, 0.05)' : 'rgba(15, 23, 42, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = color;
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
