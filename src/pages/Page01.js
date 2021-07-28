import React from "react";
import {useHistory} from "react-router-dom";
import {gsap} from "gsap";
import SVG from "react-inlinesvg";
import bg from "../assets/p01_bg.jpg";
import vect from "../assets/p01.svg";
import fg from "../assets/p01_fg.png";

function Page01() {
    const history = useHistory();
    const onSVG = () => {

        const btnStart = document.querySelector("#home-btn-start");
        const btnIndication = document.querySelector("#home-btn-indication");
        const btnAE = document.querySelector("#home-btn-ae");
        const btnPI = document.querySelector("#home-btn-pi");
	    const btnPIPlus = document.querySelector("#home-btn-pi-plus");
        const btnOpsumit = document.querySelector("#home-btn-opsumit");
        const btnUptravi = document.querySelector("#home-btn-uptravi");
        const btnVeletri = document.querySelector("#home-btn-veletri");
	    let accordionOpen = false;

        gsap.set(btnOpsumit, {y: -80, "clip-path": "inset(100% 0 0 0)"});
        gsap.set(btnUptravi, {y: -160, "clip-path": "inset(100% 0 0 0)"});
        gsap.set(btnVeletri, {y: -240, "clip-path": "inset(100% 0 0 0)"});
        gsap.set(btnPIPlus, {opacity: 0});

        btnStart.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page06");
        });

        btnIndication.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page04");
        });

        btnAE.addEventListener("click", e => {
            e.preventDefault();
            history.push("/Page05");
        });

        btnPI.addEventListener("click", e => {
            e.preventDefault();
            if (accordionOpen) {
                accordionOpen = false;
                gsap.set(btnPIPlus, {opacity: 1});
                gsap.to(btnOpsumit, { duration: .5, y: -80, "clip-path": "inset(100% 0 0 0)", ease: "power2.inOut" });
                gsap.to(btnUptravi, { duration: .5, y: -160, "clip-path": "inset(100% 0 0 0)", ease: "power2.inOut" });
                gsap.to(btnVeletri, { duration: .5, y: -240, "clip-path": "inset(100% 0 0 0)", ease: "power2.inOut" });
            }else{
                accordionOpen = true;
                gsap.set(btnPIPlus, {opacity: 0});
                gsap.to(btnOpsumit, { duration: .5, y: 0, "clip-path": "inset(0.1% 0 0 0)", ease: "power2.inOut" });
                gsap.to(btnUptravi, { duration: .5, y: 0, "clip-path": "inset(0.1% 0 0 0)", ease: "power2.inOut" });
                gsap.to(btnVeletri, { duration: .5, y: 0, "clip-path": "inset(0.1% 0 0 0)", ease: "power2.inOut" });
            }
        })
    
        btnOpsumit.addEventListener("click", e => {
            e.preventDefault();
            window.open("https://janssen-pi.co.uk/en/product-information/36", "_blank");
        });
    
        btnUptravi.addEventListener("click", e => {
            e.preventDefault();
            window.open("https://janssen-pi.co.uk/en/product-information/33", "_blank");
        });
    
        btnVeletri.addEventListener("click", e => {
            e.preventDefault();
            window.open("https://janssen-pi.co.uk/en/product-information/35", "_blank");
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

export default Page01
