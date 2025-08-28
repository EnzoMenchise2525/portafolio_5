'use strict';

// ...existing code...

/**
 * Traducción dinámica de navbar y hero
 */
const langSelect = document.getElementById('lang');
langSelect.addEventListener('change', function () {
  const lang = this.value;

  // Navbar links
  const navLinks = {
    home: document.querySelector('.navbar-link[href="#home"]'),
    about: document.querySelector('.navbar-link[href="#about"]'),
    skills: document.querySelector('.navbar-link[href="#skills"]'),
    portfolio: document.querySelector('.navbar-link[href="#portfolio"]'),
    contact: document.querySelector('.navbar-link[href="#contact"]')
  };

  // Hero section
  const heroTitle = document.querySelector('.hero-title');
  const heroBtn = document.querySelector('.btn-primary');

  // Stats section
  const statsTitles = document.querySelectorAll('.stats-card .card-title');
  const statsStrong = document.querySelectorAll('.stats-card .card-title strong');

  // About section
  const aboutSubtitle = document.querySelector('.about-content .section-subtitle');
  const aboutTitle = document.querySelector('.about-content .section-title');
  const aboutText = document.querySelector('.about-content .section-text');
  const hireBtn = document.querySelector('.btn-group .btn-secondary');
  const downloadBtn = document.querySelector('.btn-group .btn-primary');

  // Skills section
  const skillsSubtitle = document.querySelector('.skills-content .section-subtitle');
  const skillsTitle = document.querySelector('.skills-content .section-title');
  const skillsText = document.querySelector('.skills-content .section-text');
  const skillsBtn = document.querySelector('.skills-toggle .toggle-btn.active');
  const toolsBtn = document.querySelector('.skills-toggle .toggle-btn:not(.active)');

  // Projects section
  const projectSubtitle = document.querySelector('.project-content .section-subtitle');
  const projectTitle = document.querySelector('.project-content .section-title');
  const projectText = document.querySelector('.project-content .section-text');
  const loadMoreBtn = document.querySelector('.load-more');

  // Contact section
  const contactSubtitle = document.querySelector('.contact-content .section-subtitle');
  const contactTitle = document.querySelector('.contact-content .section-title');
  const contactText = document.querySelector('.contact-content .section-text');
  const sendBtn = document.querySelector('.contact-form .btn-primary');
  const nameLabel = document.querySelector('label[for="name"]');
  const emailLabel = document.querySelector('label[for="email"]');
  const phoneLabel = document.querySelector('label[for="phone"]');
  const messageLabel = document.querySelector('label[for="message"]');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');

  if (lang === 'es') {
    // Navbar
    if (navLinks.home) navLinks.home.textContent = 'Inicio.';
    if (navLinks.about) navLinks.about.textContent = 'Sobre mí.';
    if (navLinks.skills) navLinks.skills.textContent = 'Habilidades.';
    if (navLinks.portfolio) navLinks.portfolio.textContent = 'Portafolio.';
    if (navLinks.contact) navLinks.contact.textContent = 'Contacto.';

    // Hero
    if (heroTitle) heroTitle.textContent = 'Diseñamos y construimos productos creativos';
    if (heroBtn) heroBtn.textContent = 'Contáctame';

    // Stats
    if (statsTitles[0]) statsTitles[0].childNodes[0].textContent = '12+ ';
    if (statsStrong[0]) statsStrong[0].textContent = 'Años de experiencia';
    if (statsTitles[1]) statsTitles[1].childNodes[0].textContent = '230+ ';
    if (statsStrong[1]) statsStrong[1].textContent = 'Proyectos completados';
    if (statsTitles[2]) statsTitles[2].childNodes[0].textContent = '95+ ';
    if (statsStrong[2]) statsStrong[2].textContent = 'Clientes felices';

    // About
    if (aboutSubtitle) aboutSubtitle.textContent = 'Sobre mí';
    if (aboutTitle) aboutTitle.textContent = '¿Necesitas un producto creativo? ¡Te puedo ayudar!';
    if (aboutText) aboutText.textContent = '¡Hola! Soy Jack Reacher, desarrollador apasionado por crear aplicaciones web limpias e intuitivas. Disfruto convertir ideas en realidad usando soluciones creativas y trabajando en equipo.';
    if (hireBtn) hireBtn.textContent = 'Contrátame';
    if (downloadBtn) downloadBtn.textContent = 'Descargar CV';

    // Skills
    if (skillsSubtitle) skillsSubtitle.textContent = 'Mis habilidades';
    if (skillsTitle) skillsTitle.textContent = '¿Qué habilidades de programación tengo?';
    if (skillsText) skillsText.textContent = 'Desarrollo interfaces simples, intuitivas y responsivas que ayudan a los usuarios a lograr sus objetivos con menos esfuerzo y tiempo usando estas tecnologías.';
    if (skillsBtn) skillsBtn.textContent = 'Skills';
    if (toolsBtn) toolsBtn.textContent = 'Tools';

    // Projects
    if (projectSubtitle) projectSubtitle.textContent = 'Mis trabajos';
    if (projectTitle) projectTitle.textContent = '¡Mira mis trabajos que te sorprenderán!';
    if (projectText) projectText.textContent = 'Desarrollamos sitios web de la mejor calidad para el largo plazo. Interfaces limpias, fáciles y elegantes que ayudan a cualquier cliente no técnico.';
    if (loadMoreBtn) loadMoreBtn.textContent = 'Ver más trabajos';

    // Contact
    if (contactSubtitle) contactSubtitle.textContent = 'Contacto';
    if (contactTitle) contactTitle.textContent = '¿Tienes algún proyecto? Por favor, envía un mensaje';
    if (contactText) contactText.textContent = 'Contáctame y dime cómo puedo ayudarte. Completa el formulario y te responderé lo antes posible.';
    if (sendBtn) sendBtn.textContent = 'Enviar';
    if (nameLabel) nameLabel.textContent = 'Nombre';
    if (emailLabel) emailLabel.textContent = 'Correo';
    if (phoneLabel) phoneLabel.textContent = 'Teléfono';
    if (messageLabel) messageLabel.textContent = 'Mensaje';
    if (nameInput) nameInput.placeholder = 'Ejemplo: Juan Pérez';
    if (emailInput) emailInput.placeholder = 'Ejemplo: juanperez@mail.com';
    if (phoneInput) phoneInput.placeholder = 'Número de teléfono';
    if (messageInput) messageInput.placeholder = 'Escribe tu mensaje...';

  } else if (lang === 'en') {
    // Navbar
    if (navLinks.home) navLinks.home.textContent = 'Home.';
    if (navLinks.about) navLinks.about.textContent = 'About.';
    if (navLinks.skills) navLinks.skills.textContent = 'Skills.';
    if (navLinks.portfolio) navLinks.portfolio.textContent = 'Portfolio.';
    if (navLinks.contact) navLinks.contact.textContent = 'Contact.';

    // Hero
    if (heroTitle) heroTitle.textContent = 'We Design & Build Creative Products';
    if (heroBtn) heroBtn.textContent = 'Get in touch';

    // Stats
    if (statsTitles[0]) statsTitles[0].childNodes[0].textContent = '12+ ';
    if (statsStrong[0]) statsStrong[0].textContent = 'Years of Experience';
    if (statsTitles[1]) statsTitles[1].childNodes[0].textContent = '230+ ';
    if (statsStrong[1]) statsStrong[1].textContent = 'Completed Projects';
    if (statsTitles[2]) statsTitles[2].childNodes[0].textContent = '95+ ';
    if (statsStrong[2]) statsStrong[2].textContent = 'Happy Clients';

    // About
    if (aboutSubtitle) aboutSubtitle.textContent = 'About me';
    if (aboutTitle) aboutTitle.textContent = 'Need a Creative Product? I can Help You!';
    if (aboutText) aboutText.textContent = 'Hi! I’m Jack Reacher, and I’m a developer who has passion for building clean web applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions and working with teams.';
    if (hireBtn) hireBtn.textContent = 'Hire me';
    if (downloadBtn) downloadBtn.textContent = 'Download cv';

    // Skills
    if (skillsSubtitle) skillsSubtitle.textContent = 'My skills';
    if (skillsTitle) skillsTitle.textContent = 'What My Programming Skills Included?';
    if (skillsText) skillsText.textContent = 'I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.';
    if (skillsBtn) skillsBtn.textContent = 'Skills';
    if (toolsBtn) toolsBtn.textContent = 'Tools';

    // Projects
    if (projectSubtitle) projectSubtitle.textContent = 'My Works';
    if (projectTitle) projectTitle.textContent = 'See My Works Which Will Amaze You!';
    if (projectText) projectText.textContent = 'We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.';
    if (loadMoreBtn) loadMoreBtn.textContent = 'Load more work';

    // Contact
    if (contactSubtitle) contactSubtitle.textContent = 'Contact';
    if (contactTitle) contactTitle.textContent = 'Have You Any Project? Please Drop a Message';
    if (contactText) contactText.textContent = 'Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.';
    if (sendBtn) sendBtn.textContent = 'Send';
    if (nameLabel) nameLabel.textContent = 'Name';
    if (emailLabel) emailLabel.textContent = 'Email';
    if (phoneLabel) phoneLabel.textContent = 'Phone';
    if (messageLabel) messageLabel.textContent = 'Message';
    if (nameInput) nameInput.placeholder = 'e.g John Doe';
    if (emailInput) emailInput.placeholder = 'e.g johndoe@mail.com';
    if (phoneInput) phoneInput.placeholder = 'Phone Number';
    if (messageInput) messageInput.placeholder = 'Write message...';
  }
});



const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}