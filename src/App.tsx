import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Explore from './Explore';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="nav-link">
            <img src="/src/assets/images/plantrnet_logo.png" alt="Plantrnet Logo" />
          </Link>
        </div>
        <div className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><span className="nav-link">About</span></li>
          <li><span className="nav-link">Blog</span></li>
          <li><span className="nav-link">Resources</span></li>
          <li><button className="book-btn">Book now</button></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <div className="hero-section">
            <div className="hero-content">
              <h1>Find a Garden Near You</h1>
              <p>
                Non consectetur a erat nam at lectus urna duis convallis molestie nunc non blandit massa ut etiam sit amet nisl purus in mollis nunc sed et magnis dis parturient.
              </p>
              <div className="hero-buttons">
                <button className="explore-btn" onClick={() => navigate('/explore')}>Explore locations</button>
                <button className="about-btn">About us</button>
              </div>
            </div>
          </div>
        } />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;