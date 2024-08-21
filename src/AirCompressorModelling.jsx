import './Featured.css';
import './TwoArmRobotProject.css';
import { Link } from "react-router-dom";
import video1 from './assets/airCompressor/FinalAssemblySequence.mp4';
import photo1Drawing from './assets/airCompressor/B.jpeg';
import photo1Real from './assets/airCompressor/B.png';
import photo2Drawing from './assets/airCompressor/C.jpeg';
import photo2Real from './assets/airCompressor/C.png';
import photo3Drawing from './assets/airCompressor/D.jpeg';
import photo3Real from './assets/airCompressor/D.png';
import photo4Drawing from './assets/airCompressor/E.jpeg';
import photo4Real from './assets/airCompressor/E.png';
import photo5Drawing from './assets/airCompressor/F.jpeg';
import photo5Real from './assets/airCompressor/F.png';
import photo6 from './assets/airCompressor/A.png';
import photo7 from './assets/airCompressor/A2.png';
import photo8 from './assets/airCompressor/AB.png';
import photo9 from './assets/airCompressor/AB2.png';

function AirCompressorModelling() {
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
                            </div> 
                        </div>
                    </div>

                    <div className = "projectCollection">
                        <div className = "mainTitle">
                            3D MODELLING OF AN AIR COMPRESSOR
                        </div>

                        <div className = "mainPhoto">
                            <div className = "singleVideo">
                                <video controls muted>
                                    <source src = {video1} type = "video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
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
                                            Drawing and modeling of the ball bearing, head, cylinder.
                                        </div>

                                        <div className = "infoSubText">
                                            Creating the assembly and the assembly sequence animation, exploded view and draft, drafts of the sketches.
                                        </div>
                                    </div>
                                </div>

                                <div className = "collaborator">
                                    <div className = "infoTitle">
                                        Collaborator(s)
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            Hikmet Batuhan Balkı
                                        </div>

                                        <div className = "infoSubText">
                                            Erkin Püren
                                        </div>

                                        <div className = "infoSubText">
                                            Ahmet Mete Coşkun
                                        </div>
                                    </div>
                                </div>

                                <div className = "supervisor">
                                    <div className = "infoTitle">
                                        Supervisor(s)
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            Prof. Dr. Ismail Lazoğlu
                                        </div>

                                        <div className = "infoSubText">
                                            T.A. Berkay Demiryülek
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = "projectParagraph">
                                By using Siemens NX I re-created the components of an air compressor to later assemble and then to simulate the
                                motion.
                            </div>  
                        </div>

                        <div className = "moreImages">
                            <div className = "moreImagesRowFor4">
                                <img src = {photo6} className = "projectImage" alt = "drawing"/>

                                <img src = {photo7} className = "projectImage" alt = "drawing"/>

                                <img src = {photo8} className = "projectImage" alt = "drawing"/>

                                <img src = {photo9} className = "projectImage" alt = "drawing"/>
                            </div>

                            <div className = "moreImagesRowFor4">
                                <img src = {photo3Real} className = "projectImage" alt = "drawing"/>

                                <img src = {photo3Drawing} className = "projectImage" alt = "drawing"/>

                                <img src = {photo4Real} className = "projectImage" alt = "drawing"/>

                                <img src = {photo4Drawing} className = "projectImage" alt = "drawing"/>
                            </div>

                            <div className = "moreImagesRowFor4">
                                <img src = {photo1Real} className = "projectImage" alt = "drawing"/>

                                <img src = {photo1Drawing} className = "projectImage" alt = "drawing"/>

                                <img src = {photo2Real} className = "projectImage" alt = "drawing"/>

                                <img src = {photo2Drawing} className = "projectImage" alt = "drawing"/>
                            </div>

                            <div className = "moreImagesRowFor2">
                                <img src = {photo5Real} className = "projectImage" alt = "drawing"/>

                                <img src = {photo5Drawing} className = "projectImage" alt = "drawing"/>
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

export default AirCompressorModelling