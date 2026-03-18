
 // Language Switch Function
        function switchLang(lang) {
        // Update language button active state
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById('btn-' + lang).classList.add('active');

        // Show/hide elements by language
            document.querySelectorAll('[data-lang]').forEach(el => {
                if (el.getAttribute('data-lang') === lang) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });

        // Also make sure gallery category buttons update
            document.querySelectorAll('.gallery-categories button').forEach(btn => {
                btn.querySelectorAll('[data-lang]').forEach(span => {
                    if (span.getAttribute('data-lang') === lang) {
                    span.classList.add('active');
                    } else {
                    span.classList.remove('active');
                    }
                });
            });

            localStorage.setItem('preferredLang', lang);
            document.documentElement.lang = lang === 'mk' ? 'mk' : 'en';
        }
        
        window.addEventListener('load', () => {
            const savedLang = localStorage.getItem('preferredLang') || 'en';
            switchLang(savedLang);
    
            // Set default gallery category button as active
            document.querySelectorAll('.gallery-categories button').forEach(btn => {
            if (btn.dataset.category === 'trips') {
                btn.classList.add('active');
            }
        });
    
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);
});

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        const langSwitch = document.getElementById('langSwitch');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            if (window.scrollY > window.innerHeight - 100) {
                langSwitch.classList.add('hidden');
            } else {
                langSwitch.classList.remove('hidden');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // PARALLAX EFFECT
        let ticking = false;
        const parallaxContainer = document.getElementById('parallaxContainer');
        const parallaxBg = document.getElementById('parallaxBg');
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            if (scrolled < windowHeight) {
              
                const yPos = scrolled * 0.5;
                const scale = 1.1 + (scrolled * 0.0003);
                const opacity = 1 - (scrolled / (windowHeight * 0.8));
                
               
                parallaxContainer.style.transform = `translate3d(0, ${yPos}px, 0)`;
                parallaxBg.style.transform = `scale(${scale})`;
                parallaxBg.style.opacity = Math.max(opacity, 0.3);
                
               
                const rotate = scrolled * 0.02;
                parallaxBg.style.filter = `grayscale(100%) contrast(1.3) brightness(${0.7 + scrolled * 0.0002})`;
            }
            
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });

        // Marquee speed control based on scroll
        let marqueeSpeed = 40;
        const marquee1 = document.getElementById('marquee1');
        const marquee2 = document.getElementById('marquee2');
        
        window.addEventListener('scroll', () => {
            const scrollSpeed = Math.abs(window.scrollY - (window.lastScrollY || 0));
            window.lastScrollY = window.scrollY;
            
            // Pause marquees when scrolling fast
            if (scrollSpeed > 50) {
                marquee1.style.animationPlayState = 'paused';
                marquee2.style.animationPlayState = 'paused';
            } else {
                marquee1.style.animationPlayState = 'running';
                marquee2.style.animationPlayState = 'running';
            }
        });

        /* CONTACT FORM */
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const currentLang = localStorage.getItem('preferredLang') || 'en';
    
    // Disable button during submission
    const btn = form.querySelector('.submit-btn');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = currentLang === 'en' ? 'Sending...' : 'Испраќање...';
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success notification
            showNotification(
                currentLang === 'en' 
                    ? 'Message sent! We\'ll be in touch.' 
                    : 'Пораката е испратена! Ќе бидеме во контакт.',
                'success'
            );
            
            form.reset();
        } else {
            throw new Error('Server error');
        }
        
    } catch (error) {
        showNotification(
            currentLang === 'en' 
                ? 'Failed to send message. Try again.' 
                : 'Неуспешно испраќање. Обидете се повторно.',
            'error'
        );
        
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
    }
});



