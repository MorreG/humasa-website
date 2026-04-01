import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import CleanChoice from './pages/CleanChoice';
import Stockwik from './pages/Stockwik';
import Booking from './pages/Booking';

// --- Component: Noise Filter (Inline SVG for CSS use) ---
const NoiseFilter = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0 }}>
    <filter id="noiseFilter">
      <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.65" 
        numOctaves="3" 
        stitchTiles="stitch" 
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
  </svg>
);


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NoiseFilter />
      <div className="noise-overlay" />
      <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cleanchoice" element={<CleanChoice />} />
        <Route path="/stockwik" element={<Stockwik />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
