import React from 'react';
import "./About.css"
import aboutUs from "../../images/aboutUs.png"
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
function About() {
    return (
        <>
            <section className="about-us">
                <div className="about">
                    <div className='left-side'>
                        <img src={aboutUs} className="pic" />
                    </div>

                    <div className="right-side">
                        <h1>
                            LET ME <span> INTRODUCE </span> MYSELF
                        </h1>
                        <h3>Front-end Developer & <span>Designer</span></h3>
                        <p >
                            Hi, my name is <span >Rushikesh Gaikwad </span>
                            and I'm from <span>Satara,Maharashtra,India</span>
                            <br />

                            <br />
                            I'am
                            <b>Front End </b>developer,
                            I enjoy tackling new challenges and continuously expanding my skillset.
                            <br />

                            <br />
                            I am also interested in building new
                            <i>
                                <b> Web Technologies and Products, </b>
                                as well as exploring areas related to
                                <b>JS Library,framework</b>
                            </i>
                            <br />
                        </p>

                        <div className="data">
                            <a href="#" className="hire">Hire Me</a>
                        </div>
                        {/* <div className="skills">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Tailwind css</li>
                                <li>Bootstrap</li>
                                <li>Chakra UI</li>
                                <li>JavaScript</li>
                                <li>React js</li>
                                <li>Next js</li>
                                <li>Node.js</li>
                                <li>Express js</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </section>
        </>


    );
}

export default About;
