import React from 'react';


function Carousel(){
    return(
        <div id="carouselExampleControls" className="carousel slide mb-5" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://stockx.imgix.net/Adidas-JS-Wings-Solid-Gold.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=1000" className="d-block w-50" alt="..."></img>
                    <div className="carousel-caption position-absolute text-dark" style={{bottom:"-35px"}}>
                        <h5> Gold sneakers you need!</h5>
                        <p>Pull up on the squad looking extra fly.</p>
                    </div>
            </div>
            <div className="carousel-item">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81e-ZZIZ8hL._UL1500_.jpg" className="d-block w-50" alt="..."></img>
                    <div className="carousel-caption text-dark position-absolute" style={{bottom:"-36px"}}>
                        <h5> Nobody is too good for cheap shoes!</h5>
                        <p>Dads everywhere will appreciate the utility of the ugliest shoes you can buy!</p>
                    </div>
            </div>
            <div className="carousel-item">
                    <img src="https://stockx.imgix.net/adidas-Yeezy-Boost-350-V2-Static-Black-Reflective-1-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1560787762" className="d-block w-50" alt="..."></img>
                    <div className="carousel-caption text-dark position-absolute" style={{bottom:"-35px"}}>
                        <h5> Look like you're homeless in these monstrosities!</h5>
                        <p>Show off your style to the homies and get mad respect.</p>
                    </div>
            </div>
            </div>
            <a className="carousel-control-prev bg-light" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next bg-light" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;