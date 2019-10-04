import React, {useEffect, useState} from 'react';
import '../App.css';

const Popup = () => {

const [count, setCount] = useState('');

useEffect(() => {
    const timer = setTimeout(() => {
        setCount(
            <div className="popup">
                <h1>Timeout called!</h1>
            </div>
        );
    }, 3000);
    return () => clearTimeout(timer);
    }, []);


    return (
        <>
        {count}
        </>
    );
};

export default Popup;