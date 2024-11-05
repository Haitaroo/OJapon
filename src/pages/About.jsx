import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const profileImage = 'public/images/photo.jpg';

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <img 
              src={profileImage}
              alt="Photo de profil" 
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Qui suis-je?
            </h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-300">
              Konnishiwa, je m'appelle Olivier BARBIN, j'ai 22 ans et je viens de l'ile de la Réunion. 
              Je suis actuellement au Cegep de Jonquière, en intégration Multimédia.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Je suis un grand passionné de la culture japonaise depuis des années, 
              et je suis très heureux de pouvoir la partager avec vous, vous permettre 
              de faire partie de mon univers.
            </p>
            <blockquote className="italic text-gray-700 dark:text-gray-400 border-l-4 border-red-600 pl-4 my-8"> 
                <a href='https://www.youtube.com/watch?v=wAYq8iXjFlI'>
                "Je suis japonais, dōmo, je suis fils du soleil levant. Arigatō. 
                Je suis japonais, je suis japonais. Je suis japonais, je suis né au Japon."
                </a>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </div>
  );
}