import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <span className="author">Powered By </span>
                <a href="http://www.superbpixels.com">
                    <span className="brand">Superb Pixels</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;