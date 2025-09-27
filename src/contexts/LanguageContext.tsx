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
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.education': 'Education',
        'nav.projects': 'Projects',
        'nav.recommendations': 'Recommendations',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': 'Hello, I\'m',
        'hero.title': 'Full Stack Developer',
        'hero.subtitle': 'Building scalable and secure applications with modern web technologies',
        'hero.cta': 'Get in Touch',
        'hero.scroll': 'Scroll to explore',

        // About Section
        'about.title': 'About Me',
        'about.description': 'I’m a full-stack developer with 3+ years of experience building production-ready applications. Skilled in TypeScript, React, Next.js, Node.js, NestJS, and Spring Boot. I focus on modular architecture, automated testing (Jest, TDD, Cucumber), and delivering secure, scalable solutions.',
        'about.skills': 'Skills',
        'about.experience': 'Years of Experience',
        'about.projects': 'Projects Completed',
        'about.team': 'Team Projects',
        'about.certs': 'Certifications',

        // Education Section
        'education.title': 'Education & Certifications',
        'education.degree1': 'Systems Analyst',
        'education.degree2': 'Information Systems Engineering (In Progress)',
        'education.university': 'National Technological University, Entre Ríos, Argentina',
        'education.period1': '2020 – 2023',
        'education.period2': '2020 – Present',
        'education.location': 'Entre Ríos, Argentina',
        'education.desc1': 'Intermediate degree of the Information Systems Engineering program.',
        'education.desc2': 'Undergraduate degree focused on software development, system architecture, databases, security, and project management.',

        // Certifications
        'education.certifications': 'Certifications',
        // EducacionIT
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
        // Educative
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
        // UTN
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



        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.view': 'View Project',
        'projects.code': 'View Code',
        'projects.tech': 'Technologies',

        // Recommendations Section
        'recommendations.title': 'LinkedIn Recommendations',
        'recommendations.viewAll': 'View All Recommendations',

        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Let\'s work together on your next project',
        'contact.name': 'Your Name',
        'contact.email': 'Your Email',
        'contact.message': 'Your Message',
        'contact.send': 'Send Message',
        'contact.sent': 'Message sent successfully!',

        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.built': 'Built with React & TypeScript'
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Mí',
        'nav.education': 'Educación',
        'nav.projects': 'Proyectos',
        'nav.recommendations': 'Recomendaciones',
        'nav.contact': 'Contacto',

        // Hero Section
        'hero.greeting': 'Hola, soy',
        'hero.title': 'Desarrollador Full Stack',
        'hero.subtitle': 'Creando aplicaciones seguras y escalables con tecnologías web modernas',
        'hero.cta': 'Contactar',
        'hero.scroll': 'Desplázate para explorar',

        // About Section
        'about.title': 'Sobre Mí',
        'about.description': 'Soy un desarrollador full-stack con más de 3 años de experiencia construyendo aplicaciones en producción. Manejo TypeScript, React, Next.js, Node.js, NestJS y Spring Boot. Me especializo en arquitectura modular, testing automatizado (Jest, TDD, Cucumber) y en entregar soluciones seguras y escalables.',
        'about.skills': 'Habilidades',
        'about.experience': 'Años de Experiencia',
        'about.projects': 'Proyectos Completados',
        'about.team': 'Proyectos en Equipo',
        'about.certs': 'Certificaciones',

        // Education Section
        'education.title': 'Educación y Certificaciones',
        'education.degree1': 'Analista de Sistemas',
        'education.degree2': 'Ingeniería en Sistemas de Información (En curso)',
        'education.university': 'Universidad Tecnológica Nacional, Entre Ríos, Argentina',
        'education.period1': '2020 – 2023',
        'education.period2': '2020 – Presente',
        'education.location': 'Entre Ríos, Argentina',
        'education.desc1': 'Título intermedio de la carrera de Ingeniería en Sistemas de Información.',
        'education.desc2': 'Carrera de grado orientada al desarrollo de software, arquitectura de sistemas, bases de datos, seguridad y gestión de proyectos.',

        // Certifications
        'education.certifications': 'Certificaciones',
        //EducacionIT
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
        // Educative
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
        //UTN
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

        // Projects Section
        'projects.title': 'Proyectos Destacados',
        'projects.view': 'Ver Proyecto',
        'projects.code': 'Ver Código',
        'projects.tech': 'Tecnologías',

        // Recommendations Section
        'recommendations.title': 'Recomendaciones de LinkedIn',
        'recommendations.viewAll': 'Ver Todas las Recomendaciones',

        // Contact Section
        'contact.title': 'Ponte en Contacto',
        'contact.subtitle': 'Trabajemos juntos en tu próximo proyecto',
        'contact.name': 'Tu Nombre',
        'contact.email': 'Tu Email',
        'contact.message': 'Tu Mensaje',
        'contact.send': 'Enviar Mensaje',
        'contact.sent': '¡Mensaje enviado exitosamente!',

        // Footer
        'footer.rights': 'Todos los derechos reservados.',
        'footer.built': 'Desarrollado con React & TypeScript'
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
