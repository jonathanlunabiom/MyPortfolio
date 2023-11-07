export default function Aboutme (){
    return(
        <div className="container">
            <h2>About me!</h2>
            <div className="about-me">
                <div>
                    <p className="info-aboutme">
                    My name is Jonathan Luna. I have a strong passion for the technology sector and hold a bachelor's 
                    degree in Biomedical Engineering from the University of Guadalajara. Presently, I am actively 
                    engaged in the field of full-stack web development and am on the verge of completing the full-stack 
                    course offered by TEC de Monterrey. I also possess expertise in artificial intelligence engineering. 
                    For further information about me, you are welcome to explore my social media profiles.
                    </p>
                </div>
                <div className="phrase-photo">
                 <img src="./src/assets/JDLA-BN.png" alt="Jonathan Luna¿s image" className="jonathanluna-photo"/>
                 <p className="phrase">I am dedicated to the pursuit of coding excellence</p>
                </div>
            </div> 
        </div>
    )
}