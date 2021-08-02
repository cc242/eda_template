import React from "react";
import References from "../references/References";
import {useStore} from "../store/store";
import SVG from "react-inlinesvg";
import bg from "../assets/bg.png";
import fg from "../assets/p10_fg.png";
import vect from "../assets/p10.svg";

function Page10() {
    const setReferences = useStore(state => state.setReferences);
    const onSVG = () => {

        const p10BtnSeraphin = document.querySelector("#p10-btn-seraphin");
        const p10BtnSeraphinExtension = document.querySelector("#p10-btn-seraphin-extension");

        p10BtnSeraphin.addEventListener("click", e => {
            e.preventDefault();
            setReferences(13);
        });

        p10BtnSeraphinExtension.addEventListener("click", e => {
            e.preventDefault();
            setReferences(14);
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
