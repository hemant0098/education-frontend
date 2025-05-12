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
        <Route path="/education-frontend/" element={<Home />} />
        <Route path="/education-frontend/courses" element={<Courses />} />
        <Route path="/education-frontend/about" element={<About />} />
        <Route path="/education-frontend/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
