import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWars from "./StarWars";

const StarWarsList = () => {

    const [char, setChar] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.co/api/people/?format=json')
        .then( response => {
            console.log(response.data.results);
            setChar(response.data.results)
        })
        .catch( error => {
            console.log('YOU GOT AN ERROR', error);
        })
    }, [])

    return (
        <div className="charInfo">
            {char.map((e, i) => (
                <StarWars key={i} results={e} name={e.name} gend={e.gender} eyeCol={e.eye_color} height={e.height} mass={e.mass}/>
            ))}
            
        </div>
    )
}

export default StarWarsList;