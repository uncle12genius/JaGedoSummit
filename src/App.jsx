
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Hero from './Pages/Hero';
import Schedule from './Pages/Schedule';
import Speakers from './Pages/Speakers';


function App() {
  return (
    <>
    <div>
     <Navbar/> 
     <Hero/> 
     <About/> 
     <Speakers/> 
     <Schedule/>
     <Footer/>
     
    </div>
    </>
  );
}

export default App;
