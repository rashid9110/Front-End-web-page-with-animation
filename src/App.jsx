import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./HOME/home";
import About from "./ABOUT/about";
import Services from "./SERVICES/services";
import Contact from "./CONTECT/contact";
import Login from "./LOGIN/login";
import "./App.css";

// Import your logo image
import logo from "/images/brand_logo.png"; // Adjust the path as necessary

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul className="navbar">
            <div className="nav-links">
              {/* Add logo to the navbar */}
              <li className="logo">
  <Link to="/">
    <img src={logo} alt="Logo" className="logo-image" />
  </Link>
</li>

              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </div>
            <li className="login">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
