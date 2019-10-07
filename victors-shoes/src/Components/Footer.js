import React from 'react';
import VicPicture from '../assets/vic.png';

import Modal from './Modal';

const Footer = () => {
    return (
        <div className="navBarEntire mt-5">
            <div className="container-fluid">
            <footer className="pt-5 border-top">
                <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2 rounded" src={VicPicture} alt="" width="100" height="100" />
                    <small className="d-block mb-3 ">© 2019-2020</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                    <Modal/>
                    <li><a href="/">Cool stuff</a></li>
                    <li><a href="/">Random feature</a></li>
                    <li><a href="/">Team feature</a></li>
                    <li><a href="/">Stuff for developers</a></li>
                    <li><a href="/">Another one</a></li>
                    <li><a href="/">Last time</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                    <li><a href="/">Resource</a></li>
                    <li><a href="/">Resource name</a></li>
                    <li><a href="/">Another resource</a></li>
                    <li><a href="/">Final resource</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Locations</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">Terms</a></li>
                    </ul>
                </div>
                </div>
            </footer>
            </div>
        </div>
    );
};

export default Footer;