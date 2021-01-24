import React from 'react';
import "./Art.css";
import {Link} from "react-router-dom";
import ParticlesBk from "./ParticlesBk";
import logo from "../logo.svg";

class Art extends React.Component {
    render() {
        return (
            <div>
                <ParticlesBk/>
                <div className="main-logo">
                    <Link to="/"><img src={logo} className="my-logo" alt="logo"/></Link>
                </div>
                <p>Hi!<br/></p>
            </div>
        );
    }
}

export default Art;