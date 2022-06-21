import React from 'react';

const Footer = () => {
    return (
        <div style={{
            backgroundColor: 'darkgrey',
            position: 'relative',
            bottom: '0'
        }}>
            <h1 style={{
                textAlign: 'center',
                padding: '20px 0'
            }}>
                Contact Me!
            </h1>
            <div>
                <div className="footer__social">
                    <div>
                        <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" target="_blank"><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                            alt="" width="50px"/></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/" target="_blank"><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Font_Awesome_5_brands_instagram.svg/1792px-Font_Awesome_5_brands_instagram.svg.png"
                            alt="" width="50px"/></a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/" target="_blank"><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                            alt="" width="50px"/></a>
                    </div>
                    <div>
                        <a href="https://ru.linkedin.com/" target="_blank"><img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
                            alt="" width="50px"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
