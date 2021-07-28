import React from "react";
import {useHistory} from "react-router-dom";
import SVG from "react-inlinesvg";
import bg from "../assets/bg.png";
import fg from "../assets/p10_fg.png";
import vect from "../assets/p10.svg";

function Page10() {
    const history = useHistory();
    const onSVG = () => {

        const btnSeraphin = document.querySelector("#btn-seraphin");
        const btnSeraphinExtension = document.querySelector("#btn-seraphin-extension");

        btnSeraphin.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page28");
        });

        btnSeraphinExtension.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page29");
        });
    }

    return (
        <div>
            <img src={bg} class="bg"/>
            <SVG src={vect} class="vect" onLoad={onSVG}/>
            <img src={fg} class="fg"/>
        </div>
    )
}

export default Page10
