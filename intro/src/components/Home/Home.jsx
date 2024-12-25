import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import HeroImage from './hero.png'; // Import the image
// Get the services


function Home() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    Digital <br /> Marketing <br /> Expert
                </h1>
                <p>
                    An award-winning CEO agency with disciplines in digital marketing, design, and website
                    development, focused on understanding you.
                </p>
                <div className="buttons">
                    <a href="#explore" className="btn primary">Explore More</a>
                    <a href="#case-study" className="btn secondary">View Case Study</a>
                </div>
            </div>
            <img src={HeroImage} alt="Hero Image" className='hero-img' />
        </section>
    );
}

export default Home;