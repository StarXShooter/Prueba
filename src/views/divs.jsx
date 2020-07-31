import React from "react";


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  ("#colorpad").css("background-color", getRandomColor());
}

function Divs() {
  const n = 100;
 
  return (
    [...Array(n)].map((el, index) => <div key={index}>Divs</div>)
  )
}


export default Divs;