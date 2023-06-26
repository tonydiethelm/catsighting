console.log('test to make sure the JSX is loaded');

import {useState} from "react";


function catElement(catName, lastSighting){
  return(
    <div className="catElement">
      <img src=`{catName}.jpg alt="Picture of a cat"></img>
      <p>{catName} was last seen: {lastSighting}</p>  


    </div>
  );
}