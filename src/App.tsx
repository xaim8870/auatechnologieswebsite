// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider  from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blog';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
// Add more imports as needed
// Import other pages as you create them, e.g., import About from './pages/About';

function App() {
  

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/about" element={<About />} /> */}
              {/* Add more routes */}
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/technologies" element={<Technologies />} />
              {/* Add more routes as you create new pages */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;