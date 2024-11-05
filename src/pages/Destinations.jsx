import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Destinations() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Updated Torii image URL to a more reliable source
  const toriiImage = 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&h=800';
  const itsukushimaImage = 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&h=800';
  const yoshinoImage = 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&h=800';
  const todaijiImage = 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?auto=format&fit=crop&w=1200&h=800';

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Les Incontournables
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Découvrez les lieux emblématiques du Japon
          </p>
        </motion.div>

        <div className="space-y-24" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <img
              src={toriiImage}
              alt="Torii Gates at Fushimi Inari Shrine"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Les Torii du Fushimi Inari
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Le sanctuaire Fushimi Inari est célèbre pour ses milliers de torii 
                vermillon qui forment des tunnels le long des chemins de montagne. 
                Ces portails traditionnels japonais marquent la transition entre le 
                monde profane et le domaine sacré des kami (divinités shintoïstes).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="md:order-2">
              <img
                src={yoshinoImage}
                alt="Mont Yoshino pendant la saison des cerisiers"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Mont Yoshino
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Le mont Yoshino est couvert de plus de 200 espèces de sakura et de plus 
                de 30 000 arbres individuels le long d'un sentier de 8 km. Au printemps, 
                ces sakura en font un paradis floral sur terre.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <img
              src={todaijiImage}
              alt="Temple Tōdai-ji"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Tōdai-ji
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Le Tōdai-ji était le plus grand projet de construction jamais réalisé 
                sur le sol japonais. Sa création reflète le mélange complexe du bouddhisme 
                et de la politique au début du Japon.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}