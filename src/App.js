
import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import SlideShow from './Components/SlideShow/SlideShow';
import Projects from './Pages/Projects/Projects'
import About from './Components/About/About';
import ContactForm from './Components/ContactForm/ContactForm';


function App() {
  return (
    <>
    
    <NavBar/>
    
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<ContactForm/>}/>
    </Routes>
    </>
  );
}

export default App;
