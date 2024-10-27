import { useState } from 'react';
import './Featured.css'
import { Link } from "react-router-dom";
import projectImage from './assets/projectImage.jpg';
import bridgeCableImage from './assets/bridgeCable/B_Contacts.png';
import ballBalancerImage from './assets/ballBalancer/ballBalancerMainPhoto.png';
import twoArmRobotImage from './assets/twoArmRobot/ArmPositionGraph.png';
import circleMenu from './assets/circleMenu.png';

function Featured() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    const NavigationContent = () => (
        <>
            <div className = "name">
                Mert Ayhan Tandoğdu
            </div>

            <div className = "navigationTab">
                <div className = "nodes">
                    NODES
                </div>

                <div className = "menu">
                    <Link to = "/">
                        <div className = "menuItem">
                            index
                        </div>
                    </Link>
                    
                    <div className = "menuItem">
                        <div className = "dropdownProjects">
                            <div className = "dropdownTitle">
                                projects +
                            </div>

                            <div className = "dropdownContent">
                                <Link to = "/FloraPod" className = "dropdownItem">Climate Controlled Portable Greenhouse System</Link>
                                <Link to = "/TwoArmRobotProject" className = "dropdownItem">Using a Two-Arm Robot System to Write Initials</Link>
                                <Link to = "/InvertedPendulum" className = "dropdownItem">Inverted Pendulum System Modelling</Link>
                                <Link to = "/BallBalancer" className = "dropdownItem">Ball Balancer System Control Modelling</Link>
                                <Link to = "/BridgeCable" className = "dropdownItem">Structural Analysis of a Bridge Cable</Link>
                                <Link to = "/FluidFlowSimulation" className = "dropdownItem">Fluid Flow Simulation Through an Expanding Pipe</Link>
                                <Link to = "/AirCompressorModelling" className = "dropdownItem">3D Modelling of an Air Compressor</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className = "menuItem">
                        <div className = "dropdownProjects">
                            <div className = "dropdownTitle">
                                about me
                            </div>

                            <div className = "dropdownContent">
                                <a href = "https://www.linkedin.com/in/mert-ayhan-tando%C4%9Fdu-583266237/?locale=es_ES&trk=people-guest_people_search-card" className = "dropdownItemForAbout" target = "_blank">LinkedIn</a>
                            </div>
                        </div>
                    </div>

                    <a href = "https://www.google.com" className = "link" target = "_blank">
                        <div className = "menuItem">
                            resume
                        </div>
                    </a>
                </div> 
            </div>
        </>
    );

    return (
        <>
            <div className = "featuredPage">
                <div className = "navAndProjects">
                    <div className = "navigationAndName">
                        <NavigationContent />
                    </div>

                    <div className = "projectCollection">
                        <div className = "mainTitle">
                            COLLECTION OF MY PROJECTS
                        </div>

                        <div className = "projectsFull">
                            <div className = "projectsRow">
                                <Link to = "/FloraPod">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Climate Controlled Portable Greenhouse System
                                        </div>
                                    </div>
                                </Link>

                                <Link to = "/TwoArmRobotProject">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {twoArmRobotImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Using a Two-Arm Robot System to Write Initials
                                        </div>
                                    </div>
                                </Link>
                                
                                <Link to = "/InvertedPendulum">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Inverted Pendulum System Modelling
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className = "projectsRow">
                                <Link to = "/BallBalancer">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {ballBalancerImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Ball Balancer System Control Modelling
                                        </div>
                                    </div>
                                </Link>

                                <Link to = "/BridgeCable">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {bridgeCableImage} className = "subImage" alt = "an image the structural analysis of a bridge cable project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Structural Analysis of a Bridge Cable
                                        </div>
                                    </div>
                                </Link>


                                <Link to = "/FluidFlowSimulation">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            Fluid Flow Simulation Through an Expanding Pipe
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className = "projectsRow">
                                <Link to = "/AirCompressorModelling">
                                    <div className = "projectContainer">
                                        <div className = "projectImage">
                                            <img src = {projectImage} className = "subImage" alt = "an image of FloraPod project"/>
                                        </div>

                                        <div className = "projectTitle">
                                            3D Modelling of an Air Compressor
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "linkContainer">
                    <Link to = "/">
                        <div className = "indexLink">index</div>
                    </Link>
                    <Link to = "/TwoArmRobotProject">
                        <div className = "nextLink">next</div>
                    </Link>
                </div>

                <button className="mobileNavButton" onClick={toggleMobileNav}>
                    <img src = {circleMenu} />
                </button>

                <div className={`mobileNav ${mobileNavOpen ? 'active' : ''}`}>
                    <NavigationContent />
                </div>

            </div>
        </>
    )
}

export default Featured