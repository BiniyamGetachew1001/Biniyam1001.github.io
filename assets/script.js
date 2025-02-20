document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
        }
    });

    // Lazy loading for images and videos
    const lazyElements = document.querySelectorAll('img.lazy, video.lazy');
    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                if (element.tagName === 'IMG') {
                    element.src = element.dataset.src;
                } else if (element.tagName === 'VIDEO') {
                    element.src = element.dataset.src;
                    element.poster = element.dataset.poster;
                }
                element.classList.remove('lazy');
                element.classList.add('lazy-loaded');
                observer.unobserve(element);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0.01
    });

    lazyElements.forEach(element => {
        observer.observe(element);
    });
});

window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
    // Lazy load non-autoplay videos:
    const videos = document.querySelectorAll('video:not([autoplay])');
    videos.forEach(video => {
        video.preload = 'none';
    });
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};