// Notification helper function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--blood-red)' : '#dc3545'};
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 4px;
        font-family: 'Oswald', sans-serif;
        font-weight: 600;
        z-index: 10001;
        transform: translateX(400px);
        transition: transform 0.4s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Slide in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        /*Stop loop of motorcycle pictures with a click, and continue with second click*/
        document.querySelectorAll(".marquee-track").forEach(track => {
            track.querySelectorAll(".marquee-item").forEach(item => {
                item.addEventListener("click", function () {
                    if (track.style.animationPlayState === "paused") {
                        track.style.animationPlayState = "running";
                    } else {
                        track.style.animationPlayState = "paused";
                    }
                });
            });
        });

        /*gallery*/
         // Gallery Data
            const galleryData = {
                trips: [
                    { src: 'trips/trips1.jpg', alt: 'Trip 1' },
                    { src: 'trips/trips2.jpg', alt: 'Trip 2' },
                    { src: 'trips/trips3.jpg', alt: 'Trip 3' },
                    { src: 'trips/trips4.jpg', alt: 'Trip 4' },
                    { src: 'trips/trips5.jpg', alt: 'Trip 5' },
                    { src: 'trips/trips7.jpg', alt: 'Trip 6' },
                    { src: 'trips/trips8.jpg', alt: 'Trip 7' },
                    { src: 'trips/trips10.jpg', alt: 'Trip 8' },
                    { src: 'trips/trips11.jpg', alt: 'Trip 9' },
                    { src: 'trips/trips12.jpg', alt: 'Trip 10' },
                    { src: 'trips/trips13.jpg', alt: 'Trip 11' },
                    { src: 'trips/trips14.jpg', alt: 'Trip 12' },
                    { src: 'trips/trips15.jpg', alt: 'Trip 13' },
                    { src: 'trips/trips16.jpg', alt: 'Trip 14' },
                    { src: 'trips/trips17.jpg', alt: 'Trip 15' },
                    { src: 'trips/trips18.jpg', alt: 'Trip 16' },
                    { src: 'trips/trips19.jpg', alt: 'Trip 17' },
                    { src: 'trips/trips20.jpg', alt: 'Trip 18' },
                    { src: 'trips/trips21.jpg', alt: 'Trip 19' },
                    { src: 'trips/trips23.jpg', alt: 'Trip 20' },
                    { src: 'trips/trips24.jpg', alt: 'Trip 21' },
                    { src: 'trips/trips25.jpg', alt: 'Trip 22' },
                    { src: 'trips/trips26.jpg', alt: 'Trip 23' },
                    { src: 'trips/trips27.jpg', alt: 'Trip 24' },
                    { src: 'trips/trips28.jpg', alt: 'Trip 25' },
                    { src: 'trips/trips29.jpg', alt: 'Trip 26' },
                    { src: 'trips/trips30.jpg', alt: 'Trip 27' },
                    { src: 'trips/trips31.jpg', alt: 'Trip 28' },
                    { src: 'trips/trips32.jpg', alt: 'Trip 29' },
                ],
                charity: [
                    { src: 'donation/donation1.jpg', alt: 'Charity Ride 1' },
                    { src: 'donation/donation2.jpg', alt: 'Charity Ride 2' },
                    { src: 'donation/donation3.jpg', alt: 'Charity Ride 3' },
                    { src: 'donation/donation4.jpg', alt: 'Charity Ride 4' },
                    { src: 'donation/donation5.jpg', alt: 'Charity Ride 5' },
                    { src: 'donation/donation6.jpg', alt: 'Charity Ride 6' },
                    { src: 'donation/donation7.jpg', alt: 'Charity Ride 7' },
                    { src: 'donation/donation8.jpg', alt: 'Charity Ride 8' },
                ],
                blood: [
                    { src: 'blood/blood2.jpg', alt: 'Blood Donation 1' },
                    { src: 'blood/blood3.jpg', alt: 'Blood Donation 2' },
                    { src: 'blood/blood5.jpg', alt: 'Blood Donation 3' },
                    { src: 'blood/blood6.jpg', alt: 'Blood Donation 4' },
                    { src: 'blood/blood8.jpg', alt: 'Blood Donation 5' },
                    { src: 'blood/blood11.jpg', alt: 'Blood Donation 6' },
                    { src: 'blood/blood12.jpg', alt: 'Blood Donation 7' },
                    { src: 'blood/blood13.jpg', alt: 'Blood Donation 8' },
                    { src: 'blood/blood15.jpg', alt: 'Blood Donation 9' },
                ]
            };

            let currentCategory = 'trips';
            let currentIndex = 0;
            let isDragging = false;
            let startX = 0;
            let currentX = 0;
            let velocity = 0;
            let animationFrame;

            const track = document.getElementById('carouselTrack');
            const container = document.getElementById('carouselContainer');

       // Initialize Gallery - OPTIMIZED
