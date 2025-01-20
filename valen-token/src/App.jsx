import Navbar from "./components/Navbar";
import LogoBanner from "./components/BrandsBanner";
import Purpose from "./components/Purpose";
import Featured from './components/Featured';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';

function App() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <HeroCarousel />
      <LogoBanner />
      <Purpose />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
