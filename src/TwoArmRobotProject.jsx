import './TwoArmRobotProject.css';
import './Featured.css';
import { Link } from "react-router-dom";
import mainProjectPhoto from './assets/placeholderProjectImage.jpg';

function TwoArmRobotProject() {
    return (
        <>
            <div className = "page">
                <div className = "navAndProjects">
                    <div className = "navigationAndName">
                        <div className = "name">
                            Mert Ayhan Tandoğdu
                        </div>

                        {/*<div className = "mood">
                            mood:
                        </div>*/}

                        <div className = "navigationTab">
                            <div className = "nodes">
                                NODES
                            </div>

                            <div className = "menu">
                                <Link to = "/Featured">
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
                    </div>

                    <div className = "projectCollection">
                        <div className = "mainTitle">
                            USING A TWO-ARM ROBOT SYSTEM TO WRITE INITIALS
                        </div>

                        <div className = "mainPhoto">
                            <img src = {mainProjectPhoto} className = "singularPhoto" alt = "an image of two arm robot project"/>
                        </div>

                        <div className = "infoAndParagraph">
                            <div className = "info">
                                <div className = "contribution">
                                    <div className = "infoTitle">
                                        Contribution
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            MATLAB code
                                        </div>
                                    </div>
                                </div>

                                <div className = "collaborator">
                                    <div className = "infoTitle">
                                        Collaborator
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            done individually
                                        </div>
                                    </div>
                                </div>

                                <div className = "supervisor">
                                    <div className = "infoTitle">
                                        Supervisor
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            Prof. Ismail Lazoğlu
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = "projectParagraph">
                                Controlled the input arm's angular position and speed with time, and solved the angular positions
                                and speeds of the driven arms.
                            </div>  
                        </div>

                        <div className = "moreImages">
                            <div className = "projectText">

                            </div>

                            <div className = "projectImage">

                            </div>

                            <div className = "projectImage">

                            </div>

                            <div className = "projectText">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "linkContainer">
                    <Link to = "/Featured">
                        <div className = "indexLink">index</div>
                    </Link>
                    <a href = "https://www.google.com" className = "nextLink">next</a>
                </div>
            </div>
        </>
    )
}

export default TwoArmRobotProject