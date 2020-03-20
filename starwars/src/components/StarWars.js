import React, {useState} from "react";

import styled from "styled-components";


const CardStyling = styled.div`
    background-color:white;
    border:3px solid pink;
    width: 20%;
    border-radius: 15px;
    margin: 3% auto;
    padding-top:1%;
    
`;

const InnerStyling = styled.div`
    
`;

const ImgStyling = styled.img`
    width:80%;
    height:auto;
`;


const StarWars = (props) => {
    console.log(props);
    
    return (
        
        <CardStyling className="cardStyle">
            <InnerStyling>
                <div>
                   <ImgStyling src={props.image}/> 
                </div>
                <h1>{props.name}</h1>
                <p>Status: {props.status}</p>
                <p>Species: {props.species}</p>
                <p>Gender: {props.gend}</p>

            </InnerStyling>    
        </CardStyling>

        
    )
}

export default StarWars;


                