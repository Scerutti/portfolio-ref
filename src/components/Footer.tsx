import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { socialLinks } from '../utils/social';

const DEVELOPER_NAME = 'Sebastián Cerutti';

const Footer: React.FC = () => {
  const { t } = useLanguage();


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
              >
                {DEVELOPER_NAME}
              </motion.h3>
              <p className="text-gray-400 mb-4">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="text-gray-400 hover:text-white transition-colors duration-200" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                {[
                  { key: 'nav.about', href: '#about' },
                  { key: 'nav.education', href: '#education' },
                  { key: 'nav.projects', href: '#projects' },
                  { key: 'nav.contact', href: '#contact' },
                ].map((link, index) => (
                  <li key={`${link.key}-${index}`}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h4>
              <div className="space-y-2 text-gray-400">
                <p>softsys95@gmail.com</p>
                <p>Entre Ríos, Argentina</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© 2024 {DEVELOPER_NAME}.</span>
                <span>{t('footer.rights')}</span>
              </div>

              {/* Built with */}
              <div className="flex items-center space-x-2 text-gray-400">
                <span>{t('footer.built')}</span>
                <FaHeart className="text-red-500" />
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white"
              >
                {t('footer.backToTop')}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
