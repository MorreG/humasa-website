import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import CleanChoice from './pages/CleanChoice';
import Stockwik from './pages/Stockwik';
import Booking from './pages/Booking';
import TahuletEdTarha from './pages/TahuletEdTarha';
import WorkInProgress from './pages/WorkInProgress';
import Techtrade from './pages/Techtrade';
import YarnShop from './pages/YarnShop';
import { publicRoutes } from './publicRoutes';

function App() {
  useEffect(() => {
    // Child layout effects have now initialized the first page's animations.
    // Later client-side navigations should use their normal entrance behavior.
    document.getElementById('root')?.removeAttribute('data-prerendered');
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path={publicRoutes.home} element={<Home />} />
        <Route path={publicRoutes.about} element={<About />} />
        <Route path={publicRoutes.cleanChoice} element={<CleanChoice />} />
        <Route path={publicRoutes.stockwik} element={<Stockwik />} />
        <Route path={publicRoutes.booking} element={<Booking />} />
        <Route path={publicRoutes.tahuletEdTarha} element={<TahuletEdTarha />} />
        <Route path={publicRoutes.techtrade} element={<WorkInProgress projectName="Techtrade" projectPath={publicRoutes.techtrade} />} />
        <Route path={publicRoutes.yarnShop} element={<WorkInProgress projectName="Garnbutik, Stockholm" projectPath={publicRoutes.yarnShop} />} />
        {import.meta.env.DEV && (
          <>
            <Route path="/preview/techtrade" element={<Techtrade />} />
            <Route path="/preview/garnbutik" element={<YarnShop />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
