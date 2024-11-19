import React from "react";
import './App.css';
import image from './Images/koro.jpeg'
import InputJest from "./InputJest/InputJest";
import CatFacts from "./CatFacts/CatFacts";

function App() {
  return (
    <div className="App">
      <InputJest/>
      <br/>
      <p>First React Test case</p>
      <img src={image} alt="Test image" height={100} title="Koro sensei"/>
      

      <CatFacts/>
    </div>
  );
}

export default App;
