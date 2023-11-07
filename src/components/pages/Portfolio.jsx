import img1 from "../../assets/chefcito.png"
import img2 from "../../assets/movie-night.png"
import img3 from "../../assets/SN.png"
import img4 from "../../assets/WeatherF.png"

export default function Portfolio (){
    return(
        <div className="mb-5">
            <h2 className="portfolio-title">My Portfolio</h2>
            <div id="carouselExample" className="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active p-2">
                        <img src={img1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item p-2">
                        <img src={img2} className="d-block w-100" alt="..."/> 
                    </div>
                    <div className="carousel-item p-2">
                        <img src={img3} className="d-block w-100 max-width: 100;" alt="..."/>
                    </div>
                    <div className="carousel-item p-2">
                        <img src={img4} className="d-block w-100 max-width: 100;" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <h5 className="mt-3 text-center">Some of my projects</h5>
            </div>
        </div>
    )
}