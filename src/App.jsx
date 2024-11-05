import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Guide from './pages/Guide';

export default function App() {
  return (
    <Router basename="/ojapon">
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}