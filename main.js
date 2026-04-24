// Gallery Data
const galleryData = {
    trips: [
        { src: 'trips/trips1.jpg', alt: 'Club trip to Ohrid Lake' },
        { src: 'trips/trips2.jpg', alt: 'Mountain ride through Mavrovo' },
        { src: 'trips/trips3.jpg', alt: 'Group ride to Pelister' },
        { src: 'trips/trips4.jpg', alt: 'Sunset ride near Struga' },
        { src: 'trips/trips5.jpg', alt: 'Weekend trip to Krushevo' },
        { src: 'trips/trips7.jpg', alt: 'Coastal road to Thessaloniki' },
        { src: 'trips/trips8.jpg', alt: 'Autumn ride through Tikvesh' },
        { src: 'trips/trips10.jpg', alt: 'Spring ride to Matka Canyon' },
        { src: 'trips/trips11.jpg', alt: 'Overnight camping trip' },
        { src: 'trips/trips12.jpg', alt: 'Ride through Kumanovo region' },
        { src: 'trips/trips13.jpg', alt: 'Border ride to Kosovo' },
        { src: 'trips/trips14.jpg', alt: 'Wine route through Negotino' },
        { src: 'trips/trips15.jpg', alt: 'Mountain pass near Strumica' },
        { src: 'trips/trips16.jpg', alt: 'Lake ride to Dojran' },
        { src: 'trips/trips17.jpg', alt: 'Historic route to Bitola' },
        { src: 'trips/trips18.jpg', alt: 'Off-road adventure near Prilep' },
        { src: 'trips/trips19.jpg', alt: 'Sunrise ride to Vodno' },
        { src: 'trips/trips20.jpg', alt: 'Group photo at Millennium Cross' },
        { src: 'trips/trips21.jpg', alt: 'River ride along Vardar' },
        { src: 'trips/trips23.jpg', alt: 'Winter ride to Popova Shapka' },
        { src: 'trips/trips24.jpg', alt: 'Summer ride to Galichnik' },
        { src: 'trips/trips25.jpg', alt: 'Canyon ride near Demir Kapija' },
        { src: 'trips/trips26.jpg', alt: 'Forest ride through Berovo' },
        { src: 'trips/trips27.jpg', alt: 'High altitude ride to Shar Mountain' },
        { src: 'trips/trips28.jpg', alt: 'Coastal sunset ride' },
        { src: 'trips/trips29.jpg', alt: 'Group ride through Prolet' },
        { src: 'trips/trips30.jpg', alt: 'Weekend getaway to Ohrid' },
        { src: 'trips/trips31.jpg', alt: 'Mountain lodge overnight' },
        { src: 'trips/trips32.jpg', alt: 'Spring blossom ride' }
    ],
    charity: [
        { src: 'donation/donation1.jpg', alt: 'Charity ride for orphanage support' },
        { src: 'donation/donation2.jpg', alt: 'Fundraising event in Skopje' },
        { src: 'donation/donation3.jpg', alt: 'Winter supplies donation drive' },
        { src: 'donation/donation4.jpg', alt: 'School supplies for rural areas' },
        { src: 'donation/donation5.jpg', alt: 'Easter charity event' },
        { src: 'donation/donation6.jpg', alt: 'Christmas gift delivery' },
        { src: 'donation/donation7.jpg', alt: 'Community center support' },
        { src: 'donation/donation8.jpg', alt: 'Annual charity gala' }
    ],
    blood: [
        { src: 'blood/blood2.jpg', alt: 'Blood donation drive at City Hospital' },
        { src: 'blood/blood3.jpg', alt: 'Members donating at Red Cross' },
        { src: 'blood/blood5.jpg', alt: 'Emergency blood drive response' },
        { src: 'blood/blood6.jpg', alt: 'Regular monthly donation' },
        { src: 'blood/blood8.jpg', alt: 'Group donation day' },
        { src: 'blood/blood11.jpg', alt: 'Blood donor recognition event' },
        { src: 'blood/blood12.jpg', alt: 'Youth blood donation campaign' },
        { src: 'blood/blood15.jpg', alt: 'Annual blood donation marathon' }
    ]
};

