
import './CSS/App.css';

import './CSS/Header.css';

import './CSS/Hero.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import AboutMe from './Components/AboutMe';
import GetInTouch from './Components/GetInTouch';
import Error from './Components/Error';
import MyWork from './Components/MyWork';
import DesignDeProdus from './Components/DesignDeProdus';
import DeignGrafic from './Components/DeignGrafic';
import DesignInterior from './Components/DesignInterior';
import Altele from './Components/Altele';

import {BrowserRouter , Routes , Route, useLocation } from 'react-router-dom'

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='Skills' element={<Skills/>}/>
          <Route path='Gallery' element={<Gallery/>}/>
          <Route path='AboutMe' element={<AboutMe/>}/>
          <Route path='GetInTouch' element={<GetInTouch/>}/>
          <Route path="MyWork" element={<MyWork/>}/>
          <Route path="DesignDeProdus" element={<DesignDeProdus/>}/>
          <Route path="DesignInterior" element={<DesignInterior/>}/>
          <Route path="DesignGrafic" element={<DeignGrafic/>}/>
          <Route path="Altele" element={<Altele/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
