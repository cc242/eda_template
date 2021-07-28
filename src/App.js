import React from 'react';
import {Switch, Route, useLocation, useHistory} from 'react-router-dom';
import SVG from "react-inlinesvg";

import './App.scss';
import vect from "./assets/nav_main.svg";
import Page01 from "./pages/Page01";
import Page03 from "./pages/Page03";
import Page04 from "./pages/Page04";
import Page05 from "./pages/Page05";
import Page06 from "./pages/Page06";
import Page07 from "./pages/Page07";
import Page08 from "./pages/Page08";
import Page09 from "./pages/Page09";
import Page10 from "./pages/Page10";
import Page11 from "./pages/Page11";
import Page28 from "./pages/Page28";
import Page29 from "./pages/Page29";
import References from "./references/References";
import {useStore} from "./store/store";

function App() {
    const history = useHistory();
    const location = useLocation();
    const setReferences = useStore(state => state.setReferences);

    const onSVG = () => {

        const navBtnR = document.querySelector("#nav-btn-r");
        const navBtnPI = document.querySelector("#nav-btn-pi");
        const navBtnMenu = document.querySelector("#nav-btn-burger");
        const navBtnHome = document.querySelector("#nav-btn-home");

        navBtnR.addEventListener("click", e => {
            e.preventDefault();
            switch (location.pathname) {
                case "/":
                    setReferences(0)
                    // history.push("/Page03");
                    break;
                case "/Page06":
                    setReferences(1)
                    // history.push("/Page07");
                    break;
                case "/Page08":
                    setReferences(2)
                    // history.push("/Page09");
                    break;
                case "/Page10":
                    setReferences(3)
                    // history.push("/Page11");
                    break;
                default:
                // Do nothing
            }
        });

        navBtnPI.addEventListener("click", e => {
            e.preventDefault();
            // TBC
        });

        navBtnMenu.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page06");
        });

        navBtnHome.addEventListener("click", e => {
            e.preventDefault();
            history.push("/");
        });
    }

    const Navigation = () => {
        return (
            <SVG id="nav" src={vect} class="vect" onLoad={onSVG}/>
        );
    }

    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Page01} exact/>
                <Route path="/Page03" component={Page03} exact/>
                <Route path="/Page04" component={Page04} exact/>
                <Route path="/Page05" component={Page05} exact/>
                <Route path="/Page06" component={Page06} exact/>
                <Route path="/Page07" component={Page07} exact/>
                <Route path="/Page08" component={Page08} exact/>
                <Route path="/Page09" component={Page09} exact/>
                <Route path="/Page10" component={Page10} exact/>
                <Route path="/Page11" component={Page11} exact/>
                <Route path="/Page28" component={Page28} exact/>
                <Route path="/Page29" component={Page29} exact/>
            </Switch>
            <Navigation/>
            <References/>
        </div>
    );
}

export default App;
