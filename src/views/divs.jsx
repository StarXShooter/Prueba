import React, {useState} from "react";


const getRandomColor = () => {
  const colors = ['red', 'orange', 'green', 'blue']
  return colors[Math.floor(Math.random() * colors.length)];
}

function Divs() {
  const [count, setCount ] = useState(0)

  setInterval(() => {
    let newCount = count + 1
    setCount(newCount)
  }, 10000);

  const n = 100;
 
  return (
  
    [...Array(n)].map((el, index) => <div><div key={index}><p style={{backgroundColor: getRandomColor()}}>{index}</p></div></div>
      )
  )
}


export default Divs;