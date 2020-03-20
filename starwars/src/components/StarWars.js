import React from "react";

import styled from "styled-components";


const CardStyling = styled.div`
    background-color:white;
    width: 20%;
    border-radius: 15px;
    margin: 3% auto;
    padding-top:1%;
     
`;


const ImgStyling = styled.img`
    width:80%;
    height:auto;
`;


const StarWars = (props) => {
    console.log(props);
    
    return (
        
        <CardStyling className="cardStyle">
            <div>
                <div>
                   <ImgStyling src={props.image}/> 
                </div>
                <h1>{props.name}</h1>
                <p>Status: {props.status}</p>
                <p>Species: {props.species}</p>
                <p>Gender: {props.gend}</p>

            </div>    
        </CardStyling>

        
    )
}

export default StarWars;


                