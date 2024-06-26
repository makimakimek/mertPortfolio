import './App.css'
import { Link } from "react-router-dom";
import mertImage from './assets/mertImage.jpg'

function App() {
  return (
    <>
      <div className = "page">
        <div className = "openingMessage">
          Hi! I'm Mert.
        </div>
        
        <div className = "paragraphAndImage">
          <div className = "fullParagraph">
            <div className = "paragraph">
            I am a 3rd year PhD at the Machine Agency in HCDE, University of Washington.
            </div>
            <div className = "paragraph">
            My work involves building systems that facilitate embodied knowledge sharing among domain experts and HCI researchers.
            </div>
            <div className = "paragraph">
            I focus on the intersection of materials processes and bio-inspired design.
            </div>
            <div className = "paragraph">
            I occasionally document fun things I create and I sporadically arrange snippets of everyday life into video stories.
            </div>
            <div className = "paragraph">
            Let’s play.
            </div>
          </div>

          <div className = "imageAndResume">
            <div className = "imageContainer">
              <img src = {mertImage} className = "image" alt = "an image of Mert"/>
            </div>
            <div className = "resume">
              link to my Resume - 
              <a href = "https://www.google.com" target = "_blank" className = "link"> &#128196;</a>
            </div>
          </div>
        </div>

        <div className = "goAndNoButtons">
          <Link to = "Featured">
            <button className = "goButton">Go!</button>
          </Link>

          <Link to = "Featured">
            <button className = "noButton">No.</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default App