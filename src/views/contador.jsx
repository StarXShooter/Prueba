import React, { useState } from 'react';


function Contador() {
    const [count, setCount] = useState(0);
  
    function Add() {
      setCount(prevCount => prevCount + 1);
    }
    function Rest() {
        setCount(prevCount => prevCount - 1);
      }
    const mystyle = {
        margin:4,
        backgroundColor: "Black",
        color: "white",
        padding: 8,
        borderRadius: 8,
        textTransform: "upperCase",
        paddingLeft: 32,
        paddingRight: 32
      };

    return (
      <div>
        <h1>{count}</h1>
        <button style={mystyle} onClick={Add}>ADD</button>
        <button style={mystyle} onClick={Rest}>REST</button>
      </div>
    );
  }

  
export default Contador;