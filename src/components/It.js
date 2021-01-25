import React from 'react';
import "./It.css";
import {Link} from "react-router-dom";
import ParticlesBk from "./ParticlesBk";
import logo from "../images/logo.svg";
import Footer from "./Footer";

class It extends React.Component {
    render() {
        return (
            <div>
                <ParticlesBk/>
                <div className="main-logo">
                    <Link to="/"><img src={logo} className="my-logo" alt="logo"/></Link>
                </div>
                <div className="it-text">
                    <div className="row">
                        <div className="col-md-8 projects">
                            <h1>SYMONDS</h1>
                            <a className="links" href="https://github.com/Tess-svk/symonds_creative.git" target="_blank">GitHub - under development</a>
                            <p>
                                I was contacted by SYMONDS to recreate and improve his current website.
                                <br/>
                                SYMONDS creative: a collection of unique, hand made works created through a collaboration of like minded people. Designed to showcase local artists, fabricators and makers.
                                <br/>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 projects">
                            <h1>FAINT SIGNALS</h1>
                            <a className="links" href="https://faintsignals.io/" target="_blank">https://faintsignals.io/</a>
                            <p>
                                I was commissioned by Invisible Flock to create the web interface for their interactive art piece, Faint Signals. Which was created for The British Library.
                                <br/>
                                Faint Signals is an invitation to slow down. An opportunity to experience an imagined Yorkshire forest, densely populated with sounds of nature from the British Library's archive.
                                <br/>
                                Faint Signals is a landing page for the artwork itself, it was originally hosting the game itself through webGL.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 projects">
                            <h1>LAND BODY ECOLOGIES</h1>
                            <a className="links" href="https://github.com/Tess-svk/LandBodyEcologies.git/" target="_blank">GitHub - Not released</a>
                            <p>
                                I was commissioned by Invisible Flock to create a website to present a stand alone project; Land Body Ecologies.
                                <br/>
                                Since early 2019 the Land body Ecologies Research group has been working together to explore the relationship between mental health and ecosystem health.
                                <br/>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 projects">
                            <h1>ESA</h1>
                            <a className="links" href="http://www.egscc.esa.int/" target="_blank">EGS-CC</a>
                            <p>
                                Worked for European Space Agency contracted with Atos Prague in the Space and Avionics division.
                                <br/>
                                Developing Software for communication between spacecraft and ground stations, i.e. Mission Control System
                                <br/>
                                Contributions on the EGS-CC Project, including; fixing errors, maintaining and improving old code and using GSTVi
                                software
                                <br/>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 projects">
                            <h1>LOST LIFE</h1>
                            <a className="links" href="https://www.youtube.com/watch?v=Z6RzhhYkhgg" target="_blank">YouTube - gameplay</a>
                            <p>
                                Lost life is a game, which shows that games do not have to be only about killing and bloody massacres. On the other hand, they can inspire the player, teach something new and entertaining at the very same time. The game metaphorically uses characters as a representation of "evil" and "good". It is a single player, third-person, behind the camera, 3D, PC and console game programmed in a Unity engine, modeled and animated in the Autodesk Maya.                        <br/>
                                <br/>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default It;