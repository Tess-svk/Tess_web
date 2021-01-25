import React from 'react';
import "./Footer.css";
import ig from "../images/ig.svg";
import linkedIn from "../images/linkedIn.svg";

class Footer extends React.Component {
    render() {
        return (
            <footer className="fixed-bottom footer-box">
                <div className="text-center">
                    <a href="https://www.linkedin.com/in/tereza-dankova-02700092/" target="_blank"><img height={40} src={linkedIn} alt="linkedIn"/></a>
                    <a href="https://www.instagram.com/i_m_tess/?hl=en" target="_blank"><img height={40} src={ig} alt="ig"/></a>
                </div>
            </footer>
        );
    }
}

export default Footer;