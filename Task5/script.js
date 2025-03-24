document.addEventListener('DOMContentLoaded', function() {
    // Array of image URLs
    const images = [
        'https://imgs.search.brave.com/7GCaP4H94AZoCI59YB_71JSOcrH3HcQNOKQUYd_6FKM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tb3VudGFpbnMt/Ynktc2VhXzEwNDg5/NDQtNjM3MTgzOS5q/cGc_c2VtdD1haXNf/aHlicmlk',
        'https://imgs.search.brave.com/xc4-VcKoew98VwoLqbwHdSeu6cZU9_YHl2uBdV1GnGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zY2VuaWMtdmll/dy1zZWEtbW91bnRh/aW5zLWFnYWluc3Qt/c2t5XzEwNDg5NDQt/MjcyMjc0OTMuanBn/P3NlbXQ9YWlzX2h5/YnJpZA',
        'https://imgs.search.brave.com/aF0SRBEaO922AqoVg1mbZ5TYvFo9KplxUy8EN0tcUeE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/ZXJ0aWNhbC1zaG90/LXJpdmVyLXN1cnJv/dW5kZWQtYnktbW91/bnRhaW5zLW1lYWRv/d3Mtc2NvdGxhbmRf/MTgxNjI0LTI3ODgx/LmpwZz9zZW10PWFp/c19oeWJyaWQ',
        'https://imgs.search.brave.com/gl0DNQnM2PXV3cC2kahQY-zaLWCISKcJ956fEjB0Qaw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lsZG5hdHVyZWlt/YWdlcy5jb20vaW1h/Z2VzLzY0MC8xMzA3/MjctMDM5YS1GaXJl/d2VlZC1hbmQtRGVu/YWxpLmpwZw',
        'https://imgs.search.brave.com/NjUNZyh_XFWaIMWZZOunyADoV5eUVADlkQQeZhfrass/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzY2Lzg1Lzk5/LzM2MF9GXzk2Njg1/OTk4N19YMFlzWklP/Ym5remRweWFyZTAx/akNDQmJFbWlWejVH/ZC5qcGc'
    ];
    
    const slidesContainer = document.querySelector('.slides');
    const dotsContainer = document.querySelector('.dots-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    
    // Create slides
    images.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Slide ${index + 1}`;
        
        slide.appendChild(img);
        slidesContainer.appendChild(slide);
        
        // Create dots
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Get all slides and dots after they've been created
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Function to show a specific slide
    function goToSlide(index) {
        // Hide current slide
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        
        // Update current index
        currentIndex = index;
        
        // Show new slide
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    
    // Function to go to the next slide
    function nextSlide() {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        goToSlide(newIndex);
    }
    
    // Function to go to the previous slide
    function prevSlide() {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        goToSlide(newIndex);
    }
    
    // Add event listeners to buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Optional: Auto-advance the slider every 5 seconds
    const interval = setInterval(nextSlide, 5000);
    
    // Pause auto-advance when hovering over the slider
    slidesContainer.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
});