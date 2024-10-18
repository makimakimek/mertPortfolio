import './Featured.css';
import './TwoArmRobotProject.css';
import { Link } from "react-router-dom";
import video1 from './assets/bridgeCable/D_video.gif';
import video2 from './assets/bridgeCable/E_video.gif';
import video3 from './assets/bridgeCable/F_video.gif';
import video4 from './assets/bridgeCable/G_video.gif';
import photo1 from './assets/bridgeCable/A_Mesh.png';
import photo2 from './assets/bridgeCable/B_Contacts.png';
import photo3 from './assets/bridgeCable/C.png';

function BridgeCable() {
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
                            STRUCTURAL ANALYSIS OF A BRIDGE CABLE
                        </div>

                        <div className = "mainPhotoBridgeCable">
                            <div className="gifRows">
                                <img src = {video1} className = "singularPhotoBridgeCable" alt = "a gif"/>

                                <img src = {video2} className = "singularPhotoBridgeCable" alt = "a gif"/>
                            </div>

                            <div className="gifRows">
                                <img src = {video3} className = "singularPhotoBridgeCable" alt = "a gif"/>

                                <img src = {video4} className = "singularPhotoBridgeCable" alt = "a gif"/>
                            </div>
                        </div>

                        <div className = "infoAndParagraph">
                            <div className = "info">
                                <div className = "contribution">
                                    <div className = "infoTitle">
                                        Contribution
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            Modeling of Brigde Cable on Siemens NX
                                        </div>

                                        <div className = "infoSubText">
                                            ANSYS Static Structural Analysis
                                        </div>
                                    </div>
                                </div>

                                <div className = "supervisor">
                                    <div className = "infoTitle">
                                        Supervisor(s)
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            Prof. Dr. Erdem Alaca
                                        </div>

                                        <div className = "infoSubText">
                                            T.A. Levent Demirkazık
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = "projectParagraph">
                                Designed a non-conventional bridge cable that will be connected to the bracket from both sides through a fork terminal. 
                                Observed the effect of bolt pre-adjustment without any external forces applied to the bracket. Removed the bolt pretension 
                                from the bolts and applied the external force of 10 kN to the bracket. Contact status of the plates and brackets was observed 
                                when there is an external force applied to the pin and computed the working loads for the bolts. The proposed design for the 
                                bridge cable support system utilizes the traditional nut and bolt arrangement. This design aims to increase the load-bearing 
                                capability of the system, making it more suitable for structures that will be subjected to heavy loads. To evaluate the safety 
                                and reliability of the proposed design it will be necessary to conduct load testing under different load conditions. 
                            </div>  
                        </div>

                        <div className = "moreImages">
                            <div className = "moreImagesRowFor3">
                                <img src = {photo1} className = "projectImageBridgeCable" alt = "drawing"/>

                                <img src = {photo2} className = "projectImageBridgeCable" alt = "drawing"/>

                                <img src = {photo3} className = "projectImageBridgeCable" alt = "drawing"/>
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

export default BridgeCable