import React from 'react';
import "./Main.css";
import art_logo from "../art.svg";
import it_logo from '../it.svg';
import {Link} from "react-router-dom";
import ParticlesBk from "./ParticlesBk";
import logo from "../logo.svg";

class Main extends React.Component {
    render() {
        return (
            <div>
                <ParticlesBk/>
                <div className="main-logo">
                    <Link to="/"><img src={logo} className="my-logo" alt="logo"/></Link>
                </div>
                <div className="intro">
                    <Link to="/It"><img src={it_logo} className="logos" alt="it_logo"/></Link>
                    <Link to="/Art"><img src={art_logo} className="logos" alt="art_logo"/></Link>
                </div>
            </div>
        );
    }
}

export default Main;