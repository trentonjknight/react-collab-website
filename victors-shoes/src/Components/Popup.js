import React, {useEffect, useState} from 'react';
import '../App.css';

const Popup = () => {

const [flash, setFlash] = useState('popup card d-none');
const [count, setCount] = useState(70);

useEffect(() => {
    setTimeout(() => {
        if (count !== 0) setCount(count -1);
    },1000)
},[count])

useEffect(() => {
    setTimeout(() => {
        setFlash('popup card');
    }, 10000);
    setTimeout(() => {
        setFlash('popup card d-none');
    },70000);
}, [setFlash]);

const stop = () => {
    setFlash('popup card d-none');
    setCount(0);
}

    return (
        <>
        <div className={flash}>
            <div className="card-header">
                <div class="alert alert-warning" role="alert">
                <span onClick={stop} className="x float-right">X</span>
                Flash Sale <span style={{color: 'black', fontWeight: 'bold'}}>$499.99</span><span className="off float-right">50% OFF</span>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Victor's Left Shoe</h5>
                <p className="card-text">We are selling the most famous shoe of victor, <br/>the left one because the right one has been eaten by his dog.</p>
                <p className="card-text">Sale Ends in <span class="badge badge-pill badge-danger">{count}</span> seconds</p>
                <a href="/" className="btn btn-primary">Buy Now!</a>
            </div>
        </div>
        </>
    );
};

export default Popup;