import React from "react";



const StarWars = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.name}</h1>
    <p>Height: {props.height}cm</p>
    <p>Weight: {props.mass}kg</p>
            <p>Gender: {props.gend}</p>
            <p>Eye color: {props.eyeCol}</p>
            
        </div>
    )
}

export default StarWars;