import React from 'react';
import './home.css'
// import fe from '../../asset/fe.png'
// import ba from '../../asset/ba.png'
import ava from '../../asset/avatar.png'
import js from '../../asset/skill/js.png'
import reactjs from '../../asset/skill/react.png'
import python from '../../asset/skill/python.png'
import django from '../../asset/skill/django.png'
import csharp from '../../asset/skill/csharp.png'
import sqlserver from '../../asset/skill/sqlserver.png'
import mysql from '../../asset/skill/mysql.png'
import sqlite from '../../asset/skill/sqlite.png'
import git from '../../asset/skill/git.png'
import figma from '../../asset/skill/figma.png'
import vs from '../../asset/skill/vs.png'


const home = () => {
    // const imgChangeEffect = (e) => {
    //     var imgBox = document.querySelector('.img-box');
    //     var imgWrap = document.querySelector('.img-wrap');
    //     var originalImg = document.getElementById('originalImg');
    //     var line = document.querySelector('.line')
    //     originalImg.style.width = imgBox.offsetWidth + "px";

    //     var leftSpace = imgBox.offsetLeft;

    //     var boxWidth = (e.pageX - leftSpace) + 'px';

    //     imgWrap.style.width = boxWidth;
    //     line.style.left = boxWidth
    // }
            // <div className="img-box" onMouseMove={(e) => imgChangeEffect(e)}>
            //     <img src={fe} alt="" />
            //     <div className="img-wrap">
            //         <img src={ba} alt=""  id="originalImg"/>
            //     </div>
            //     <div className="line">
            //         <div className="arrow">&lt;&gt;</div>
            //     </div>
            // </div>
    return (
        <div className='homepage'>
            <div className="about-me part">
                <div className="introduce">
                    <div className="title">About me</div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ullam nobis accusantium delectus labore laborum magnam aut nulla beatae. Ex necessitatibus voluptates numquam porro quod architecto, tempora quo accusamus eaque.</p>
                </div>
                <div className="img-intro">
                    <img src={ava} width={'90%'} />
                </div>
            </div>
            <div className="skill part">
                <div className="title">Languages and Tools</div>
                <div className="container">
                    <div className="item">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">
                            <img src={js} alt="" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://react.dev/">
                            <img src={reactjs} alt="" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://www.python.org/">
                            <img src={python} alt="" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://www.djangoproject.com/">
                            <img src={django} alt="" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29">
                            <img src={csharp} alt="" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://git-scm.com/">
                            <img src={git} alt="" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads">
                            <img src={sqlserver} alt="" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://www.mysql.com/">
                            <img src={mysql} alt="" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://sqlite.org/index.html">
                            <img src={sqlite} alt="" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://www.figma.com/">
                            <img src={figma} alt="" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://code.visualstudio.com/">
                            <img src={vs} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default home;