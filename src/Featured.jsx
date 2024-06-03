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

                        <div className = "mood">
                            mood:
                        </div>

                        <div className = "navigationTab">
                            <div className = "nodes">
                                NODES
                            </div>

                            <div className = "menu">

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
                                        FloraPod
                                    </div>
                                </div>

                                <div className = "projectContainer">
                                    <div className = "projectImage">
                                        <img src = {projectImage} className = "image" alt = "an image of FloraPod project"/>
                                    </div>

                                    <div className = "projectTitle">
                                        FloraPod
                                    </div>
                                </div>

                                <div className = "projectContainer">
                                    <div className = "projectImage">
                                        <img src = {projectImage} className = "image" alt = "an image of FloraPod project"/>
                                    </div>

                                    <div className = "projectTitle">
                                        FloraPod
                                    </div>
                                </div>
                            </div>

                            <div className = "projectsRow">
                                <div className = "projectContainer">
                                    <div className = "projectImage">

                                    </div>

                                    <div className = "projectTitle">

                                    </div>
                                </div>

                                <div className = "projectContainer">
                                    <div className = "projectImage">

                                    </div>

                                    <div className = "projectTitle">

                                    </div>
                                </div>

                                <div className = "projectContainer">
                                    <div className = "projectImage">

                                    </div>

                                    <div className = "projectTitle">

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