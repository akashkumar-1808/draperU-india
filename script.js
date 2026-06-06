document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Text Animation
    const dynamicTexts = document.querySelectorAll('.dynamic-text');
    let currentIndex = 0;

    if (dynamicTexts.length > 0) {
        function animateText() {
            const currentText = dynamicTexts[currentIndex];
            
            // Remove active class from current text
            currentText.classList.remove('active');
            currentText.classList.add('exit');
            
            // Wait for exit animation to finish before removing exit class
            setTimeout(() => {
                currentText.classList.remove('exit');
            }, 500);

            // Calculate next index
            currentIndex = (currentIndex + 1) % dynamicTexts.length;
            const nextText = dynamicTexts[currentIndex];
            
            // Add active class to next text
            nextText.classList.add('active');
        }

        // Change text every 2 seconds
        setInterval(animateText, 2000);
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navbar.classList.toggle('menu-open');
            
            // Prevent body scroll when menu is open
            if (navbar.classList.contains('menu-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-links a, .nav-cta');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('menu-open')) {
                mobileBtn.classList.remove('active');
                navbar.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });
    });

    // Update Copyright Year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
