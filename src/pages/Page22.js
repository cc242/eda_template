import React from "react";
import References from "../references/References";
import {useStore} from "../store/store";
import SVG from "react-inlinesvg";
import bg from "../assets/bg.png";
import vect from "../assets/p22.svg";

function Page22() {
    const setReferences = useStore(state => state.setReferences);
    const onSVG = () => {

        const p22BtnSeraphin = document.querySelector("#p22-btn-seraphin");

        p22BtnSeraphin.addEventListener("click", e => {
            e.preventDefault();
            setReferences(13);
        });
    }

    return (
        <div>
            <img src={bg} class="bg"/>
            <SVG src={vect} class="vect" onLoad={onSVG}/>
        </div>
    )
}

export default Page22
