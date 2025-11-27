document.addEventListener('DOMContentLoaded', () => {

    insertHeader();
    insertFooter();
    mobileMenu();
	startSlideshow();
    contactForm();
    calculateImpact();
    changeTheme();

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
                    <li>
                        <button id="theme-switch">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>
                        </button>
                    </li>
                    <li><a href="index.html">INICIO</a></li>
                    <li><a href="nosotros.html">NOSOTROS</a></li>
                    <li><a href="proyectos.html">PROYECTOS</a></li>
                    <li><a href="impacto.html">IMPACTO</a></li>
                    <li><a href="unirse.html">UNIRSE</a></li>
                    <li><a href="contacto.html">CONTACTO</a></li>
                    <li><a href="donar.html" class="btn-donar">Donar</a></li>
                </ul>
            </nav>

            <button id="theme-switch-mobile">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>
            </button>

            <button id="menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        
        <nav class="nav-mobile">
            <a href="index.html">INICIO</a>
            <a href="nosotros.html">NOSOTROS</a>
            <a href="proyectos.html">PROYECTOS</a>
            <a href="impacto.html">IMPACTO</a>
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
            <h3>Nuestras Redes</h3>
            <div class="social-links">
                <a href="https://facebook.com" target="_blank"><img src="images/facebook-icon.svg">Facebook</a>
                <a href="https://x.com" target="_blank"><img src="images/twitter-icon.svg">Twitter</a>
                <a href="https://instagram.com" target="_blank"><img src="images/instagram-icon.svg">Instagram</a>
            </div>
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


function calculateImpact() {
    // Valores de impacto por marca
    const impactValues = {
        milka: 2.5,       // horas por barra
        kitkat: 3,
        snickers: 2,
        hershey: 4,
        tony: 0         // chocolate ético: impacto nulo
    };

    const amountInput = document.querySelector(".calculator input");
    const brandSelect = document.querySelector(".calculator select");
    const impactP = document.querySelector(".impact-number");

    // Calcular y actualizar UI
    function updateImpact() {
        const amount = amountInput.value;
        const brand = brandSelect.value;
        const hoursPerBar = impactValues[brand];

        const totalHours = amount * hoursPerBar;

        impactP.innerText = totalHours.toFixed(1);

        if (brand === "tony") {
            impactP.classList.add("no-impact");
        }
        else {
            impactP.classList.remove("no-impact");
        }
    }

    // Eventos para calcular impacto en tiempo real
    if (amountInput && brandSelect && impactP) {
        amountInput.addEventListener("input", updateImpact);
        brandSelect.addEventListener("change", updateImpact);
    }
};

function changeTheme() {
    let darkmode = localStorage.getItem('darkmode');
    if (darkmode === 'enabled') {
        document.body.classList.add('dark');
        localStorage.setItem('darkmode', 'enabled');
    }

    const themeSwitchBtn = document.getElementById('theme-switch');
    const themeSwitchBtnMobile = document.getElementById('theme-switch-mobile');

    if (themeSwitchBtn) {
        themeSwitchBtn.addEventListener('click', () => {
            darkmode = localStorage.getItem('darkmode');
            if (darkmode !== 'enabled') {
                document.body.classList.add('dark');
                localStorage.setItem('darkmode', 'enabled');
            }
            else {
                document.body.classList.remove('dark');
                localStorage.setItem('darkmode', null);
            }
        });
    }

    if (themeSwitchBtnMobile) {
        themeSwitchBtnMobile.addEventListener('click', () => {
            darkmode = localStorage.getItem('darkmode');
            if (darkmode !== 'enabled') {
                document.body.classList.add('dark');
                localStorage.setItem('darkmode', 'enabled');
            }
            else {
                document.body.classList.remove('dark');
                localStorage.setItem('darkmode', null);
            }
        });
    }
}