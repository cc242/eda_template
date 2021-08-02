import React from 'react';
import {Switch, Route, useLocation, useHistory} from 'react-router-dom';
import SVG from "react-inlinesvg";
import References from "./references/References";
import {useStore} from "./store/store";
import './App.scss';
import vect from "./assets/nav_main.svg";
import Page01 from "./pages/Page01";
import Page06 from "./pages/Page06";
import Page08 from "./pages/Page08";
import Page10 from "./pages/Page10";
import Page12 from "./pages/Page12";
import Page14 from "./pages/Page14";
import Page16 from "./pages/Page16";
import Page17 from "./pages/Page17";
import Page18 from "./pages/Page18";
import Page20 from "./pages/Page20";
import Page22 from "./pages/Page22";
import Page24 from "./pages/Page24";
import Page26 from "./pages/Page26";

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
                    setReferences(0);
                    break;
                case "/Page06":
                    setReferences(3);
                    break;
                case "/Page08":
                    setReferences(4);
                    break;
                case "/Page10":
                    setReferences(5);
                    break;
                case "/Page12":
                    setReferences(6);
                    break;
                case "/Page14":
                    setReferences(7);
                    break;
                case "/Page16":
                case "/Page17":
                case "/Page18":
                    setReferences(8);
                    break;
                case "/Page20":
                    setReferences(9);
                    break;
                case "/Page22":
                    setReferences(10);
                    break;
                case "/Page24":
                    setReferences(11);
                    break;
                case "/Page26":
                    setReferences(12);
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
        <div>
            <div className="App">
                    <Switch>
                        <Route path="/" component={Page01} exact/>
                        <Route path="/Page06" component={Page06} exact/>
                        <Route path="/Page08" component={Page08} exact/>
                        <Route path="/Page10" component={Page10} exact/>
                        <Route path="/Page12" component={Page12} exact/>
                        <Route path="/Page14" component={Page14} exact/>
                        <Route path="/Page16" component={Page16} exact/>
                        <Route path="/Page17" component={Page17} exact/>
                        <Route path="/Page18" component={Page18} exact/>
                        <Route path="/Page20" component={Page20} exact/>
                        <Route path="/Page22" component={Page22} exact/>
                        <Route path="/Page24" component={Page24} exact/>
                        <Route path="/Page26" component={Page26} exact/>
                    </Switch>
                    <Navigation/>
                    <References/>
            </div>
        </div>
    );
}

export default App;
