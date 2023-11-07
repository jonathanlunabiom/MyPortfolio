import img1 from "../assets/github.png"
import img2 from "../assets/linkedin.png"

export default function Footer (){
    return(
        <footer>
            <p className="reserved-p">All reserved rights Jonathan Luna &#174;</p>
            <div className="mymedia">
                <a href="https://www.github.com/jonathanlunabiom"><img src={img1} alt="github icon" className="social-media"/></a>
                <a href="https://www.linkedin.com/in/jonathanlunabiom/"><img src={img2} alt="linkedin icon" className="social-media"/></a>
            </div>
        </footer>
    )
}