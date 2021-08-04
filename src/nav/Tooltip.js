import React from 'react';
import SVG from "react-inlinesvg";
import {gsap} from 'gsap';
import vect from "../assets/pi_tooltip.svg";

function Tooltip() {

    const onSVG = () => {
        const piBtnClose = document.querySelector("#pi-btn-close");
        const piBtnOpsumit = document.querySelector("#pi-btn-opsumit");
        const piBtnUptravi = document.querySelector("#pi-btn-uptravi");
        const piBtnVeletri = document.querySelector("#pi-btn-veletri");

        piBtnClose.addEventListener("click", e => {
            e.preventDefault();
            const t = document.querySelector("#pi-tooltip");
            gsap.to(t, { duration: 0.25, autoAlpha: 0, ease: "power2.inOut" });
        });

        piBtnOpsumit.addEventListener("click", e => {
            e.preventDefault();
            window.open("https://janssen-pi.co.uk/en/product-information/36", "_blank");
        });

        piBtnUptravi.addEventListener("click", e => {
            e.preventDefault();
            window.open("https://janssen-pi.co.uk/en/product-information/33", "_blank");
        });

        piBtnVeletri.addEventListener("click", e => {
            e.preventDefault();
            window.open("https://janssen-pi.co.uk/en/product-information/35", "_blank");
        });
    }

    return (
        <SVG id="pi-tooltip" src={vect} class="vect" onLoad={onSVG}/>
    )
}

export default Tooltip
