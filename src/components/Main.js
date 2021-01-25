import React from 'react';
import "./Main.css";

import {Link} from "react-router-dom";
import ParticlesBk from "./ParticlesBk";
import Footer from "./Footer";

import art_logo from "../images/art.svg";
import it_logo from '../images/it.svg';
import logo from "../images/logo.svg";

class Main extends React.Component {
    render() {
        return (
            <div>
                <ParticlesBk/>
                <div className="main-logo">
                    <Link to="/"><img src={logo} className="my-logo" alt="logo"/></Link>
                </div>
                <div className="intro">
                    <Link to="/It"><img src={it_logo} className="logos" alt="It logo"/></Link>
                    <Link to="/Art"><img src={art_logo} className="logos" alt="Art logo"/></Link>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Main;