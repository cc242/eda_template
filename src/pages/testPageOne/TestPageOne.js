import React from 'react';
import {useHistory} from "react-router-dom";


function TestPageOne() {
    const history = useHistory()

    return (
        <div>
        <h1>TEST PAGE ONE</h1>
        <button onClick={()=> {
            history.push('/testpagetwo')
        }}>Go to page two</button>
        </div>
    )
}
export default TestPageOne
