import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Courses from './pages/courses';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
