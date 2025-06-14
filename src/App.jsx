import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Hero from './Pages/Hero';
import Register from './Pages/Register';
import Schedule from './Pages/Schedule';
import Speakers from './Pages/Speakers';
import Partner from './Pages/Partner';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Speakers />
            <Schedule />
            <Footer />
          </>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </>
  );
}

export default App;
