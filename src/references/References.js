import React from 'react';
import "./_references.scss";
import {useStore} from "../store/store";
import RefExample from "./RefExample";

function References() {

    const references = useStore(state => state.references);
    const setReferences = useStore(state => state.setReferences);

    function close() {
        setReferences(null);
    }

    return (
        <div className="references" style={{"display": (references !== null) ? "flex" : "none"}} onClick={close}>
            <div className="references__inner">
                {
                    {
                        0: <RefExample />,
                        1: <div>Boop</div>
                    }
                    [references]
                }

            </div>
        </div>
    )
}

export default References
