import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { educationData, certifications } from '../utils/education';

const Education: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <section id="education" className="section bg-white dark:bg-slate-800">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              {t('education.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200 flex items-center">
                <FaGraduationCap className="text-blue-600 mr-3" />
                Education
              </h3>
              
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                        <edu.icon className="text-blue-600 text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {t(edu.title)}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          {t(edu.institution)}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-1" />
                            {t(edu.period)}
                          </div>
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-1" />
                              {t(edu.location)}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            {t(edu.description)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200 flex items-center">
                <FaCertificate className="text-purple-600 mr-3" />
                {t('education.certifications')}
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                        <cert.icon className="text-purple-600 text-lg" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          {t(cert.title)}
                        </h4>
                        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                          <span>{t(cert.institution)}</span>
                          <span>{t(cert.period)}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Learning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
              >
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {t('education.continuousLearning')}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {t('education.continuousLearningDesc')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'TypeScript', 'Docker', 'Kubernetes'].map((tech, index) => (
                    <span
                      key={`${tech}-${index}`}
                      className="px-3 py-1 bg-white dark:bg-slate-800 text-xs rounded-full text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
