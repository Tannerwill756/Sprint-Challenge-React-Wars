import React from 'react';
import './App.css';
import StarWarsList from "./components/StarWarsList";
import styled from "styled-components";


const ContainerStyle = styled.div`
  max-width:100%;
  width:100%;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <ContainerStyle className="App">
      <h1 className="Header">Rick and Morty</h1>
      <StarWarsList />
    </ContainerStyle>
  );
}

export default App;
