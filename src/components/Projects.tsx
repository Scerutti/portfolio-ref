import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {FaGithub, FaExternalLinkAlt, FaCode} from 'react-icons/fa';
import {useLanguage} from '../contexts/LanguageContext';
import {projects} from '../utils/projects';

const Projects: React.FC = () => {
    const {t} = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });


    return (
        <section id="projects" className="section bg-gray-50 dark:bg-slate-900">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 50}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.8}}
                >
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="section-title">
                            {t('projects.title')}
                        </h2>
                    </div>

                    {/* Featured Projects */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        {projects.filter(project => project.featured).map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{opacity: 0, y: 50}}
                                animate={inView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.8, delay: 0.2 + index * 0.2}}
                                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden">
                                    {project.image ?
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        :
                                        <div
                                            className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                            <FaCode className="text-white text-4xl"/>
                                        </div>
                                    }
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                                            {
                                                project.githubUrl &&
                                                <motion.a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{scale: 1.1}}
                                                    whileTap={{scale: 0.9}}
                                                    className="p-3 bg-white rounded-full shadow-lg"
                                                >
                                                    <FaGithub className="text-gray-800 text-xl"/>
                                                </motion.a>
                                            }
                                            {
                                                project.liveUrl &&
                                                <motion.a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{scale: 1.1}}
                                                    whileTap={{scale: 0.9}}
                                                    className="p-3 bg-white rounded-full shadow-lg"
                                                >
                                                    <FaExternalLinkAlt className="text-gray-800 text-xl"/>
                                                </motion.a>
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {t('projects.tech')}:
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={`${tech}-${techIndex}`}
                                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                                                >
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-4">
                                        {
                                            project.githubUrl !== "" &&
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{scale: 1.05}}
                                                whileTap={{scale: 0.95}}
                                                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                                            >
                                                <FaGithub/>
                                                <span>{t('projects.code')}</span>
                                            </motion.a>
                                        }
                                        {
                                            project.liveUrl !== "" &&
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{scale: 1.05}}
                                                whileTap={{scale: 0.95}}
                                                className="flex items-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors duration-200"
                                            >
                                                <FaExternalLinkAlt/>
                                                <span>{t('projects.view')}</span>
                                            </motion.a>
                                        }
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Other Projects */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.filter(project => !project.featured).map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{opacity: 0, y: 30}}
                                animate={inView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.6, delay: 0.6 + index * 0.1}}
                                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaCode className="text-white text-xl"/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={`${tech}-${techIndex}`}
                                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                                                >
                          {tech}
                        </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span
                                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                                            )}
                                        </div>
                                        <div className="flex space-x-3">
                                            {
                                                project.githubUrl !== "" &&
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                                                >
                                                    <FaGithub/>
                                                </a>
                                            }
                                            {
                                                project.liveUrl !== "" &&
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                                                >
                                                    <FaExternalLinkAlt/>
                                                </a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
