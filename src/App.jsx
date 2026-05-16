import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-shell">
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark">LW</span>
            <div>
              <strong>Loi Wai</strong>
              <span>IT · Analytics · Automation</span>
            </div>
          </div>
          <nav className="navbar">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>Modern IT portfolio for systems, automation and analytics — built with React + Vite.</p>
        </footer>
      </div>
    </Router>
  );
}
