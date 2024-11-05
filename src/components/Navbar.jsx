import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logoUrl = 'public/images/logo.png';

  return (
    <nav className="bg-white/80 backdrop-blur-md dark:bg-gray-900/80 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <img className="h-12 w-auto" src={logoUrl} alt="O'Japon" />
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                Accueil
              </Link>
              <Link to="/about" className="text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                Qui suis-je
              </Link>
              <Link to="/destinations" className="text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                Les incontournables
              </Link>
              <Link to="/guide" className="text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                Guide d'achat
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white hover:text-red-600"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
          <Link to="/" className="block text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-base font-medium">
            Accueil
          </Link>
          <Link to="/about" className="block text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-base font-medium">
            Qui suis-je
          </Link>
          <Link to="/destinations" className="block text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-base font-medium">
            Les incontournables
          </Link>
          <Link to="/guide" className="block text-gray-800 dark:text-white hover:text-red-600 px-3 py-2 rounded-md text-base font-medium">
            Guide d'achat
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}