import React from 'react';
import './home.css'
import fe from '../../asset/fe.png'
import ba from '../../asset/ba.png'



const home = () => {
    const imgChangeEffect = (e) => {
        var imgBox = document.querySelector('.img-box');
        var imgWrap = document.querySelector('.img-wrap');
        var originalImg = document.getElementById('originalImg');
        var line = document.querySelector('.line')

        originalImg.style.width = imgBox.offsetWidth + "px";

        var leftSpace = imgBox.offsetLeft;

        var boxWidth = (e.pageX - leftSpace) + 'px';

        imgWrap.style.width = boxWidth;
        line.style.left = boxWidth
    }
    return (
        <div className='homepage' >
            <div className="img-box" onMouseMove={(e) => imgChangeEffect(e)}>
                <img src={fe} alt="" />
                <div className="img-wrap">
                    <img src={ba} alt=""  id="originalImg"/>
                </div>
                <div className="line">
                    <div className="arrow">&lt;&gt;</div>
                </div>
            </div>
            <div className="about-me">
                <div className="title">About me</div>
            </div>
            <div className="skill">
                <div className="title">Skill</div>
            </div>
        </div>
    );
};

export default home;