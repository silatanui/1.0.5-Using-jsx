import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link to="/">Kezdek</Link>
            </div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Dashboard</li>
                <li>Products</li>
                  {/* Button to Get Started */}
                <button className='getStarted'>Get Started</button>
            </ul>
          
        </nav>
    );
}

export default Navbar;