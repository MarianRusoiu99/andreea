
import './CSS/App.css';

import './CSS/AboutMe.css';

import './CSS/Header.css';

import './CSS/Hero.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import AboutMe from './Components/AboutMe';
import Error from './Components/Error';

import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {

  const bgColor = "#090808";
  const fontColor = "#ced8da"


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='Skills' element={<Skills/>}/>
          <Route path='Gallery' element={<Gallery/>}/>
          <Route path='AboutMe' element={<AboutMe/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
