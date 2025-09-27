import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { recommendations } from '../utils/recommendations';

const Recommendations: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <section id="recommendations" className="section bg-white dark:bg-slate-800">
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
              {t('recommendations.title')}
            </h2>
          </div>

          {/* Recommendations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-blue-200 dark:text-blue-400">
                  <FaQuoteLeft className="text-2xl" />
                </div>

                {/* Recommendation Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{rec.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                    {rec.image ? (
                        <img
                            src={rec.image}
                            alt={rec.name}
                            loading="lazy"
                            className="w-12 h-12 rounded-full object-cover bg-gray-200 dark:bg-slate-600"
                        />
                    ) : (
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {rec.name.split(' ').map(n => n[0]).join('')}
                      </span>
                        </div>
                    )}
                    <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      {rec.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {rec.position}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {rec.company}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="mt-4 text-right">
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {rec.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LinkedIn CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
              <FaLinkedin className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Connect with me on LinkedIn
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                View all my recommendations and connect with me to discuss potential opportunities or collaborations.
              </p>
              <motion.a
                href="https://www.linkedin.com/in/cerutti-sebastiáng/details/recommendations"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <FaLinkedin />
                <span>{t('recommendations.viewAll')}</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
