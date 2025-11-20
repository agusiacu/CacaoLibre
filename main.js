document.addEventListener('DOMContentLoaded', () => {

	// Construir header HTML
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
                    <li><a href="#">PROYECTOS</a></li>
                    <li><a href="#">IMPACTO</a></li>
                    <li><a href="#">UNIRSE</a></li>
                    <li><a href="#">CONTACTO</a></li>
                    <li><a href="#" class="btn-donar">Donar</a></li>
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
            <a href="#">NOSOTROS</a>
            <a href="#">PROYECTOS</a>
            <a href="#">IMPACTO</a>
            <a href="#">UNIRSE</a>
            <a href="#">CONTACTO</a>
            <a href="#" class="btn-donar">DONAR</a>
        </nav>
	`;

	// Construir footer HTML
	const footerHTML = `
		<div class="footer-col">
            <h3>Mapa del Sitio</h3>
            <ul class="footer-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#">Impacto</a></li>
                <li><a href="#">Unirse</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h3>Únete a la Causa</h3>
            <p>Tu aporte hace la diferencia.</p>
            <a href="#" class="btn-donar">Donar</a>
        </div>
	`;

	// Insertar header y footer
	const headerContainer = document.querySelector('header');
	const footerContainer = document.querySelector('footer');
	if (headerContainer) headerContainer.innerHTML = headerHTML;
	if (footerContainer) footerContainer.innerHTML = footerHTML;

	// Funcionalidad del menú móvil
	const menuBtn = document.getElementById('menu-btn');
	const mobileMenu = document.querySelector('.nav-mobile');
	if (menuBtn && mobileMenu) {
		menuBtn.addEventListener('click', () => {
			mobileMenu.classList.toggle('menu-open');
		});
	}

	// Slideshow
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