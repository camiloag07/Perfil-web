/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */

/* ------------------------------------------------------------
   1. SPANISH TEXTS
  ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Estudiante de Programación Web",

  "about.title":         "Sobre Mí",
  "about.text":          "Soy estudiante de Ingeniería de Sistemas y actualmente me encuentro cursando el nivel técnico de mi formación. Me interesa el mundo de la tecnología y disfruto aprender cosas nuevas que me permitan seguir desarrollando mis conocimientos y habilidades.\n\nMe considero una persona tranquila, curiosa y con disposición para aprender. Me gusta enfrentar nuevos retos y adquirir experiencia tanto en el ámbito académico como personal. Además de la tecnología, soy un amante del deporte, especialmente del fútbol, una actividad que forma parte importante de mis intereses y mi tiempo libre.\n\nMi objetivo es continuar fortaleciendo mis conocimientos en el área de sistemas y aprovechar cada experiencia como una oportunidad para crecer y prepararme para mi futuro profesional.",
  "about.infoTitle":     "Información",
  "about.labelLocation": "Ubicación",
  "about.valueLocation": "El Espinal, Colombia",
  "about.labelEmail":    "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (A2)",
  "about.labelStatus":   "Disponibilidad",
  "about.valueStatus":   "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "DEPORTE",
  "interest.3": "APRENDIZAJE",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web (En curso)",
  "edu.1.text":  "Estudiante de programación web apasionado por el desarrollo en Visual Studio Code, con bases en JavaScript, PHP, redes y hardware, enfocado en seguir fortaleciendo sus conocimientos y habilidades técnicas cada día.",
  "edu.2.title": "Cisco Packet Tracer Course",
  "edu.2.text":  "Aprendí simulación básica de redes, configuración y resolución de problemas de conectividad.",

  "exp.1.title": "Frontend Web Project",
  "exp.1.text":  "Creé una página web adaptable usando HTML5, CSS3 y JavaScript garantizando compatibilidad.",
  "exp.2.title": "Database Design Assistant",
  "exp.2.text":  "Diseñé esquemas relacionales y probé consultas SQL para optimizar la recuperación de datos.",

  "portfolio.title": "Proyectos",
  "project.1.title": "App Móvil en App Inventor",
  "project.1.text": "MIT App Inventor, Programación por Bloques",
  "project.2.title": "Landing Page Template",
  "project.2.text":  "HTML, Flexbox, CSS",
  "project.3.title": "Interactive JavaScript App",
  "project.3.text":  "JavaScript, DOM Manipulation",

  "contact.title":         "Contacto",
  "contact.intro":         "No dudes en contactarme a través de mis canales profesionales para colaboraciones u oportunidades.",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "Perfil Profesional",

  "footer.note": "Camilo Angulo · Estudiante de Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS
  ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Development Student",

  "about.title":         "About Me",
  "about.text":          "I am a Systems Engineering student currently pursuing the technical level of my education. I am passionate about technology and enjoy learning new things to continuously build my knowledge and skills.\n\nI consider myself a calm, curious person eager to learn. I like facing new challenges and gaining experience both academically and personally. Besides technology, I am a sports lover, especially soccer.\n\nMy goal is to continue strengthening my systems knowledge and take advantage of every experience to grow and prepare for my professional future.",
  "about.infoTitle":     "Information",
  "about.labelLocation": "Location",
  "about.valueLocation": "El Espinal, Colombia",
  "about.labelEmail":    "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (A2)",
  "about.labelStatus":   "Availability",
  "about.valueStatus":   "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SPORT",
  "interest.3": "LEARNING",
  "interest.4": "GAMES",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and Experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Web Programming Professional Technician (Ongoing)",
  "edu.1.text":  "Web development student passionate about coding in Visual Studio Code, with foundations in JavaScript, PHP, networking, and hardware, focused on strengthening technical skills every day.",
  "edu.2.title": "Cisco Packet Tracer Course",
  "edu.2.text":  "Learned basic network simulation, configuration, and connectivity troubleshooting.",

  "exp.1.title": "Frontend Web Project",
  "exp.1.text":  "Built a responsive web page using HTML5, CSS3, and JavaScript, ensuring cross-device compatibility.",
  "exp.2.title": "Database Design Assistant",
  "exp.2.text":  "Designed relational schemas and tested SQL queries to optimize data retrieval processes.",

  "portfolio.title": "Projects",
  "project.1.title": "Mobile App in App Inventor",
  "project.1.text": "MIT App Inventor, Block-based Coding",
  "project.2.title": "Landing Page Template",
  "project.2.text":  "HTML, Flexbox, CSS",
  "project.3.title": "Interactive JavaScript App",
  "project.3.text":  "JavaScript, DOM Manipulation",

  "contact.title":         "Contact",
  "contact.intro":         "Feel free to reach out to me through my professional channels for collaborations or opportunities.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "Professional Profile",

  "footer.note": "Camilo Angulo · Web Development Student · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
  ------------------------------------------------------------ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
  ------------------------------------------------------------ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS
  ------------------------------------------------------------ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
  ------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
