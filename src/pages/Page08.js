import React from "react";
import SVG from "react-inlinesvg";
import bg from "../assets/bg.png";
import vect from "../assets/p08.svg";

function Page08() {
    return (
        <div>
            <img src={bg} class="bg"/>
            <SVG src={vect} class="vect"/>
        </div>
    )
}

export default Page08
