import React, { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  function Add() {
    setCount((prevCount) => prevCount + 1);
  }
  function Rest() {
    setCount((prevCount) => prevCount - 1);
  }
  function Mult() {
    setCount((prevCount) => (prevCount * prevCount));
  }
  function Divid() {
    setCount((prevCount) => (prevCount / prevCount));
  }
  const mystyle = {
    margin: 4,
    backgroundColor: "Black",
    color: "white",
    padding: 8,
    borderRadius: 8,
    textTransform: "upperCase",
    paddingLeft: 32,
    paddingRight: 32,
  };

  return (
    <div>
      <h1>{count}</h1>
      <button style={mystyle} onClick={Add}>
        ADD
      </button>
      <button style={mystyle} onClick={Rest}>
        REST
      </button>
      <button style={mystyle} onClick={Mult}>
        Multiply
      </button>
      <button style={mystyle} onClick={Divid}>
        DIVIDE
      </button>
    </div>
  );
}

export default Contador;
