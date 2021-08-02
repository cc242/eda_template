import React from "react";
import {useHistory} from "react-router-dom";
import SVG from "react-inlinesvg";
import bg from "../assets/bg.png";
import vect from "../assets/p06.svg";

function Page06() {
    const history = useHistory();
    const onSVG = () => {

        const btn1 = document.querySelector("#p06-btn-1");
        const btn2 = document.querySelector("#p06-btn-2");
        const btn3 = document.querySelector("#p06-btn-3");
        const btn4 = document.querySelector("#p06-btn-4");
        const btn5 = document.querySelector("#p06-btn-5");
        const btn6 = document.querySelector("#p06-btn-6");
        const btn7 = document.querySelector("#p06-btn-7");
        const btn8 = document.querySelector("#p06-btn-8");

        btn1.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page08");
        });

        btn2.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page10");
        });

        btn3.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page12");
        });

        btn4.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page14");
        });

        btn5.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page16");
        });

        btn6.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page20");
        });

        btn7.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page22");
        });

        btn8.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page24");
        });
    }

    return (
        <div>
            <img src={bg} class="bg"/>
            <SVG src={vect} class="vect" onLoad={onSVG}/>
        </div>
    )
}

export default Page06
