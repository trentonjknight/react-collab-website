import React from 'react';


function Carousel(){
    return(
            <div id="carouselExampleControls" className="carousel slide mb-5" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://stockx.imgix.net/Adidas-JS-Wings-Solid-Gold.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1538080256&w=1000" className="d-block w-50" alt="..."></img>
        </div>
                <div className="carousel-item">
                        <img src="https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/y1gdarwadxuyvv66zqwj/new-balance-990-v5" className="d-block w-50" alt="..."></img>
        </div>
                <div className="carousel-item">
                       <img src="https://i.ytimg.com/vi/3CMvtxUmOD0/maxresdefault.jpg" className="d-block w-50" alt="..."></img>
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