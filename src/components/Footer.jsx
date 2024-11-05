import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">O'Japon</h3>
            <p className="text-gray-400">
              La référence pour les voyages au Japon
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Votre email..."
                className="w-full px-4 py-2 rounded bg-gray-800 text-white"
              />
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
                S'inscrire
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              Japon, 〒330-0803 Saitama,<br />
              Omiya Ward<br />
              Takahanacho, 1-407
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} O'Japon. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}