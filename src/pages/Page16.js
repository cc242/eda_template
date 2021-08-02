import React from "react";
import {useHistory} from "react-router-dom";
import References from "../references/References";
import {useStore} from "../store/store";
import SVG from "react-inlinesvg";
import bg from "../assets/bg.png";
import vect from "../assets/p16.svg";

function Page16() {
    const history = useHistory();
    const setReferences = useStore(state => state.setReferences);
    const onSVG = () => {

        const tab2 = document.querySelector("#p16-tab-2");
        const tab3 = document.querySelector("#p16-tab-3");
        const p16BtnSeraphin = document.querySelector("#p16-btn-seraphin");

        tab2.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page17");
        });

        tab3.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page18");
        });

        p16BtnSeraphin.addEventListener("click", e => {
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

export default Page16