function initGallery(category) {
    currentCategory = category;
    currentIndex = 0;
    const images = galleryData[category];
    
    // Show loading state immediately
    track.innerHTML = '';
    const loadingItem = document.createElement('div');
    loadingItem.className = 'carousel-item active loading';
    loadingItem.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--blood-red);font-family:Oswald;">LOADING...</div>';
    track.appendChild(loadingItem);
    
    // Small delay to let UI render buttons first
    setTimeout(() => {
        track.innerHTML = '';
        
        // Load only first 5 images immediately
        const initialBatch = images.slice(0, 5);
        const restBatch = images.slice(5);
        
        // Create first 5 items
        initialBatch.forEach((img, idx) => {
            createCarouselItem(img, idx, images.length);
        });
        
        updateCarousel();
        
        // Load remaining images in background
        if (restBatch.length > 0) {
            let loadedCount = 0;
            restBatch.forEach((img, idx) => {
                // Delay each image slightly to not overwhelm browser
                setTimeout(() => {
                    createCarouselItem(img, idx + 5, images.length);
                    loadedCount++;
                    // Update carousel positions as new items arrive
                    if (loadedCount === restBatch.length) {
                        updateCarousel();
                    }
                }, idx * 100); 
            });
        }
    }, 50);
}

// Helper function to create carousel items
function createCarouselItem(img, idx, total) {
    const item = document.createElement('div');
    item.className = 'carousel-item loading';
    item.dataset.index = idx;
    item.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    item.addEventListener('click', () => goToSlide(idx));
    
    const image = item.querySelector('img');
    image.onload = () => item.classList.remove('loading');
    image.onerror = () => {
        
        item.style.display = 'none';
    };
    
    track.appendChild(item);
}

// Update Carousel Positions
function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item:not([style*="display: none"])');
    const total = items.length;
    
    if (total === 0) return;
    
    items.forEach((item, idx) => {
        
        item.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next', 'hidden');
        
  
        const diff = idx - currentIndex;
        
        if (diff === 0) {
            item.classList.add('active');
        } else if (diff === -1 || (diff === total - 1 && total > 1)) {
            item.classList.add('prev');
        } else if (diff === 1 || (diff === -(total - 1) && total > 1)) {
            item.classList.add('next');
        } else if (diff === -2 || (diff === total - 2 && total > 2)) {
            item.classList.add('far-prev');
        } else if (diff === 2 || (diff === -(total - 2) && total > 2)) {
            item.classList.add('far-next');
        } else {
            item.classList.add('hidden');
        }
    });
}

        // Navigation
        function goToSlide(index) {
            const items = document.querySelectorAll('.carousel-item');
            currentIndex = (index + items.length) % items.length;
            updateCarousel();
        }

        function nextSlide() {
            const items = document.querySelectorAll('.carousel-item');
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }

        function prevSlide() {
            const items = document.querySelectorAll('.carousel-item');
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        }

        // Event Listeners
        document.getElementById('prevBtn').addEventListener('click', prevSlide);
        document.getElementById('nextBtn').addEventListener('click', nextSlide);

        document.querySelectorAll('.gallery-categories button').forEach(btn => {
            btn.addEventListener('click', (e) => {
        
        const button = e.currentTarget;
        
        document.querySelectorAll('.gallery-categories button').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    
        initGallery(button.dataset.category);
    });
});

        container.addEventListener('pointerdown', (e) => {
            isDragging = true;
            startX = e.clientX;
            currentX = startX;
            velocity = 0;
            container.style.cursor = 'grabbing';
            cancelAnimationFrame(animationFrame);
        });

        container.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
        
            const dx = e.clientX - currentX;
            velocity = dx;
            currentX = e.clientX;
        
            const items = document.querySelectorAll('.carousel-item');
            items.forEach(item => {
            const currentTransform = getComputedStyle(item).transform;
            });
        });

        container.addEventListener('pointerup', () => {
            if (!isDragging) return;
            isDragging = false;
            container.style.cursor = 'grab';
        
            if (Math.abs(velocity) > 5) {
                if (velocity > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
            }
        });

        container.addEventListener('pointerleave', () => {
            if (isDragging) {
                isDragging = false;
                container.style.cursor = 'grab';
            }
        });

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Auto-rotate (optional)
        let autoRotate = setInterval(nextSlide, 5000);
    
        container.addEventListener('mouseenter', () => clearInterval(autoRotate));
        container.addEventListener('mouseleave', () => {
            autoRotate = setInterval(nextSlide, 5000);
        });

        // Initialize
        initGallery('trips');