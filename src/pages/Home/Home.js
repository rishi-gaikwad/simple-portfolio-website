import React from 'react'
import "./HomeStyle.css";
import about from "../../images/about.png"
import About from '../About/About';
import Work from '../Work/Work';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <>
            <section>
                <div className="main">
                    <div className="left-side">
                        <h1 className="greeting">Hello,<br />I'am <span>Rushikesh</span></h1>
                        <h1 > Web Developer</h1>
                        <p className="tagline">I'm A Web Developer  passionate about creating beautiful and functional websites.</p>
                        <div className="cta">
                            <button> Read More</button>
                        </div>
                    </div>
                    <div className="right-side">
                        <img src={about} alt="hero" />
                    </div>
                </div>
            </section>
            <Work />
            <About />

        </>
    )
};

export default Home


