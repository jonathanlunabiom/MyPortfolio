export default function Portfolio (){
    return(
        <div>
            <h2 className="portfolio-title">My Portfolio</h2>
            <div id="carouselExample" className="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.elsoldemexico.com.mx/gossip/8esuvu-amazin-spiderman-.png/ALTERNATES/LANDSCAPE_768/Amazin%20Spiderman%20.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.elsoldemexico.com.mx/gossip/8esuvu-amazin-spiderman-.png/ALTERNATES/LANDSCAPE_768/Amazin%20Spiderman%20.png" className="d-block w-100" alt="..."/> 
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.elsoldemexico.com.mx/gossip/8esuvu-amazin-spiderman-.png/ALTERNATES/LANDSCAPE_768/Amazin%20Spiderman%20.png" className="d-block w-100" alt="..."/>
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
}ç