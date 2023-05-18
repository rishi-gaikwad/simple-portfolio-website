import React from 'react'
import "./Work.css"

const Work = () => {
    return (
        <>
            <div className='skill-main '>

                <div className='heading'>
                    <h1>Skills</h1>
                </div>
                <div className="skills-page">
                    <div className="skill-card">
                        <div className="card-header">Programming Languages</div>
                        <div className="card-body">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="card-header">Library & Famework</div>
                        <div className="card-body">
                            <ul>
                                <li>React js</li>
                                <li>Next js</li>
                                <li>Node js</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="card-header">Design Famework</div>
                        <div className="card-body">
                            <ul>
                                <li>Bootstrap</li>
                                <li>Tailwind css</li>
                                <li>Chakra ui</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="card-header">Databases</div>
                        <div className="card-body">
                            <ul>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Work;
