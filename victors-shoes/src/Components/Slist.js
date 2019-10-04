import React from 'react';
import './Slist.js';

function Slist () {

    let image1 = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsgMAfPVO_dJVKkx2Eb7v74yM1-gNpS1CEYuiZuoRjXzx6D8brbvedMK5DwD6ZorkjqsDoSn8pxUlg_meVmCWXC1RPTGK4FKMdbaPZJ4gD7jWkGSzI5FVR&usqp=CAE";
    let image2 = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqH5Vcg2FWAK-y7T6CzPFxt0sSIPwkDr1pPnm-jM7VVGvz8JfS6Or3EI1v7lPhUxlXx0pj4hvJnvynXxYWaPNdSuec4J4srw&usqp=CAY";
    return(
    <>
          <div class="card-group">
            <div class="card">
                <img class="card-img-top" src={image1} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Basketball Sneakers</h5>
                <p class="card-text">You can choose your nice sneakers to play your favorite sport.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 secs ago</small></p>
                </div>
            </div>
          <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Fancy Shoes</h5>
                <p class="card-text">Look this fancy video for a shoe.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
          <div class="card">
                <img class="card-img-top" src={image2} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Sport Shoes</h5>
                <p class="card-text">This shoe gonna be confortable on your foot.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
           </div>
         </div>
    </>

    );
};
    export default Slist;