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
            I have a Bachelor of Science degree in Mechanical Engineering from Koç University.
            </div>
            <div className = "paragraph">
            Inside you can find all the documentation of my projects I have collaborated on throughout the years.
            </div>
            <div className = "paragraph">
            Here is my Portfolio.
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

            <div className = "goAndNoButtons">
              <Link to = "Featured">
                <button className = "goButton">Go!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App