import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { contactInfo } from '../utils/contact';
import httpPrivate from "../utils/functions.ts";

interface EmailData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        httpPrivate.post("/notifications?owner=softsys95@gmail.com", formData)
            .then(_response => {
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                }, 3000);
            })
            .catch(error => {
                console.error("Contact form submission failed:", {
                    error: error.message,
                    status: error.response?.status,
                    data: error.response?.data,
                    timestamp: new Date().toISOString()
                });
            });
    };


  return (
    <section id="contact" className="section bg-gray-50 dark:bg-slate-900">
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
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
                {t('contact.getInTouch')}
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <info.icon className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        {t(info.title)}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800"
              >
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {t('contact.letsWorkTogether')}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {t('contact.opportunitiesText')}
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  Send a Message
                </h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-green-600 text-2xl" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {t('contact.sent')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      I'll get back to you as soon as possible!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 transition-colors duration-200 resize-none"
                        placeholder={t('contact.messagePlaceholder')}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <FaPaperPlane />
                      <span>{t('contact.send')}</span>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
