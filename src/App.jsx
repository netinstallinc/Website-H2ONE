import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HydrogenSystem from './pages/products/HydrogenSystem';
import H2OnePure from './pages/products/H2OnePure';
import ShowerFilter from './pages/products/ShowerFilter';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hydrogensystem" element={<HydrogenSystem />} />
          <Route path="/h2one-pure" element={<H2OnePure />} />
          <Route path="/shower-filter" element={<ShowerFilter />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}
