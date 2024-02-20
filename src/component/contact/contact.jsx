import React from 'react';
import './contact.css';
import cv_img from '../../asset/resume/lephamxuanduyen-1.png';

const contact = () => {
    return (
        <div className='part'>
            <div id="resume">
                <div className="title">My Resume</div>
                <button className="download_btn">
                    <a href="https://drive.google.com/file/d/1aYB7mJvfcywN4cQL-df-eSOxpZYAosIf/view?usp=sharing" target="_blank">Download</a>
                </button>
                <div className="resume-img">
                    <img src={cv_img} alt="" />
                </div>
                <button className="download_btn">
                    <a href="https://drive.google.com/file/d/1aYB7mJvfcywN4cQL-df-eSOxpZYAosIf/view?usp=sharing" target="_blank">Download</a>
                </button>
            </div>
            <div className="contact">
                <div className="title">Contact</div>
            </div>
        </div>
    );
};

export default contact;