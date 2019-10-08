import React, {useEffect, useState} from 'react';
import '../App.css';
import sadMario from '../assets/cryMario.gif';
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
    const [end, setEnd] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (count !== 0) setCount(count -1);
        },1000)
        if (count === 0 && !end) {
            runSad();
            stop();
        }
    },[count, end]);
    

    useEffect(() => {
        // popup show
        setTimeout(() => {
            setFlash('popup card');
        }, 10000);
        // popup stop showing
        setTimeout(() => {
            setFlash('popup card d-none');
            setSad('d-none');
        },70000);
    }, [setFlash]);

    // close the popup on X
    const stop = () => {
        setFlash('popup card d-none');
        setCount(0);
    }
    
    const runSad = () => {
        setSad('sadVic');
        vicOver.play();
        setTimeout(() => {
            setSad('d-none')
        }, 3000);
    }
    const runHappy = () => {
        setHappy('happyVic');
        vicWin.play();
        setTimeout(() => {
            setHappy('d-none');
        },6000);
    }
    const buyHandle = () => {
        runHappy();
        stop();
        setEnd(true);
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