// Bike data for marquees
const bikeData = [
    { src: 'bike/1.webp', title: 'BMW R1200 GS / KTM 1290 Super Adventure / Suzuki V-Strom 1000' },
    { src: 'bike/2.webp', title: 'Suzuki V-Strom 1000 / KTM 1290 Super Adventure / Suzuki V-Strom 650' },
    { src: 'bike/3.webp', title: 'BMW F750 GS' },
    { src: 'bike/4.webp', title: 'BMW R1200GS' },
    { src: 'bike/5.webp', title: 'Kawasaki ER-5' },
    { src: 'bike/51.webp', title: 'BMW F800R' },
    { src: 'bike/7.webp', title: 'Kawasaki Versys 1000' },
    { src: 'bike/8.webp', title: 'BMW R1200RT' },
    { src: 'bike/9.webp', title: 'Yamaha FZ6' },
    { src: 'bike/10.webp', title: 'BMW 1200RT' },
    { src: 'bike/11.webp', title: 'Honda VFR800F' },
    { src: 'bike/12.webp', title: 'Suzuki DL V-Strom 650' },
    { src: 'bike/13.webp', title: 'Kawasaki Z400' },
    { src: 'bike/14.webp', title: 'Ducati Multistrada V2' },
    { src: 'bike/15.webp', title: 'KTM 1290 Super Adventure' },
    { src: 'bike/16.jwebp', title: 'Suzuki V-Strom 650' },
    { src: 'bike/17.webp', title: 'BMW R1200RT' },
    { src: 'bike/18.webp', title: 'Yamaha XT660Z Tenere' },
    { src: 'bike/19.webp', title: 'Kawasaki ER-5' },
    { src: 'bike/20.webp', title: 'Benelli TRK 502X' },
    { src: 'bike/21.webp', title: 'BMW R1250RT' },
    { src: 'bike/22.webp', title: 'Kawasaki ER-5' },
    { src: 'bike/23.webp', title: 'Yamaha FJR1300' },
    { src: 'bike/24.webp', title: 'BMW F750 GS' },
    { src: 'bike/25.webp', title: 'Kawasaki Z400' },
    { src: 'bike/26.webp', title: 'Honda Africa Twin' },
    { src: 'bike/27.webp', title: 'Triumph Tiger 800' },
    { src: 'bike/28.webp', title: 'Suzuki GSX-S750' },
    { src: 'bike/29.webp', title: 'Kawasaki Ninja 650' },
    { src: 'bike/30.webp', title: 'BMW S1000XR' },
    { src: 'bike/31.webp', title: 'Yamaha Tracer 900' },
    { src: 'bike/32.webp', title: 'Honda CB500X' },
    { src: 'bike/33.webp', title: 'KTM 790 Adventure' },
    { src: 'bike/34.webp', title: 'Suzuki Burgman 650' },
    { src: 'bike/35.webp', title: 'BMW R NineT' },
    { src: 'bike/36.webp', title: 'Ducati Scrambler' },
    { src: 'bike/37.webp', title: 'Yamaha MT-07' },
    { src: 'bike/38.webp', title: 'Kawasaki Z900' },
    { src: 'bike/39.webp', title: 'Honda Gold Wing' },
    { src: 'bike/40.webp', title: 'BMW K1600GT' },
    { src: 'bike/41.webp', title: 'Triumph Bonneville' },
    { src: 'bike/42.webp', title: 'Suzuki Hayabusa' },
    { src: 'bike/43.webp', title: 'Kawasaki H2 SX' },
    { src: 'bike/44.webp', title: 'Yamaha R1' },
    { src: 'bike/45.webp', title: 'BMW HP4' },
    { src: 'bike/46.webp', title: 'Ducati Panigale V4' },
    { src: 'bike/47.webp', title: 'Honda CBR1000RR-R' },
    { src: 'bike/48.webp', title: 'KTM RC 390' },
    { src: 'bike/49.webp', title: 'Suzuki SV650' },
    { src: 'bike/50.webp', title: 'BMW G310GS' }
];

// Global variables
let currentCategory = 'trips';
let currentIndex = 0;
let isDragging = false;
let startX = 0;
let currentX = 0;
let velocity = 0;
let animationFrame;
let autoRotate;
let container;

