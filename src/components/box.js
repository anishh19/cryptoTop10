import React from "react";

function Box(props){
    return <div className="tile">
        <h1> #{props.rank}</h1>
        <h2> {props.name}</h2>
        <h3> Current Price : ${props.price}</h3>
    </div>
}

export default Box;