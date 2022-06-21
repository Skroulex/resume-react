import React from 'react';
import {useLocation, Link} from "react-router-dom";

const Header = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <div className="header__container">
                <div className="header__logo">
                    <img style={{
                        borderRadius: '50%'
                    }}
                         src="https://scontent.ffru2-1.fna.fbcdn.net/v/t1.6435-9/162232480_123691949764599_2566256700892293068_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7qcDpfdosjcAX9AHcVl&_nc_ht=scontent.ffru2-1.fna&oh=00_AT9PrzcWXa4oKpyP_pwRzYN56WlDab8MccMGWkMowCYjvg&oe=62D734B0"
                         alt=""
                         width="100px"/>
                    <div className="name">
                        <p>Dzhalil Eshimbekov</p>
                        <p>Frontend Developer</p>
                    </div>
                </div>
                <div>
                    <ul className="header__nav">
                        <li><Link to="/about-me">
                            About Me
                        </Link></li>
                        <li><Link to="/education">
                            Education
                        </Link></li>
                        <li><Link to="/certificates">
                            Certificates
                        </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
