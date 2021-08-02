import React from 'react';
import "./_references.scss";
import {useStore} from "../store/store";
import SVG from "react-inlinesvg";
import p03 from "../assets/p03.svg";
import p04 from "../assets/p04.svg";
import p05 from "../assets/p05.svg";
import p07 from "../assets/p07.svg";
import p09 from "../assets/p09.svg";
import p11 from "../assets/p11.svg";
import p13 from "../assets/p13.svg";
import p15 from "../assets/p15.svg";
import p19 from "../assets/p19.svg";
import p21 from "../assets/p21.svg";
import p23 from "../assets/p23.svg";
import p25 from "../assets/p25.svg";
import p27 from "../assets/p27.svg";
import p28 from "../assets/p28.svg";
import p29 from "../assets/p29.svg";

function References() {

    const references = useStore(state => state.references);
    const setReferences = useStore(state => state.setReferences);

    function close() {
        setReferences(null);
    }

    return (
        <div className="references" style={{"display": (references !== null) ? "flex" : "none"}} onClick={close}>
            {
                {
                    0: <SVG src={p03} class="vect"/>,
                    1: <SVG src={p04} class="vect"/>,
                    2: <SVG src={p05} class="vect"/>,
                    3: <SVG src={p07} class="vect"/>,
                    4: <SVG src={p09} class="vect"/>,
                    5: <SVG src={p11} class="vect"/>,
                    6: <SVG src={p13} class="vect"/>,
                    7: <SVG src={p15} class="vect"/>,
                    8: <SVG src={p19} class="vect"/>,
                    9: <SVG src={p21} class="vect"/>,
                    10: <SVG src={p23} class="vect"/>,
                    11: <SVG src={p25} class="vect"/>,
                    12: <SVG src={p27} class="vect"/>,
                    13: <SVG src={p28} class="vect"/>,
                    14: <SVG src={p29} class="vect"/>
                }
                [references]
            }
        </div>
    )
}

export default References
