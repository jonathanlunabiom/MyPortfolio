import { useState } from "react";

export default function Portfolio (){
    return(
        <div className="mb-5">
            <h2 className="portfolio-title">My Portfolio</h2>
            <div id="carouselExample" className="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active p-2">
                        <img src="./src/assets/chefcito.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item p-2">
                        <img src="./src/assets/movie-night.png" className="d-block w-100" alt="..."/> 
                    </div>
                    <div className="carousel-item p-2">
                        <img src="./src/assets/SN.png" className="d-block w-100 max-width: 100;" alt="..."/>
                    </div>
                    <div className="carousel-item p-2">
                        <img src="./src/assets/WeatherF.png" className="d-block w-100 max-width: 100;" alt="..."/>
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
            </div>
        </div>
    )
}