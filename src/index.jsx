console.log('test to make sure the JSX is loaded');

import {useState} from "react";
const cats = ["Pan", "LokiSlugBear"];


function catElement(catName, lastSighting){
  return(
    <div className="catElement">
      <img src={catName} alt="Picture of a cat"></img>
      <p>{catName} was last seen: {lastSighting}</p>
      <button type="button" className="catButton" onClick={updateSighting}>I saw {catName} today.</button>

    </div>
  );
}





