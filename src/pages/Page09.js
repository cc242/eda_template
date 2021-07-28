import React from "react";
import {useHistory} from "react-router-dom";
import SVG from "react-inlinesvg";
import bg from "../assets/bg.png";
import vect from "../assets/p09.svg";

function Page09() {
    const history = useHistory();

    function goToPreviousPage(e) {
        e.preventDefault();
        history.goBack();
    }

    return (
        <div class="overlay" onClick={goToPreviousPage}>
            <img src={bg} class="bg"/>
            <SVG src={vect} class="vect"/>
        </div>
    )
}

export default Page09
