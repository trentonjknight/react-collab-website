import React from 'react';


function CardCarousel(){
    return(
        <div id="carouselExampleControls1" className="carousel slide m-3" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="10000">
                    <div className="card-deck">
                        <div className="card border-primary text-center">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/81e-ZZIZ8hL._UL1500_.jpg" className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">Big shoe game</h5>
                                <p className="card-text">Everyday im shufflin. Buy more shoes. Endless possibilities</p>
                                <a href="#" className="btn btn-primary">Buy this pair</a>
                            </div>
                        </div>
                        <div className="card border-primary text-center">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/81e-ZZIZ8hL._UL1500_.jpg" className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">Big shoe game</h5>
                                <p className="card-text">Everyday im shufflin. Buy more shoes. Endless possibilities</p>
                                <a href="#" className="btn btn-primary">Buy this pair</a>
                            </div>
                        </div>
                        <div className="card border-primary text-center">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/81e-ZZIZ8hL._UL1500_.jpg" className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">Big shoe game</h5>
                                <p className="card-text">Everyday im shufflin. Buy more shoes. Endless possibilities</p>
                                <a href="#" className="btn btn-primary">Buy this pair</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card-deck">
                        <div className="card border-primary text-center">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/81e-ZZIZ8hL._UL1500_.jpg" className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">Big shoe game</h5>
                                <p className="card-text">Everyday im shufflin. Buy more shoes. Endless possibilities</p>
                                <a href="#" className="btn btn-primary">Buy this pair</a>
                            </div>
                        </div>
                        <div className="card border-primary text-center">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/81e-ZZIZ8hL._UL1500_.jpg" className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">Big shoe game</h5>
                                <p className="card-text">Everyday im shufflin. Buy more shoes. Endless possibilities</p>
                                <a href="#" className="btn btn-primary">Buy this pair</a>
                            </div>
                        </div>
                        <div className="card border-primary text-center">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/81e-ZZIZ8hL._UL1500_.jpg" className="card-img-top" alt="..." ></img>
                            <div className="card-body">
                                <h5 className="card-title">Big shoe game</h5>
                                <p className="card-text">Everyday im shufflin. Buy more shoes. Endless possibilities</p>
                                <a href="#" className="btn btn-primary">Buy this pair</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <a className="carousel-control-prev bg-light" href="#carouselExampleControls1" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next bg-light" href="#carouselExampleControls1" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default CardCarousel;