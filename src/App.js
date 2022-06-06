import './App.scss';
import ImageGallery from './components/ImageGallery';
import Minting from './components/Minting';
import Personalities from './components/Personalities';
import PhaseFour from './components/PhaseFour';
import PhaseOne from './components/PhaseOne';
import PhaseThree from './components/PhaseThree';
import PhaseTwo from './components/PhaseTwo';
import PhaseZero from './components/PhaseZero';
import RoadMap from './components/RoadMap';
import SpiritAnimals from './components/SpiritAnimals';
import TheStory from './components/TheStory';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Original from './components/Original';
import { Routes, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      
      <Helmet>
          <link rel="apple-touch-icon" href="https://thesolciety.gg/logo192.png" />
      </Helmet>
      <Header/>
      <Hero/>     
      <TheStory />
      <Personalities/>
      <ImageGallery />
      <RoadMap />
      <PhaseZero />
      <PhaseOne /> 
      <PhaseTwo />
      <PhaseThree />
      <PhaseFour />
      <Minting />
      <SpiritAnimals />
      <Original/>
      <Faq/>
      <Footer/> 
    </div> 
  );
}

export default App;
