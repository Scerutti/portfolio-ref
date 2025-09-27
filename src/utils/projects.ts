import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 'project-1',
        title: 'Notifications',
        description: 'API para envío de notificaciones (mail + telegram).',
        image: 'https://res.cloudinary.com/dhvbp84vj/image/upload/v1758912681/notification_api_wp8n6n.png',
        technologies: ['Docker', 'Docker Compose', 'MongoDB', 'NestJS', 'TypeScript', 'Mongoose', 'Nodemailer', 'Swagger'],
        githubUrl: 'https://github.com/Scerutti/notifications',
        liveUrl: 'https://notifications-gipk.onrender.com/api',
        featured: true,
    },
    {
        id: 'project-2',
        title: 'Funciones Básicas',
        description: 'Paquete de utilidades con funciones comunes para parseo, fechas, strings, arrays y hooks de React.',
        image: 'https://res.cloudinary.com/dhvbp84vj/image/upload/v1758912681/funciones_basicas_e2ycav.png',
        technologies: ['TypeScript', 'React', 'NPM'],
        githubUrl: '',
        liveUrl: 'https://www.npmjs.com/package/funciones-basicas',
        featured: true,
    },
    {
        id: 'project-3',
        title: 'Baires Hospedajes',
        description: 'Aplicación de hospedajes con frontend en Next.js y Tailwind, backend con Nest y MongoDB, login con Firebase y mapas con Leaflet.',
        image: 'https://res.cloudinary.com/dhvbp84vj/image/upload/v1758912681/baires_home_lulkf4.png',
        technologies: ['React', 'Next.js', 'TailwindCSS', 'NestJS', 'TypeScript', 'MongoDB', 'Leaflet', 'Firebase'],
        githubUrl: '',
        liveUrl: 'https://www.baireshospedajes.com.ar',
        featured: true,
    },
    {
        id: 'project-4',
        title: 'Portfolio',
        description: 'Portfolio personal',
        image: 'https://res.cloudinary.com/dhvbp84vj/image/upload/v1758912681/portfolio_home_huxiel.png',
        technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
        githubUrl: '',
        liveUrl: '',
        featured: true,
    },
];

