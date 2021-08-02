import React from "react";
import {useHistory} from "react-router-dom";
import SVG from "react-inlinesvg";
import bg from "../assets/bg.png";
import fg from "../assets/p24_fg.png";
import vect from "../assets/p24.svg";

function Page24() {
    const history = useHistory();
    const onSVG = () => {

        const p24BtnJourneys = document.querySelector("#p24-btn-patient-journeys");

        p24BtnJourneys.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page26");
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

export default Page24
