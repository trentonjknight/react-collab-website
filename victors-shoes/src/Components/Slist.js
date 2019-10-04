//import React from 'react';
import './Slist.js';

import React from 'react'
import ReactPlayer from 'react-player'

function Slist () {

    let image1 = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsgMAfPVO_dJVKkx2Eb7v74yM1-gNpS1CEYuiZuoRjXzx6D8brbvedMK5DwD6ZorkjqsDoSn8pxUlg_meVmCWXC1RPTGK4FKMdbaPZJ4gD7jWkGSzI5FVR&usqp=CAE";
    let image2 = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqH5Vcg2FWAK-y7T6CzPFxt0sSIPwkDr1pPnm-jM7VVGvz8JfS6Or3EI1v7lPhUxlXx0pj4hvJnvynXxYWaPNdSuec4J4srw&usqp=CAY";
    let video = 'https://underarmour.scene7.com/is/content/Underarmour/V6.5/360Videos/auto_dim7_3020539-001_640x480_1200K.mp4';

    return(
    <>
          <div class="card-group">
            <div class="card">
                <img class="card-img-top" src={image1} alt="Card 1 cap"/>
                <div class="card-body">
                <h5 class="card-title">Basketball Sneakers</h5>
                <p class="card-text">You can choose your nice sneakers to play your favorite sport.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 secs ago</small></p>
                </div>
            </div>
          <div class="card">
                <ReactPlayer url={video} playing loop  width="100%" height="100%" />
                <div class="card-body">
                <h5 class="card-title">Fancy Shoes</h5>
                <p class="card-text">These shoes looks like come from a jewelry!.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
          <div class="card">
                <img class="card-img-top" src={image2} alt="Card 3 cap"/>
                <div class="card-body">
                <h5 class="card-title">Sport Shoes</h5>
                <p class="card-text">These shoes gonna be confortable on your feet.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
           </div>
         </div>
    </>

    );
};
    export default Slist;