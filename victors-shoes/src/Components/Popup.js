import React, {useEffect, useState} from 'react';
import '../App.css';
import sadMario from '../assets/marioFail.gif';
import happyMario from '../assets/happyMario.gif';

import gameOver from '../assets/sound/gameOver.wav';
import win from '../assets/sound/win.wav';
import UIfx from 'uifx';

const vicOver = new UIfx(gameOver);
const vicWin = new UIfx(win);
 


const Popup = () => {

const [flash, setFlash] = useState('popup card d-none');
const [count, setCount] = useState(70);
const [sad, setSad] = useState('d-none');
const [happy, setHappy] = useState('d-none');
// const [time, setTime] = useState(70000);

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
        setSad('sadVic');
        vicOver.play();
    }, 70000);
    setTimeout(() => {
        setFlash('popup card d-none');
        setSad('d-none');
    },74000);
}, [setFlash]);

const stop = () => {
    setFlash('popup card d-none');
    setCount(0);
}
const buyHandle = () => {
    vicWin.play();
    setHappy('happyVic');
    setTimeout(() => {
        setHappy('d-none');
        setSad('d-none');
    },7000)
    setFlash('d-none');
    // setTime(0);
}
    return (
        <>
        <div className={flash}>
            <div className="card-header">
                <div className="alert alert-warning" role="alert">
                <span onClick={stop} className="x float-right">X</span>
                Flash Sale <span style={{color: 'black', fontWeight: 'bold'}}>$499.99</span><span className="off float-right">50% OFF</span>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Victor's Left Shoe</h5>
                <p className="card-text">We are selling the most famous shoe of victor, <br/>the left one because the right one has been eaten by his dog.</p>
                <p className="card-text">Sale Ends in <span className="badge badge-pill badge-danger">{count}</span> seconds</p>
                <button onClick={buyHandle} className="btn btn-primary">Buy Now!</button>
            </div>
        </div>
        <div className={sad}>
            <img src={sadMario} alt="sadMario" />
        </div>
        <div className={happy}>
            <img src={happyMario} alt="happyMario"/>
        </div>
        </>
    );
};

export default Popup;