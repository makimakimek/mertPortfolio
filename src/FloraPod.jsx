import './Featured.css'
import { Link } from "react-router-dom";
import mainProjectPhoto from './assets/placeholderProjectImage.jpg';

function FloraPod() {
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
                                            <Link to = "/TwoArmRobotProject" className = "dropdownItem">Using a Two-Arm Robot System to Write Initials</Link>
                                            <Link to = "/InvertedPendulum" className = "dropdownItem">Inverted Pendulum System Modelling</Link>
                                            <Link to = "/BallBalancer" className = "dropdownItem">Ball Balancer System Control Modelling</Link>
                                            <Link to = "/BridgeCable" className = "dropdownItem">Structural Analysis of a Bridge Cable</Link>
                                            <Link to = "/FluidFlowSimulation" className = "dropdownItem">Fluid Flow Simulation Through an Expanding Pipe</Link>
                                            <Link to = "/AirCompressorModelling" className = "dropdownItem">3D Modelling of an Air Compressor</Link>
                                            <Link to = "/FloraPod" className = "dropdownItem">Climate Controlled Portable Greenhouse System</Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <a href = "https://www.google.com" className = "link">
                                    <div className = "menuItem">
                                        about me
                                    </div>
                                </a>
                            </div> 
                        </div>
                    </div>

                    <div className = "projectCollection">
                        <div className = "mainTitle">
                            Climate Controlled Portable Greenhouse System
                        </div>

                        <div className = "mainPhoto">
                            <img src = {mainProjectPhoto} className = "mainPhoto" alt = "an image of two arm robot project"/>
                        </div>

                        <div className = "infoAndParagraph">
                            <div className = "info">
                                <div className = "contribution">
                                    <div className = "infoTitle">
                                        Contribution
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            MATLAB
                                        </div>

                                    </div>
                                </div>

                                <div className = "collaborator">
                                    <div className = "infoTitle">
                                        Collaborator
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            Ahmet Mete Coşkun
                                        </div>

                                        <div className = "infoSubText">
                                            Emir Kaan Sonay
                                        </div>

                                        <div className = "infoSubText">
                                            Erkin Püren
                                        </div>

                                        <div className = "infoSubText">
                                            Hikmet Batuhan Balkı
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
                                ”FloraPod” measures and adjusts the humidity, temperature, and pH values of a closed system to achieve optimal
                                plant growth designed for urban consumption. Coded the control system on Arduino IDE and installed the LCD, 
                                ultrasonic piezo sensor, DHT-11, analog pH sensor, and soldered the circuits.
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

export default FloraPod