import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { socialLinks } from '../utils/social';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-4"
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Main Title */}
            <div className="flex flex-col items-center md:flex-row md:items-end md:justify-center gap-6 md:gap-8 mb-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="relative"
                >
                    {/* Contenedor del avatar */}
                    <div className="p-[3px] rounded-full bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 shadow-md">
                        <img
                            src="https://res.cloudinary.com/dhvbp84vj/image/upload/v1758067247/1_rnrtcj.png"
                            alt="Sebastián Cerutti"
                            loading="lazy"
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover bg-gray-200 dark:bg-slate-700 ring-2 ring-white dark:ring-slate-900"
                        />
                    </div>
                    {/* Halo suave */}
                    <motion.span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-full blur-lg"
                        style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.12), transparent 60%)' }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold"
                >
              <span className="text-gradient">
                Sebastián Cerutti
              </span>
                </motion.h1>
            </div>
            {/*<motion.h1*/}
          {/*  initial={{ opacity: 0, y: 20 }}*/}
          {/*  animate={{ opacity: 1, y: 0 }}*/}
          {/*  transition={{ duration: 0.6, delay: 0.4 }}*/}
          {/*  className="text-5xl md:text-7xl font-bold mb-6"*/}
          {/*>*/}
          {/*  <span className="text-gradient">*/}
          {/*    Sebastián Cerutti*/}
          {/*  </span>*/}
          {/*</motion.h1>*/}

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary px-8 py-4 rounded-full shadow-lg hover:shadow-xl"
            >
              {t('hero.cta')}
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="text-gray-700 dark:text-gray-300 text-xl" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {t('hero.scroll')}
            </p>
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
            >
              <FaChevronDown className="text-gray-500 dark:text-gray-400" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
