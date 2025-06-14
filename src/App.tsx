import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Explore from './Explore';
import Auth from './Auth';
import { useAuth } from './hooks/useAuth';
import { logOut } from './firebase/auth';
import './App.css';
import logo from './assets/images/plantrnet_logo.png';

function App() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading } = useAuth();

  const handleSignOut = async () => {
    await logOut();
    setMobileMenuOpen(false);
  };

  const handleAuthClick = () => {
    navigate('/auth');
    setMobileMenuOpen(false);
  };

  const handleBookClick = () => {
    // For now, just close mobile menu. Later you can add booking logic
    setMobileMenuOpen(false);
  };

  // Get user's first name from display name
  const getUserFirstName = () => {
    if (user?.displayName) {
      return user.displayName.split(' ')[0];
    }
    return user?.email?.split('@')[0] || 'User';
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div className="landing-container">
      <nav className={`navbar ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="logo">
          <Link to="/" className="nav-link">
            <img src={logo} alt="Plantrnet Logo" />
          </Link>
        </div>
        
        <div 
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          <li>
            <button className="book-btn" onClick={handleBookClick}>
              Book now
            </button>
          </li>
          <li>
            {user ? (
              <div className="user-menu">
                <span className="user-name">Hi, {getUserFirstName()}</span>
                <button className="sign-out-btn" onClick={handleSignOut}>
                  Sign out
                </button>
              </div>
            ) : (
              <button className="sign-in-btn" onClick={handleAuthClick}>
                Sign in
              </button>
            )}
          </li>
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
                <button className="explore-btn" onClick={() => navigate('/explore')}>
                  Explore locations
                </button>
                <button className="about-btn">About us</button>
              </div>
            </div>
          </div>
        } />
        <Route path="/explore" element={<Explore />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;