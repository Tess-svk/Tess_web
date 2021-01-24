import React from 'react';
import "./Art.css";
import {Link} from "react-router-dom";
import ParticlesBk from "./ParticlesBk";
import baguetteBox from 'baguettebox.js/dist/baguetteBox.js';
import "baguettebox.js/dist/baguetteBox.min.css";

import logo from "../logo.svg";
import angel from "../angel.jpg";
import dragon from "../dragon.jpg";
import girl from "../girl.jpg";
import horse from "../horse.jpg";
import fox from "../lostL_fox.jpg";
import ghost from "../lostL_ghost.jpg";
import woman from "../woman.jpg";

class Art extends React.Component {
    render() {
        return (
            <div>
                <ParticlesBk/>
                <div className="main-logo">
                    <Link to="/"><img src={logo} className="my-logo" alt="logo"/></Link>
                </div>
                <div className="art-text">
                    <p>Hi!<br/> I have always been an artist in my heart and always will be. Here are few of my earlier creations.</p>
                </div>
                <div className="gallery art-text">
                    <div className="row">
                        <h2>Paintings</h2>
                        <a className="artImg col-sm-6 col-md-4" href={angel}><img src={angel} alt="angel"/></a>
                        <a className="artImg col-sm-6 col-md-4" href={girl}><img src={girl} alt="girl"/></a>
                        <a className="artImg col-sm-6 col-md-4" href={woman}><img src={woman} alt="woman"/></a>

                    </div>
                    <div className="row">
                        <h2>Drawings</h2>
                        <a className="artImg col-sm-6 col-md-4" href={dragon}><img src={dragon} alt="dragon"/></a>
                        <a className="artImg col-sm-6 col-md-4" href={horse}><img src={horse} alt="horse"/></a>
                    </div>
                    <div className="row">
                        <h2>Games</h2>
                        <h3>Lost Life</h3>
                        <a className="artImg col-sm-6 col-md-4" href={fox}><img src={fox} alt="fox"/></a>
                        <a className="artImg col-sm-6 col-md-4" href={ghost}><img src={ghost} alt="ghost"/></a>
                    </div>
                </div>
                <div className="art-text">
                    <p>More pictures available on my ArtStation profile.</p>
                    <p>You can visit my profile <a  className="art-link" href="https://www.artstation.com/littlecrazytess">here.</a></p>
                </div>
            </div>

        );
    }

    componentDidMount() {
        console.log("hello");
        baguetteBox.run('.gallery');
        console.log(baguetteBox);
    }

}

export default Art;