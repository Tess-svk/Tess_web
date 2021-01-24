import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from "./components/Main";
import Art from "./components/Art";
import It from "./components/It";
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Switch>
                        <Route path="/" component={Main} exact/>
                        <Route path="/art" component={Art}/>
                        <Route path="/it" component={It}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;