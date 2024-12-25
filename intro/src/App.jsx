import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Services from './components/Services/Services';
import Pricing from "./components/Pricing/Pricing";
import TeamSection from "./components/TeamSection/TeamSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes here */}
        </Routes>
        <Services /> {/* Add the Services component here */}
        <Pricing /> {/* Add the Pricing component here */}
        <TeamSection /> {/* Add the TeamSection component here */}
        <ContactSection /> {/* Add the ContactSection component here */}
        <Footer /> {/* Add the Footer component here */}

        
      </div>
    </Router>
  );
}

export default App;
