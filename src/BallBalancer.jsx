import './TwoArmRobotProject.css';
import './Featured.css';
import { Link } from "react-router-dom";
import video1 from './assets/ballBalancer/video1.mp4';
import video2 from './assets/ballBalancer/video2.mp4';
import video3 from './assets/ballBalancer/video3.mp4';
import video6 from './assets/ballBalancer/video6.mp4';
import marginallyStable from './assets/ballBalancer/marginallyStable.gif';
import overdamped from './assets/ballBalancer/overdamped.gif';
import underdamped from './assets/ballBalancer/underdamped.gif';

function BallBalancer() {
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

                    <div className = "projectCollectionInside">
                        <div className = "mainTitle">
                            BALL BALANCER CONTROL MODELLING
                        </div>

                        <div className = "mainPhoto">
                            <img src = {marginallyStable} className = "singularPhoto" alt = "a gif of the ball balancer in a marginally stable system"/>

                            <img src = {overdamped} className = "singularPhoto" alt = "a gif of the ball balancer in an overdamped system"/>

                            <img src = {underdamped} className = "singularPhoto" alt = "a gif of the ball balancer in an underdamped system"/>
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

                                        <div className = "infoSubText">
                                            project report
                                        </div>
                                    </div>
                                </div>

                                <div className = "collaborator">
                                    <div className = "infoTitle">
                                        Collaborator
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            Burak Barış
                                        </div>

                                        <div className = "infoSubText">
                                            Utku Berkay Gençaslan
                                        </div>
                                    </div>
                                </div>

                                <div className = "supervisor">
                                    <div className = "infoTitle">
                                        Supervisor
                                    </div>

                                    <div className = "infoFullText">
                                        <div className = "infoSubText">
                                            Prof. Dr. Çağatay Başdoğan
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = "projectParagraph">
                                {/*Obtained the transfer function between the input current and the output position of the ball.
                                The position of the ball is measured using an ultrasonic sensor and fed back to the system via a unity feedback loop
                                to control the ball position using a PD controller. Using the root-locus approach, find the range of gain values that
                                makes the system stable. Developed a Simulink model to simulate the system’s response to a disturbance signal, which 
                                disturbs the angle of the beam. Designed a PD controller that satisfies the constraint of settling time being bigger 
                                than 4 seconds.*/}
                                The purpose of this project is to present the analysis and design of a control
                                system for a beam and ball system. The system&apos;s response to a disturbance signal,
                                which affects the angle of the beam (θ), is simulated using a Simulink model. A PD
                                controller is designed to meet the specified constraint of a settling time of fewer than 4
                                seconds with the root-locus approach that is utilized with the &quot;Control System
                                Designer&quot; toolbox. In addition to simulating the system&apos;s response, the report focuses
                                on visualizing the movements of the ball on the beam. The outputs of the Simulink
                                model, namely the beam&apos;s angular position (θ(t)) and the ball&apos;s position (x(t)), are
                                stored and animated in MatLab. The length of the beam (L) is assumed to be 60 cm,
                                and the radius of the ball (r) is assumed to be 5 cm. The &quot;drawBallnBeam.m&quot; function
                                is provided to draw the circle representing the ball and the beam in MatLab.
                                Furthermore, the effect of controller gains (K p , K d ) on the system&apos;s performance is
                                investigated. Different sets of gains are selected to analyse three distinct conditions:
                                marginally stable, underdamped, and overdamped. The corresponding graphs are
                                plotted to illustrate the angular position of the beam and the position of the ball.
                                Additionally, the closed-loop pole-zero maps are plotted, and their effects on the
                                system&apos;s response are analysed. It is ensured that the controllers for these conditions
                                successfully reject the disturbance.
                            </div>  
                        </div>

                        <div className = "projectVideos">
                            <div className = "videosMainTitle">
                                PROJECT VIDEOS
                            </div>

                            <div className = "videoRow">
                                <div className = "singleVideo">
                                    <video controls>
                                        <source src = {video2} type = "video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    <div className = "videoTitle">
                                        CODE VIDEO PART 1
                                    </div>
                                </div>

                                <div className = "singleVideo">
                                    <video controls>
                                        <source src = {video3} type = "video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    <div className = "videoTitle">
                                        CODE VIDEO PART 2
                                    </div>
                                </div>
                            </div>
                            
                            <div className = "videoRow">
                                <div className = "singleVideo">
                                    <video controls>
                                        <source src = {video1} type = "video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    <div className = "videoTitle">
                                        CODE VIDEO PART 3
                                    </div>
                                </div>

                                <div className = "singleVideo">
                                    <video controls>
                                        <source src = {video6} type = "video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    <div className = "videoTitle">
                                        CODE VIDEO PART 4
                                    </div>
                                </div>
                            </div>                         
                        </div>

                        <div className = "projectReportSection">
                            <div className = "projectReportTitle">
                                PROJECT REPORT
                            </div>

                            <div className = "projectReport">
                                
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

export default BallBalancer