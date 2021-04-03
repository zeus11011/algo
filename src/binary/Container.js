import Box from "./Box"
import "./css/Container.css"
import React, { useState } from 'react';


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}



function Container(){


  const [Boxes_arr, Increament] = useState([getRndInteger(0,100)]);
  var l = Boxes_arr.length;

  function onINcrease(){

    var t = getRndInteger(Boxes_arr[l-1],Boxes_arr[l-1]+10);

    Increament(prev => [...prev,t]);
    l = Boxes_arr.length;
    // console.log(Boxes_arr);
  }

  function onDecrease(){
    if ( l > 1) {
      Increament(prev => prev.slice(0,-1));

      l = Boxes_arr.length;
    }
    // console.log(Boxes_arr);
  }

  return(
    <div className="Container">
      <div className="Boxes">
        {
          Boxes_arr.map((box,index) =>
          <Box key={index} num = {box}/>
        )
        }
      </div>
      <div className= "Box">
        <button onClick= {onINcrease} className="but">+</button>
        <button onClick= {onDecrease} className="but">-</button>
      </div>
    </div>
  );
}

export default Container;
