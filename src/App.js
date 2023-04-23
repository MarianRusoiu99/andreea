
import './CSS/App.css';
import './CSS/Page.css'
import './CSS/Header.css';
import './CSS/Hero.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/Hero';

import GetInTouch from './Components/GetInTouch';
import Error from './Components/Error';
import MyWork from './Components/MyWork';
import Altele from './Components/Altele';

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Pagina from './Components/Pagina';

function App() {

  

  return (
    <div className="App colorLight bgColorDark">
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='GetInTouch' element={<GetInTouch/>}/>
          <Route path="MyWork" element={<MyWork/>}/>
          <Route path="Altele" element={<Altele/>}/>
          <Route path="Pagina" element={<Pagina />}/>
          <Route path="MyWork/Pagina" element={<Pagina />}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
