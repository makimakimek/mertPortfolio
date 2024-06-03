import './Featured.css'
import { Link } from "react-router-dom";
import projectImage from './assets/projectImage.jpg';

function Featured() {
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
                                <a href = "https://www.google.com" className = "link">
                                    <div className = "menuItem">
                                        index
                                    </div>
                                </a>

                                <a href = "https://www.google.com" className = "link">
                                    <div className = "menuItem">
                                        <div className = "dropdownProjects">
                                            <div className = "dropdownTitle">
                                                projects +
                                            </div>

                                            <div className = "dropdownContent">
                                                <a href = "https://www.google.com" className = "dropdownItem">Using a Two-Arm Robot System to Write Initials</a>
                                                <a href = "https://www.google.com" className = "dropdownItem">Inverted Pendulum System Modelling</a>
                                                <a href = "https://www.google.com" className = "dropdownItem">Ball Balancer System Control Modelling</a>
                                                <a href = "https://www.google.com" className = "dropdownItem">Structural Analysis of a Bridge Cable</a>
                                                <a href = "https://www.google.com" className = "dropdownItem">Fluid Flow Simulation Through an Expanding Pipe</a>
                                                <a href = "https://www.google.com" className = "dropdownItem">3D Modelling of an Air Compressor</a>
                                            </div>
                                        </div>
                                    </div>
                                </a>

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
                            COLLECTION OF MY PROJECTS
                        </div>

                        <div className = "projectsFull">
                            <div className = "projectsRow">
                                <div className = "projectContainer">
                                    <div className = "projectImage">
                                        <img src = {projectImage} className = "image" alt = "an image of FloraPod project"/>
                                    </div>

                                    <div className = "projectTitle">
                                        Using a Two-Arm Robot System to Write Initials
                                    </div>
                                </div>

                                <div className = "projectContainer">
                                    <div className = "projectImage">
                                        <img src = {projectImage} className = "image" alt = "an image of FloraPod project"/>
                                    </div>

                                    <div className = "projectTitle">
                                        Inverted Pendulum System Modelling
                                    </div>
                                </div>

                                <div className = "projectContainer">
                                    <div className = "projectImage">
                                        <img src = {projectImage} className = "image" alt = "an image of FloraPod project"/>
                                    </div>

                                    <div className = "projectTitle">
                                        Ball Balancer System Control Modelling
                                    </div>
                                </div>
                            </div>

                            <div className = "projectsRow">
                                <div className = "projectContainer">
                                    <div className = "projectImage">
                                        <img src = {projectImage} className = "image" alt = "an image of FloraPod project"/>
                                    </div>

                                    <div className = "projectTitle">
                                        Structural Analysis of a Bridge Cable
                                    </div>
                                </div>

                                <div className = "projectContainer">
                                    <div className = "projectImage">
                                        <img src = {projectImage} className = "image" alt = "an image of FloraPod project"/>
                                    </div>

                                    <div className = "projectTitle">
                                        Fluid Flow Simulation Through an Expanding Pipe
                                    </div>
                                </div>

                                <div className = "projectContainer">
                                    <div className = "projectImage">
                                        <img src = {projectImage} className = "image" alt = "an image of FloraPod project"/>
                                    </div>

                                    <div className = "projectTitle">
                                        3D Modelling of an Air Compressor
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className = "linkContainer">
                    <a href = "https://www.google.com" className = "indexLink">index</a>
                    <a href = "https://www.google.com" className = "nextLink">next</a>
                </div>
            </div>
        </>
    )
}

export default Featured