import React from "react";
import {useHistory} from "react-router-dom";
import References from "../references/References";
import {useStore} from "../store/store";
import SVG from "react-inlinesvg";
import bg from "../assets/bg.png";
import vect from "../assets/p17.svg";

function Page17() {
    const history = useHistory();
    const setReferences = useStore(state => state.setReferences);
    const onSVG = () => {

        const tab1 = document.querySelector("#p17-tab-1");
        const tab3 = document.querySelector("#p17-tab-3");
        const p17BtnSeraphin = document.querySelector("#p17-btn-seraphin");

        tab1.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page16");
        });

        tab3.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page18");
        });

        p17BtnSeraphin.addEventListener("click", e => {
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

export default Page17