// Language Switch Function
function switchLang(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');

    document.querySelectorAll('[data-lang]').forEach(el => {
        if (el.getAttribute('data-lang') === lang) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang === 'mk' ? 'mk' : 'en';
}

// Initialize Marquees
function initMarquees() {
    const marquee1 = document.getElementById('marquee1');
    const marquee2 = document.getElementById('marquee2');

    const firstBatch = bikeData.slice(0, 25);
    const secondBatch = bikeData.slice(25, 50);

    let html1 = '';
    firstBatch.forEach(bike => {
        html1 += `<div class="marquee-item"><img src="${bike.src}" alt="${bike.title}" loading="lazy" width="300" height="200"><div class="marquee-info"><h4>${bike.title}</h4></div></div>`;
    });
    firstBatch.forEach(bike => {
        html1 += `<div class="marquee-item"><img src="${bike.src}" alt="${bike.title}" loading="lazy" width="300" height="200"><div class="marquee-info"><h4>${bike.title}</h4></div></div>`;
    });
    marquee1.innerHTML = html1;

    let html2 = '';
    secondBatch.forEach(bike => {
        html2 += `<div class="marquee-item"><img src="${bike.src}" alt="${bike.title}" loading="lazy" width="300" height="200"><div class="marquee-info"><h4>${bike.title}</h4></div></div>`;
    });
    secondBatch.forEach(bike => {
        html2 += `<div class="marquee-item"><img src="${bike.src}" alt="${bike.title}" loading="lazy" width="300" height="200"><div class="marquee-info"><h4>${bike.title}</h4></div></div>`;
    });
    marquee2.innerHTML = html2;

    document.querySelectorAll(".marquee-track").forEach(track => {
        track.addEventListener("click", function(e) {
            if (e.target.closest('.marquee-item')) {
                this.style.animationPlayState = this.style.animationPlayState === "paused" ? "running" : "paused";
            }
        });
    });
}

// Initialize Gallery
function initGallery(category) {
    currentCategory = category;
    currentIndex = 0;
    const images = galleryData[category];

    container = document.getElementById('carouselContainer');
    const track = document.getElementById('carouselTrack');

    track.innerHTML = '';

    images.forEach((img, idx) => {
        createCarouselItem(img, idx, images.length);
    });

    updateCarousel();
}

function createCarouselItem(img, idx, total) {
    const track = document.getElementById('carouselTrack');
    const item = document.createElement('div');
    item.className = 'carousel-item loading';
    item.dataset.index = idx;
    item.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy" width="400" height="400">`;
    item.addEventListener('click', () => openLightbox(idx));

    const image = item.querySelector('img');
    image.onload = () => item.classList.remove('loading');
    image.onerror = () => {
        item.remove();
        updateCarousel();
    };

    track.appendChild(item);
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const total = items.length;

    if (total === 0) return;

    items.forEach((item, idx) => {
        item.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next', 'hidden');

        let diff = idx - currentIndex;

        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        if (diff === 0) {
            item.classList.add('active');
        } else if (diff === -1) {
            item.classList.add('prev');
        } else if (diff === 1) {
            item.classList.add('next');
        } else if (diff === -2) {
            item.classList.add('far-prev');
        } else if (diff === 2) {
            item.classList.add('far-next');
        } else {
            item.classList.add('hidden');
        }
    });
}

function goToSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    if (items.length === 0) return;
    currentIndex = ((index % items.length) + items.length) % items.length;
    updateCarousel();
}

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    if (items.length === 0) return;
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    const items = document.querySelectorAll('.carousel-item');
    if (items.length === 0) return;
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

// Notification helper
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

    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });

    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// Window Load Event - NO DELAY
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    switchLang(savedLang);

    initMarquees();

    document.querySelectorAll('.gallery-categories button').forEach(btn => {
        if (btn.dataset.category === 'trips') {
            btn.classList.add('active');
        }
    });

    initGallery('trips');

    // Hide loader immediately
    document.getElementById('loader').classList.add('hidden');

    // Lazy load hero background image
    const heroBg = document.getElementById('parallaxBg');
    if (heroBg) {
        const img = new Image();
        img.src = 'assets/PARALAX_BACKGROUND_PICTURE.png';
        img.onload = () => {
            heroBg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('assets/PARALAX_BACKGROUND_PICTURE.png')`;
        };
    }
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

// Parallax Effect
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
let lastScrollY = 0;
const marquee1 = document.getElementById('marquee1');
const marquee2 = document.getElementById('marquee2');

window.addEventListener('scroll', () => {
    const scrollSpeed = Math.abs(window.scrollY - lastScrollY);
    lastScrollY = window.scrollY;

    if (scrollSpeed > 50) {
        if (marquee1) marquee1.style.animationPlayState = 'paused';
        if (marquee2) marquee2.style.animationPlayState = 'paused';
    } else {
        if (marquee1) marquee1.style.animationPlayState = 'running';
        if (marquee2) marquee2.style.animationPlayState = 'running';
    }
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const currentLang = localStorage.getItem('preferredLang') || 'en';

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
            showNotification(
                currentLang === 'en' 
                    ? "Message sent! We'll be in touch." 
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ============================================
// LIGHTBOX - Single clean definition
// ============================================

let lightboxOverlay, lightboxImage, lightboxCounter, lightboxClose, lightboxPrev, lightboxNext;
let lightboxIndex = 0;
let lightboxImages = [];

function initLightbox() {
    lightboxOverlay = document.getElementById('lightboxOverlay');
    lightboxImage = document.getElementById('lightboxImage');
    lightboxCounter = document.getElementById('lightboxCounter');
    lightboxClose = document.getElementById('lightboxClose');
    lightboxPrev = document.getElementById('lightboxPrev');
    lightboxNext = document.getElementById('lightboxNext');

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxNextSlide();
    });
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxPrevSlide();
    });
    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });
}

function openLightbox(index) {
    lightboxImages = galleryData[currentCategory];
    lightboxIndex = index;
    
    updateLightboxImage();
    lightboxOverlay.classList.add('active');
    
    stopAutoRotate();
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightboxOverlay.classList.remove('active');
    
    startAutoRotate();
    document.body.style.overflow = '';
}

function updateLightboxImage() {
    if (lightboxImages.length === 0) return;
    
    const img = lightboxImages[lightboxIndex];
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

function lightboxNextSlide() {
    if (lightboxImages.length === 0) return;
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    updateLightboxImage();
}

function lightboxPrevSlide() {
    if (lightboxImages.length === 0) return;
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    updateLightboxImage();
}

// Keyboard navigation in lightbox
document.addEventListener('keydown', (e) => {
    if (!lightboxOverlay.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lightboxNextSlide();
    if (e.key === 'ArrowLeft') lightboxPrevSlide();
});

// Gallery Event Listeners
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

// Carousel pointer events
function setupCarouselEvents() {
    container = document.getElementById('carouselContainer');
    if (!container) return;

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
}

// Setup carousel events after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setupCarouselEvents();
    initLightbox();
    setTimeout(startAutoRotate, 1000);
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// Auto-rotate with visibility check
function startAutoRotate() {
    autoRotate = setInterval(nextSlide, 5000);
}

function stopAutoRotate() {
    clearInterval(autoRotate);
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoRotate();
    } else {
        startAutoRotate();
    }
});

// Pause on hover
const carouselContainerEl = document.getElementById('carouselContainer');
if (carouselContainerEl) {
    carouselContainerEl.addEventListener('mouseenter', stopAutoRotate);
    carouselContainerEl.addEventListener('mouseleave', startAutoRotate);
}

// ============================================
// SITE-WIDE DOWNLOAD / COPY / DRAG PROTECTION
// ============================================

// Block right-click EVERYWHERE on the site
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// Block drag on everything
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

// Block copy keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + C (copy)
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
    }
    // Ctrl/Cmd + S (save page)
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
    }
    // Ctrl/Cmd + U (view source)
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
    }
    // Ctrl/Cmd + A (select all)
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
        e.preventDefault();
    }
    // Ctrl/Cmd + P (print)
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
    }
});

// Block cut/copy/paste events
document.addEventListener('copy', (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener('cut', (e) => {
    e.preventDefault();
    return false;
});

// Double-click protection (prevents text selection via double-click)
document.addEventListener('dblclick', (e) => {
    e.preventDefault();
});

// Mobile long-press protection
document.addEventListener('touchstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.style.webkitTouchCallout = 'none';
    }
}, { passive: true });

// Gallery & lightbox extra protection (they use pointer events)
const galleryContainer = document.getElementById('carouselContainer');
const lightboxContainer = document.getElementById('lightboxOverlay');

if (galleryContainer) {
    galleryContainer.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
}

if (lightboxContainer) {
    lightboxContainer.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
}




