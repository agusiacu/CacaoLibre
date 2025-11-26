document.addEventListener('DOMContentLoaded', () => {

    insertHeader();
    insertFooter();
    mobileMenu();
	startSlideshow();
    contactForm();

});

function insertHeader() {
    // Construir e insertar header HTML
    const headerHTML = `
		<div class="header-content">
            <a href="index.html" class="logo">
                <img src="images/logo.png" alt="Logo Cacao Libre">
                <span>Cacao Libre</span>
            </a>

            <nav class="nav-desktop">
                <ul>
                    <li><a href="index.html">INICIO</a></li>
                    <li><a href="nosotros.html">NOSOTROS</a></li>
                    <li><a href="proyectos.html">PROYECTOS</a></li>
                    <li><a href="#">IMPACTO</a></li>
                    <li><a href="unirse.html">UNIRSE</a></li>
                    <li><a href="contacto.html">CONTACTO</a></li>
                    <li><a href="donar.html" class="btn-donar">Donar</a></li>
                </ul>
            </nav>

            <button id="menu-btn" class="menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        
        <nav class="nav-mobile">
            <a href="index.html">INICIO</a>
            <a href="nosotros.html">NOSOTROS</a>
            <a href="proyectos.html">PROYECTOS</a>
            <a href="#">IMPACTO</a>
            <a href="unirse.html">UNIRSE</a>
            <a href="contacto.html">CONTACTO</a>
            <a href="donar.html" class="btn-donar">DONAR</a>
        </nav>
	`;
    const headerContainer = document.querySelector('header');
    if (headerContainer) headerContainer.innerHTML = headerHTML;
}

function insertFooter() {
    // Construir e insertar footer HTML
    const footerHTML = `
		<div class="footer-col">
            <h3>Mapa del Sitio</h3>
            <ul class="footer-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="proyectos.html">Proyectos</a></li>
                <li><a href="#">Impacto</a></li>
                <li><a href="unirse.html">Unirse</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h3>Únete a la Causa</h3>
            <p>Tu aporte hace la diferencia.</p>
            <a href="donar.html" class="btn-donar">Donar</a>
        </div>
	`;
    const footerContainer = document.querySelector('footer');
    if (footerContainer) footerContainer.innerHTML = footerHTML;
}

function mobileMenu() {
    // Funcionalidad del menú móvil
    const menuBtn = document.getElementById('menu-btn');
	const mobileMenu = document.querySelector('.nav-mobile');
	if (menuBtn && mobileMenu) {
		menuBtn.addEventListener('click', () => {
			mobileMenu.classList.toggle('menu-open');
		});
	}
}

function startSlideshow() {
    // Slideshow automático
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
}

function contactForm() {
    // Manejo del formulario de contacto
    const form = document.getElementById('contact-form');
    const success = document.getElementById('contact-success');

    if (form && success) {
        form.addEventListener('submit', function(e){
            e.preventDefault();
            // Validación simple adicional
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            form.style.display = 'none';
            success.style.display = 'block';
        });
    }
}