import React from 'react';
import {useHistory} from "react-router-dom";


function TestPageTwo() {
    const history = useHistory()

    return (
        <div>
            <h1>TEST PAGE TWO</h1>
            <button onClick={()=> {
                history.push('/')
            }}>Go to page 1</button>
        </div>
    )
}
export default TestPageTwo
