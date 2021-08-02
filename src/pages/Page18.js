import React from "react";
import {useHistory} from "react-router-dom";
import References from "../references/References";
import {useStore} from "../store/store";
import SVG from "react-inlinesvg";
import bg from "../assets/bg.png";
import vect from "../assets/p18.svg";

function Page18() {
    const history = useHistory();
    const setReferences = useStore(state => state.setReferences);
    const onSVG = () => {

        const tab1 = document.querySelector("#p18-tab-1");
        const tab2 = document.querySelector("#p18-tab-2");
        const p18BtnSeraphin = document.querySelector("#p18-btn-seraphin");

        tab1.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page16");
        });

        tab2.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page17");
        });

        p18BtnSeraphin.addEventListener("click", e => {
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

export default Page18
