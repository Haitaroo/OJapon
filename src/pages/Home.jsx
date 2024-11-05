import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const heroImage = 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&h=1080';
  const toriiImage = 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&h=600';
  const templeImage = 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&h=600';
  const sakuraImage = 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&h=600';

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Japan landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Konnichiwa
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Découvrez le Japon authentique
          </p>
          <Link to="/destinations">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-medium"
            >
              Explorer
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Le Japon en trois mots
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-red-600 text-white px-8 py-4 rounded-lg"
              >
                Culturel
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-red-600 text-white px-8 py-4 rounded-lg"
              >
                Splendide
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-red-600 text-white px-8 py-4 rounded-lg"
              >
                Sugoii
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/destinations">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-lg overflow-hidden shadow-lg h-64"
              >
                <img
                  src={toriiImage}
                  alt="Torii Gates at Fushimi Inari"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Les Torii</h3>
                </div>
              </motion.div>
            </Link>
            
            <Link to="/destinations">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-lg overflow-hidden shadow-lg h-64"
              >
                <img
                  src={templeImage}
                  alt="Temple"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Les Temples</h3>
                </div>
              </motion.div>
            </Link>
            
            <Link to="/destinations">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative rounded-lg overflow-hidden shadow-lg h-64"
              >
                <img
                  src={sakuraImage}
                  alt="Cerisiers en fleurs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Les Cerisiers</h3>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}