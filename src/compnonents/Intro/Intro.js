import React from 'react';

const Intro = () => {
    return (
        <div style={{
            paddingBottom:'133px'
        }}>
            <div className="intro__img">
            <img  src="https://i.pinimg.com/736x/1f/0d/f2/1f0df23653050b56effa655ca1958021.jpg" alt=""
                 width="300px"/>
            </div>
            <div className="intro__container">

                <div className="intro__info">
                    <p>SKILLS</p>
                    <ul className="intro__info-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>DOM</li>
                        <li>JAVASCRIPT</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div>
                    <p>Hello my name is Dzhalil. I am Frontend Developer at Google Company. Im working on Google about
                        10
                        years.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam amet at commodi
                        consectetur cumque dignissimos dolorem, fugit impedit neque possimus ratione temporibus
                        voluptates!
                        Earum, porro, reiciendis. Eaque, illum, sequi!</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
