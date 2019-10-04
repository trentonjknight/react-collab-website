import React, {useEffect, useState} from 'react';
import '../App.css';

const Popup = () => {

const [flash, setFlash] = useState('');
const [count, setCount] = useState(0);

setInterval(() => setCount(count+1), 1000);

useEffect(() => {
    setTimeout(() => {
        setFlash(
                <div className="popup card">
                    <div className="card-header">
                        <div class="alert alert-warning" role="alert">
                        Flash Sale <span className="off float-right">50% OFF</span>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Victor's Left Shoe</h5>
                        <p className="card-text">We are selling the most famous shoe of victor, <br/>the left one because the right one has been eaten by his dog.</p>
                        <p className="card-text">Sale Ends in 60 seconds</p>
                        <a href="/" className="btn btn-primary">Buy Now!</a>
                    </div>
                </div>
        );
    }, 10000);
    setTimeout(() => {
        setFlash('');
    },70000);
    // return () => clearTimeout(timer);
    // setInterval(count => setCount(count++), 1000);
    }, []);


    return (
        <>
        {count}
        {flash}
        </>
    );
};

export default Popup;