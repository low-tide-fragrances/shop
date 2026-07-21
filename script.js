// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }

    setActiveNavLink();
});

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Newsletter Signup
function handleNewsletterSignup(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    const message = document.getElementById('newsletter-message');

    if (email) {
        message.textContent = '✓ Thanks for subscribing!';
        message.style.color = '#00ff88';
        form.reset();

        setTimeout(() => {
            message.textContent = '';
        }, 3000);
    }
}

// Go to product details
function goToProduct(productId) {
    window.location.href = 'products.html?product=' + productId;
}

// Fragrance Finder Data
const fragrances = [
    {
        id: 'islander',
        name: 'Islander',
        status: 'available',
        price: 15.00,
        image: 'images/islander.jpg',
        type: 'Tropical • Fresh • Exotic',
        description: 'Escape to paradise with sun-soaked citrus, warm mango, and creamy coconut. Islander captures the essence of untamed island beauty.',
        topNotes: 'Ginger, Pink Grapefruit',
        heartNotes: 'Mango, Strawberry',
        baseNotes: 'Coconut, Sandalwood',
        traits: ['fresh', 'fruity', 'tropical', 'warm', 'sweet'],
        occasion: ['summer', 'vacation', 'casual', 'daytime']
    },
    {
        id: 'explorer',
        name: 'Explorer',
        status: 'coming-soon',
        image: 'images/explorer.jpg',
        type: 'Earthy • Bold • Adventurous',
        description: 'An olfactory journey through untamed wilderness. Grounding base notes with warm, spicy heart.',
        topNotes: 'Ginger, Bergamot',
        heartNotes: 'Cedarwood, Cardamom',
        baseNotes: 'Vetiver, Leather, Amber',
        traits: ['earthy', 'spicy', 'woody', 'bold', 'masculine'],
        occasion: ['adventure', 'outdoor', 'winter', 'evening']
    },
    {
        id: 'mariner',
        name: 'Mariner',
        status: 'coming-soon',
        image: 'images/mariner.jpg',
        type: 'Fresh • Aquatic • Crisp',
        description: 'Feel the salt spray and ocean breeze. Fresh citrus with oceanic accords and clean musks.',
        topNotes: 'Lemon, Sea Salt',
        heartNotes: 'Aquatic Notes, Grapefruit',
        baseNotes: 'Driftwood, Musk, Amber',
        traits: ['fresh', 'citrus', 'aquatic', 'clean', 'crisp'],
        occasion: ['summer', 'water', 'daytime', 'sport']
    },
    {
        id: 'eclipse',
        name: 'Eclipse',
        status: 'coming-soon',
        image: 'images/eclipse.jpg',
        type: 'Dark • Mysterious • Sensual',
        description: 'Immerse yourself in darkness. Moody coffee and chocolate notes with warm spice.',
        topNotes: 'Cinnamon, Cardamom',
        heartNotes: 'Coffee, Cocoa',
        baseNotes: 'Vanilla, Sandalwood, Musk',
        traits: ['dark', 'warm', 'spicy', 'aromatic', 'sensual'],
        occasion: ['evening', 'night', 'date', 'formal', 'winter']
    }
];

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Add appropriate animation class
                if (element.classList.contains('coming-soon-card')) {
                    element.classList.add('scroll-fade-in', `delay-${Math.min(index, 4) * 100}`);
                } else if (element.classList.contains('craftsmanship-card')) {
                    element.classList.add('scroll-scale-in', `delay-${Math.min(index, 2) * 100}`);
                } else if (element.classList.contains('featured-product') || element.classList.contains('featured-image')) {
                    element.classList.add('scroll-fade-in-left');
                } else if (element.classList.contains('featured-content')) {
                    element.classList.add('scroll-fade-in-right');
                } else if (element.classList.contains('finder-preview-content')) {
                    element.classList.add('scroll-fade-in-left');
                } else if (element.classList.contains('finder-preview-icon')) {
                    element.classList.add('scroll-rotate-bounce');
                } else {
                    element.classList.add('scroll-fade-in');
                }

                // Stop observing after animation is applied
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all elements that should animate on scroll
    const animatableElements = document.querySelectorAll(
        '.coming-soon-card, .craftsmanship-card, .product-card, ' +
        '.featured-product, .featured-image, .featured-content, ' +
        '.finder-preview-content, .finder-preview-icon, ' +
        'h2:not(.hero-text h1), h3'
    );

    animatableElements.forEach(el => {
        observer.observe(el);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.2), 0 10px 40px rgba(0, 0, 0, 0.3)';
            navbar.style.background = 'rgba(245, 241, 237, 0.95)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(245, 241, 237, 0.95)';
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;

    initScrollAnimations();
    initNavbarScroll();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
