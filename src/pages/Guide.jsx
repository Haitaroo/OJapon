import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Guide() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    participants: 1,
    region: 'Chubu',
    needsGuide: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Guide d'achat
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Bonjour et bienvenue sur la page d'achat de guide touristique! 
              Ici, vous trouverez deux formats de guide, libre à vous de choisir 
              lequel vous convient le plus!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Informations personnelles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Prénom
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  À propos du voyage
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nombre de participants
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      value={formData.participants}
                      onChange={(e) => setFormData({...formData, participants: parseInt(e.target.value)})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Région d'arrivée
                    </label>
                    <select
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      value={formData.region}
                      onChange={(e) => setFormData({...formData, region: e.target.value})}
                    >
                      <option value="Chubu">Chubu</option>
                      <option value="Narita">Narita</option>
                      <option value="Aomori">Aomori</option>
                      <option value="Fukuoka">Fukuoka</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  onClick={() => setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    participants: 1,
                    region: 'Chubu',
                    needsGuide: true,
                  })}
                >
                  Réinitialiser
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Calculer le prix
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}