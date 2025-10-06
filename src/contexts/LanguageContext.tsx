import React, { createContext, useContext, useState, useMemo } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.education': 'Education',
        'nav.projects': 'Projects',
        'nav.recommendations': 'Recommendations',
        'nav.contact': 'Contact',

        'hero.greeting': 'Hello, I\'m',
        'hero.title': 'Full Stack Developer',
        'hero.subtitle': 'Building scalable and secure applications with modern web technologies',
        'hero.cta': 'Get in Touch',
        'hero.scroll': 'Scroll to explore',

        'about.title': 'About Me',
        'about.description': 'I’m a full-stack developer with 3+ years of experience building production-ready applications. Skilled in TypeScript, React, Next.js, Node.js, NestJS, and Spring Boot. I focus on modular architecture, automated testing (Jest, TDD, Cucumber), and delivering secure, scalable solutions.',
        'about.skills': 'Skills',
        'about.experience': 'Years of Experience',
        'about.projects': 'Projects Completed',
        'about.team': 'Team Projects',
        'about.certs': 'Certifications',

        'education.title': 'Education & Certifications',
        'education.degree1': 'Systems Analyst',
        'education.degree2': 'Information Systems Engineering (In Progress)',
        'education.university': 'National Technological University, Entre Ríos, Argentina',
        'education.period1': '2020 – 2023',
        'education.period2': '2020 – Present',
        'education.location': 'Entre Ríos, Argentina',
        'education.desc1': 'Intermediate degree of the Information Systems Engineering program.',
        'education.desc2': 'Undergraduate degree focused on software development, system architecture, databases, security, and project management.',

        'education.certifications': 'Certifications',
        'certifications.educacionIT': 'EducacionIT',
        'certifications.springBoot.title': 'Java Spring Boot',
        'certifications.springBoot.issued': 'Issued: Aug 2025',
        'certifications.springBoot.desc': 'Skills: Java · Spring Boot · JPA · Spring Framework',

        'certifications.javaBackend.title': 'Java Backend',
        'certifications.javaBackend.issued': 'Issued: Jul 2025',
        'certifications.javaBackend.desc': 'Skills: Java · Spring Framework · Spring Security · Spring Boot',

        'certifications.java18.title' : 'Java Standard 18 Web Programming',
        'certifications.java18.issued': "Issued: May 2025",
        'certifications.java18.desc': 'Skills: Java · Tomcat · JPA · MySQL · JSP',
        'certifications.educative': 'Educative',
        'certifications.redux.title': 'Practical Redux',
        'certifications.redux.issued': 'Issued: Jul 2024',
        'certifications.redux.desc': 'Skills: React · Redux',

        'certifications.app-testing.title': 'React App Testing',
        'certifications.app-testing.issued': 'Issued: Jul 2024',
        'certifications.app-testing.desc': 'Skills: Jest · React Testing Library',

        'certifications.react.title': 'React for Front-End Developers',
        'certifications.react.issued': 'Issued: Nov 2022',
        'certifications.react.desc': 'Skills: JavaScript · React.js',
        'certifications.utn': 'UTN - e-Learning Center FRBA',
        'certifications.testing-master.title': 'Professional Testing Master',
        'certifications.testing-master.issued': 'Issued: Apr 2024',
        'certifications.testing-master.desc': 'Skills: Jest · Unit Testing',

        'certifications.nodejs.title': 'NodeJS Development',
        'certifications.nodejs.issued': 'Issued: Sep 2023',
        'certifications.nodejs.desc': 'Skills: JavaScript · TypeScript · Node.js',

        'certifications.angular.title': 'AngularJS Development',
        'certifications.angular.issued': 'Issued: Aug 2023',
        'certifications.angular.desc': 'Skills: AngularJS',


        'projects.title': 'Featured Projects',
        'projects.view': 'View Project',
        'projects.code': 'View Code',
        'projects.tech': 'Technologies',

        'recommendations.title': 'LinkedIn Recommendations',
        'recommendations.viewAll': 'View All Recommendations',

        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Let\'s work together on your next project',
        'contact.name': 'Your Name',
        'contact.email': 'Your Email',
        'contact.message': 'Your Message',
        'contact.send': 'Send Message',
        'contact.sent': 'Message sent successfully!',
        'contact.namePlaceholder': 'Your full name',
        'contact.emailPlaceholder': 'your.email@example.com',
        'contact.messagePlaceholder': 'Tell me about your project or just say hello!',

        'footer.rights': 'All rights reserved.',
        'footer.built': 'Built with React & TypeScript',
        'footer.description': 'Full Stack Developer passionate about creating innovative digital solutions.',
        'footer.quickLinks': 'Quick Links',
        'footer.contactInfo': 'Contact Info',
        'footer.backToTop': 'Back to Top',

        'education.continuousLearning': 'Continuous Learning',
        'education.continuousLearningDesc': 'Always staying updated with the latest technologies and best practices in software development.',
        'projects.notifications.description': 'API for sending notifications (mail + telegram).',
        'projects.portfolio.description': 'Personal portfolio developed with React and TypeScript, including fluid animations, dark mode, internationalization and responsive design.',
        'projects.funciones.description': 'Utility package with common functions for parsing, dates, strings, arrays and React hooks.',
        'projects.baires.description': 'Accommodation application with Next.js and Tailwind frontend, Nest and MongoDB backend, Firebase login and Leaflet maps.',
        'projects.crud.description': 'Complete CRUD application of people developed with Java, Servlets and JSP. Includes layer separation, centralized logger and MySQL connection.',
        'projects.geolocation.description': 'Real-time geolocation application using Leaflet. Designed for vehicle tracking with interactive maps.',
        'projects.taller.description': 'Workshop invitation form with validation, WhatsApp integration and email sending. Developed with Material-UI.',
        'projects.chuck.description': 'Application that consumes the Chuck Norris API to show random jokes. One of my first projects with React and TypeScript.',
        'recommendations.connectLinkedIn': 'Connect with me on LinkedIn',
        'recommendations.connectDescription': 'View all my recommendations and connect with me to discuss potential opportunities or collaborations.',
        'contact.getInTouch': 'Get in Touch',
        'contact.location': 'Location',
        'contact.letsWorkTogether': 'Let\'s Work Together',
        'contact.opportunitiesText': 'I\'m always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Mí',
        'nav.education': 'Educación',
        'nav.projects': 'Proyectos',
        'nav.recommendations': 'Recomendaciones',
        'nav.contact': 'Contacto',

        'hero.greeting': 'Hola, soy',
        'hero.title': 'Desarrollador Full Stack',
        'hero.subtitle': 'Creando aplicaciones seguras y escalables con tecnologías web modernas',
        'hero.cta': 'Contactar',
        'hero.scroll': 'Desplázate para explorar',

        'about.title': 'Sobre Mí',
        'about.description': 'Soy un desarrollador full-stack con más de 3 años de experiencia construyendo aplicaciones en producción. Manejo TypeScript, React, Next.js, Node.js, NestJS y Spring Boot. Me especializo en arquitectura modular, testing automatizado (Jest, TDD, Cucumber) y en entregar soluciones seguras y escalables.',
        'about.skills': 'Habilidades',
        'about.experience': 'Años de Experiencia',
        'about.projects': 'Proyectos Completados',
        'about.team': 'Proyectos en Equipo',
        'about.certs': 'Certificaciones',

        'education.title': 'Educación y Certificaciones',
        'education.degree1': 'Analista de Sistemas',
        'education.degree2': 'Ingeniería en Sistemas de Información (En curso)',
        'education.university': 'Universidad Tecnológica Nacional, Entre Ríos, Argentina',
        'education.period1': '2020 – 2023',
        'education.period2': '2020 – Presente',
        'education.location': 'Entre Ríos, Argentina',
        'education.desc1': 'Título intermedio de la carrera de Ingeniería en Sistemas de Información.',
        'education.desc2': 'Carrera de grado orientada al desarrollo de software, arquitectura de sistemas, bases de datos, seguridad y gestión de proyectos.',

        'education.certifications': 'Certificaciones',
        'certifications.educacionIT': 'EducacionIT',
        'certifications.springBoot.title': 'Java Spring Boot',
        'certifications.springBoot.issued': 'Expedición: ago. 2025',
        'certifications.springBoot.desc': 'Aptitudes: Java · Spring Boot · JPA · Spring Framework',

        'certifications.javaBackend.title': 'Java Backend',
        'certifications.javaBackend.issued': 'Expedición: jul. 2025',
        'certifications.javaBackend.desc': 'Aptitudes: Java · Spring Framework · Spring Security · Spring Boot',

        'certifications.java18.title' : 'Java Standard 18 Web Programming',
        'certifications.java18.issued': "Expedición: may. 2025",
        'certifications.java18.desc': 'Aptitudes: Java · Tomcat · JPA · MySQL · JSP',
        'certifications.educative': 'Educative',
        'certifications.redux.title': 'Practical Redux',
        'certifications.redux.issued': 'Expedición: jul. 2024',
        'certifications.redux.desc': 'Aptitudes: React, Redux',

        'certifications.app-testing.title': 'React App Testing',
        'certifications.app-testing.issued': 'Expedición: jul. 2024',
        'certifications.app-testing.desc': 'Aptitudes: Jest, React Testing App',

        'certifications.react.title': 'React for Front-End Developers',
        'certifications.react.issued': 'Expedición: nov. 2022',
        'certifications.react.desc': 'Aptitudes: JavaScript · React.js',
        'certifications.utn': 'UTN - Centro de e-Learning FRBA',
        'certifications.testing-master.title': 'Professional Testing Master',
        'certifications.testing-master.issued': 'Expedición abr. 2024',
        'certifications.testing-master.desc': 'Aptitudes: Jest · Test unitarios',

        'certifications.nodejs.title': 'Desarrollo con NodeJS',
        'certifications.nodejs.issued': 'Expedición sept. 2023',
        'certifications.nodejs.desc': 'Aptitudes: JavaScript, TypeScript, Node.js',

        'certifications.angular.title': 'Desarrollo en AngularJS',
        'certifications.angular.issued': 'Expedición ago. 2023',
        'certifications.angular.desc': 'Aptitudes: AngularJS',

        'projects.title': 'Proyectos Destacados',
        'projects.view': 'Ver Proyecto',
        'projects.code': 'Ver Código',
        'projects.tech': 'Tecnologías',

        'recommendations.title': 'Recomendaciones de LinkedIn',
        'recommendations.viewAll': 'Ver Todas las Recomendaciones',

        'contact.title': 'Ponte en Contacto',
        'contact.subtitle': 'Trabajemos juntos en tu próximo proyecto',
        'contact.name': 'Tu Nombre',
        'contact.email': 'Tu Email',
        'contact.message': 'Tu Mensaje',
        'contact.send': 'Enviar Mensaje',
        'contact.sent': '¡Mensaje enviado exitosamente!',
        'contact.namePlaceholder': 'Tu nombre completo',
        'contact.emailPlaceholder': 'tu.email@ejemplo.com',
        'contact.messagePlaceholder': '¡Cuéntame sobre tu proyecto o simplemente saluda!',

        'footer.rights': 'Todos los derechos reservados.',
        'footer.built': 'Desarrollado con React & TypeScript',
        'footer.description': 'Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras.',
        'footer.quickLinks': 'Enlaces Rápidos',
        'footer.contactInfo': 'Información de Contacto',
        'footer.backToTop': 'Volver Arriba',

        'education.continuousLearning': 'Aprendizaje Continuo',
        'education.continuousLearningDesc': 'Siempre manteniéndome actualizado con las últimas tecnologías y mejores prácticas en desarrollo de software.',
        'projects.notifications.description': 'API para envío de notificaciones (mail + telegram).',
        'projects.portfolio.description': 'Portfolio personal desarrollado con React y TypeScript, incluyendo animaciones fluidas, modo oscuro, internacionalización y diseño responsive.',
        'projects.funciones.description': 'Paquete de utilidades con funciones comunes para parseo, fechas, strings, arrays y hooks de React.',
        'projects.baires.description': 'Aplicación de hospedajes con frontend en Next.js y Tailwind, backend con Nest y MongoDB, login con Firebase y mapas con Leaflet.',
        'projects.crud.description': 'Aplicación CRUD completa de personas desarrollada con Java, Servlets y JSP. Incluye separación en capas, logger centralizado y conexión a MySQL.',
        'projects.geolocation.description': 'Aplicación de geolocalización en tiempo real usando Leaflet. Diseñada para tracking de vehículos con mapas interactivos.',
        'projects.taller.description': 'Formulario de invitación para taller con validación, integración a WhatsApp y envío de emails. Desarrollado con Material-UI.',
        'projects.chuck.description': 'Aplicación que consume la API de Chuck Norris para mostrar chistes aleatorios. Uno de mis primeros proyectos con React y TypeScript.',
        'recommendations.connectLinkedIn': 'Conéctate conmigo en LinkedIn',
        'recommendations.connectDescription': 'Ve todas mis recomendaciones y conéctate conmigo para discutir oportunidades potenciales o colaboraciones.',
        'contact.getInTouch': 'Ponte en Contacto',
        'contact.location': 'Ubicación',
        'contact.letsWorkTogether': 'Trabajemos Juntos',
        'contact.opportunitiesText': 'Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. Ya sea que tengas una pregunta, quieras colaborar, o simplemente quieras saludar, ¡no dudes en contactarme!'
    }
};



interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = useMemo(() => ({ language, toggleLanguage, t }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
