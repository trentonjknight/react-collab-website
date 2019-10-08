import React from 'react';
import ReactPlayer from 'react-player';


function Slist () {

let image1 = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsgMAfPVO_dJVKkx2Eb7v74yM1-gNpS1CEYuiZuoRjXzx6D8brbvedMK5DwD6ZorkjqsDoSn8pxUlg_meVmCWXC1RPTGK4FKMdbaPZJ4gD7jWkGSzI5FVR&usqp=CAE";

let image2 = "https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/31/P00333464.jpg";
//let image2 = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqH5Vcg2FWAK-y7T6CzPFxt0sSIPwkDr1pPnm-jM7VVGvz8JfS6Or3EI1v7lPhUxlXx0pj4hvJnvynXxYWaPNdSuec4J4srw&usqp=CAY";
let video = 'https://underarmour.scene7.com/is/content/Underarmour/V6.5/360Videos/auto_dim7_3020539-001_640x480_1200K.mp4';

    return(
    <>
          <div className="card-deck m-3">
            <div className="card border-primary">
                <img className="card-img-top" src={image1} alt="Card 1 cap"/>
                <div className="card-body">
                <h5 className="card-title">Basketball Sneakers</h5>
                <p className="card-text">You can choose your nice sneakers to play your favorite sport.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 secs ago</small></p>
                </div>
            </div>
          <div className="card border-primary">
                <ReactPlayer className="videoLoop" url={video} playing='true' loop width='100%' height='100%'/>
                <div className="card-body">
                <h5 className="card-title">Fancy Shoes</h5>
                <p className="card-text">These shoes looks like come from a jewelry!.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
          <div className="card border-primary">
                <img className="card-img-top" src={image2} alt="Card 3 cap"/>
                <div className="card-body">
                <h5 className="card-title">Sport Shoes</h5>
                <p className="card-text">These are the Joker's sneakers.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
           </div>
         </div>
    </>

    );
};


export default Slist;