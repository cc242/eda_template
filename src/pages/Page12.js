import React from "react";
import References from "../references/References";
import {useStore} from "../store/store";
import SVG from "react-inlinesvg";
import bg from "../assets/bg.png";
import vect from "../assets/p12.svg";

function Page12() {
    const setReferences = useStore(state => state.setReferences);
    const onSVG = () => {

        const p12BtnSeraphinExtension = document.querySelector("#p12-btn-seraphin-extension");

        p12BtnSeraphinExtension.addEventListener("click", e => {
            e.preventDefault();
            setReferences(14);
        });
    }

    return (
        <div>
            <img src={bg} class="bg"/>
            <SVG src={vect} class="vect" onLoad={onSVG}/>
        </div>
    )
}

export default Page12
