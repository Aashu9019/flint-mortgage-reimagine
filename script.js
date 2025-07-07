
// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    let isMobileMenuOpen = false;
    
    // Open mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        isMobileMenuOpen = !isMobileMenuOpen;
        
        if (isMobileMenuOpen) {
            mobileMenu.classList.add('active');
            mobileMenuBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Animate mobile nav links
            mobileNavLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.style.transitionDelay = `${index * 100}ms`;
                }, 100);
            });
        } else {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu with X button
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function() {
            isMobileMenuOpen = false;
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close mobile menu when clicking on nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            isMobileMenuOpen = false;
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Sticky navigation with scroll effect
    const navigation = document.getElementById('navigation');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Enhanced hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon');
            const arrow = this.querySelector('.service-arrow');
            
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(3deg)';
            }
            if (arrow) {
                arrow.style.transform = 'translateX(0.5rem) scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            const arrow = this.querySelector('.service-arrow');
            
            if (icon) {
                icon.style.transform = '';
            }
            if (arrow) {
                arrow.style.transform = '';
            }
        });
    });
    
    // Enhanced hover effects for client cards
    const clientCards = document.querySelectorAll('.client-card');
    clientCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.client-arrow');
            if (arrow) {
                arrow.style.opacity = '1';
                arrow.style.transform = 'translateY(0)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.client-arrow');
            if (arrow) {
                arrow.style.opacity = '0';
                arrow.style.transform = 'translateY(0.5rem)';
            }
        });
    });
    
    // Button hover animations
    const buttons = document.querySelectorAll('.btn-hero, .btn-cta, .btn-contact');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.btn-arrow');
            if (arrow) {
                arrow.style.transform = 'translateX(0.5rem) scale(1.1)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.btn-arrow');
            if (arrow) {
                arrow.style.transform = '';
            }
        });
    });
    
    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(function() {
        // Any additional scroll-based animations can go here
    }, 16)); // ~60fps
    
    // Lazy loading for better performance
    if ('IntersectionObserver' in window) {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        const lazyObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    // Load content when element comes into view
                    lazyObserver.unobserve(element);
                }
            });
        });
        
        lazyElements.forEach(element => {
            lazyObserver.observe(element);
        });
    }
    
    // Contact form handling (if needed in the future)
    const contactButtons = document.querySelectorAll('.btn-contact, .btn-contact-mobile');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add contact form functionality here
            console.log('Contact button clicked');
            // For now, just scroll to footer
            document.querySelector('.footer').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add click handlers for service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add navigation to individual service pages here
            console.log('Service card clicked:', this.querySelector('.service-title').textContent);
        });
    });
    
    // Add click handlers for client type cards
    clientCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add navigation to who we help page here
            console.log('Client card clicked:', this.querySelector('.client-title').textContent);
        });
    });
    
    // View All buttons functionality
    const viewAllButtons = document.querySelectorAll('.view-all-btn');
    viewAllButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('View All button clicked');
            // Add navigation to respective pages here
        });
    });
    
    // Hero CTA functionality
    const heroButton = document.querySelector('.btn-hero');
    if (heroButton) {
        heroButton.addEventListener('click', function() {
            // Scroll to services section or open contact form
            document.querySelector('#services').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Add touch support for mobile devices
    if ('ontouchstart' in window) {
        // Add touch-specific interactions
        const touchElements = document.querySelectorAll('.service-card, .client-card, .testimonial-card');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(1.02)';
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }
    
    // Error handling for any failed animations
    window.addEventListener('error', function(e) {
        console.warn('Animation error caught:', e);
        // Gracefully handle any animation failures
    });
    
    // Accessibility: Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && isMobileMenuOpen) {
            isMobileMenuOpen = false;
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Initialize page with smooth entrance animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Utility functions for future enhancements
function showNotification(message, type = 'info') {
    // Create and show notification toast
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function loadPage(url) {
    // Future function for SPA navigation
    console.log('Loading page:', url);
}

// Performance monitoring (optional)
if ('performance' in window) {
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
        
        // Log Core Web Vitals if available
        if ('web-vitals' in window) {
            // getCLS, getFID, getFCP, getLCP, getTTFB would be available
            console.log('Core Web Vitals monitoring enabled');
        }
    });
}
