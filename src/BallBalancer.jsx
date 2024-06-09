import './TwoArmRobotProject.css';
import './Featured.css';
import { Link } from "react-router-dom";
import ballBalancerImage from './assets/ballBalancer.jpg';
import stabilityRootLocusImage from './assets/stabilityRootLocus.jpg';

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
                            BALL BALANCER CONTROL MODELLING
                        </div>

                        <div className = "mainPhoto">
                            <img src = {ballBalancerImage} className = "singularPhoto" alt = "an image of the ball balancer through matlab"/>

                            <img src = {stabilityRootLocusImage} className = "singularPhoto" alt = "an image of the root locus graph"/>
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
                                            Prof. Çağatay Başdoğan
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
                                system for a beam and ball system. The system's response to a disturbance signal,
                                which affects the angle of the beam (θ), is simulated using a Simulink model. A PD
                                controller is designed to meet the specified constraint of a settling time of fewer than 4
                                seconds with the root-locus approach that is utilized with the "Control System
                                Designer" toolbox. In addition to simulating the system's response, the report focuses
                                on visualizing the movements of the ball on the beam. The outputs of the Simulink
                                model, namely the beam's angular position (θ(t)) and the ball's position (x(t)), are
                                stored and animated in MatLab. The length of the beam (L) is assumed to be 60 cm,
                                and the radius of the ball (r) is assumed to be 5 cm. The "drawBallnBeam.m" function
                                is provided to draw the circle representing the ball and the beam in MatLab.
                                Furthermore, the effect of controller gains (K p , K d ) on the system's performance is
                                investigated. Different sets of gains are selected to analyse three distinct conditions:
                                marginally stable, underdamped, and overdamped. The corresponding graphs are
                                plotted to illustrate the angular position of the beam and the position of the ball.
                                Additionally, the closed-loop pole-zero maps are plotted, and their effects on the
                                system's response are analysed. It is ensured that the controllers for these conditions
                                successfully reject the disturbance.
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

export default BallBalancer