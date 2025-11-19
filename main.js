document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.querySelector('.nav-mobile');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('menu-open');
        });
    }

    let slideIndex = 0;
    showSlides();
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slideIndex++;
        
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
        }
        
        setTimeout(showSlides, 4000); 
    }

});