import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      es: {
        translations: {
          "Bienvenido a React": "Bienvenido a React y react-i18next",
          Probando: "Estoy probando esta extension",
          welcome: "Hola <br/> <strong>Mundo</strong>",
          inicio: "Inicio",
          sobreMi: "Sobre mi",
          proyectos: "Proyectos",
          contactos: "Contactos",
          configuracion: "Configuracion",
          frontEndDeveloper: "Desarrollador Frontend",
          descripcionMia:
            "Soy Técnico en Informática profesional y personal en programación, actualmente estoy trabajando en Bewise, tengo 19 años, me apasiona el desarrollo web y con muchas ganas de seguir aprendiendo nuevos conocimientos en este mundo de la tecnologia.",
          cursos: "Cursos",
          tecnologiasQueManejo: "Tecnologias que manejo",
          contacto: "Contacto",
          descargarCV: "Descargar CV",
          paraArriba: "Para arriba",
        },
      },
      en: {
        translations: {
          "Bienvenido a React": "Welcome to React and react-i18next",
          Probando: "I am testing this extension",
          welcome: "Hello <br/> <strong>World</strong>",
          inicio: "Home",
          sobreMi: "About me",
          proyectos: "Projects",
          contactos: "Contacts",
          configuracion: "Configuration",
          frontEndDeveloper: "Frontend Developer",
          descripcionMia:
            "I am Professional Computer Technician and programming staff, currently working in Bewise, I have 19 years, I am passionate about web development and with many goals to learn new skills in this world of technology.",
          cursos: "Courses",
          tecnologiasQueManejo: "Technologies I use",
          contacto: "Contact",
          descargarCV: "Download CV",
          paraArriba: "Go up",
        },
      },
      it: {
        translations: {
          "Bienvenido a React": "Welcome to React and react-i18next",
          Probando: "Sto testando questa estensione",
          welcome: "Ciao <br/> <strong>Mondo</strong>",
          inicio: "Inizio",
          sobreMi: "Della mia",
          proyectos: "Progetti",
          contactos: "Contatti",
          configuracion: "Collocamento",
          frontEndDeveloper: "Sviluppatore Front End",
          descripcionMia:
            "Sono Tecnico Informatico professionale e personale di programmazione, attualmente lavoro in Bewise, ho 19 anni, sono appassionata di sviluppo web e desiderosa di continuare ad apprendere nuove conoscenze in questo mondo della tecnologia.",
          cursos: "Corsi",
          tecnologiasQueManejo: "Tecnologie che utilizzo",
          contacto: "Contatto",
          descargarCV: "scarica curriculum",
          paraArriba: "in alto",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
