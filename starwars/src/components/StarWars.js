import React, {useState} from "react";

import styled from "styled-components";


const CardStyling = styled.div`
    background-color:white;
    border:3px solid pink;
    width: 20%;
    border-radius: 15px;
    display:flex;
    justify-content:center;
    align-items: center;
    
`;

const InnerStyling = styled.div`
    
`;

const StarWars = (props) => {
    console.log(props);
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        
        <CardStyling className="cardStyle">
            <InnerStyling>
                <h1>{props.name}</h1>

                <p>Status: {props.status}</p>
                <p>Species: {props.species}</p>
                <p>Gender: {props.gend}</p>

            </InnerStyling>    
        </CardStyling>

        
    )
}

export default StarWars;


                