
import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import SlideShow from './Components/SlideShow/SlideShow';
import Projects from './Pages/Projects/Projects'
import About from './Components/About/About';
import ContactForm from './Components/ContactForm/ContactForm';
import { Image } from 'react-bootstrap';
import PortPic from '../src/media/portfolio .jpeg'

function App() {
  return (
    <>
    
    <NavBar/>
    
    <Routes>
      <Route path='/dbic-portfolio/' element={<About/>}/>
      <Route path='/dbic-portfolio/projects' element={<Projects/>}/>
      <Route path='/dbic-portfolio/contact' element={<ContactForm/>}/>
    </Routes>
    </>
  );
}

export default App;
