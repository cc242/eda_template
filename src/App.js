import React from 'react';
import {Switch, Route, useLocation, useHistory} from 'react-router-dom';


import './App.scss';
import TestPageOne from "./pages/testPageOne/TestPageOne";
import TestPageTwo from "./pages/testPageTwo/TestPageTwo";

function App() {

    return (
        <div>
            <div className="App">
                    <Switch>
                        <Route path="/" component={TestPageOne} exact/>
                        <Route path="/testpagetwo" component={TestPageTwo} exact/>
                    </Switch>
            </div>
        </div>
    );
}

export default App;
