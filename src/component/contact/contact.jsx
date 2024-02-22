import React from 'react';
import './contact.css';
import cv_img from '../../asset/resume/lephamxuanduyen-1.png';

const contact = () => {
    return (
        <div className='part'>
            <div id="resume">
                <div className="title">My Resume</div>
                <button className="download_btn">
                    <a href="https://drive.google.com/file/d/1aqDOgzFHfn2S2xkP6_W84L20QLI2bcMb/view?usp=sharing" target="_blank">Download</a>
                </button>
                <div className="resume-img">
                    <img src={cv_img} alt="" />
                </div>
                <button className="download_btn">
                    <a href="https://drive.google.com/file/d/1aqDOgzFHfn2S2xkP6_W84L20QLI2bcMb/view?usp=sharing" target="_blank">Download</a>
                </button>
            </div>
            <div className="contact">
                <form action="">
                </form>
            </div>
        </div>
    );
};

export default contact;