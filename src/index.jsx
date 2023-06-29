// initial test, comment out later
console.log('test to make sure the JSX is loaded');

/* Utilizing "Big State" design, see design doc.
1. pull data from DB.
2. create state 
4. Create cat element for each cat in state, passing in name and date via props. 

Cat Element:
  cat name and date is passed in via props.
  use cat name to generate pic link. 
  surrounding div for margin/size control. 

  pic (name.jpg, and set a classname of catPic for sizing via CSS.)
  last seen: date (passed in via props)
  button (calls BE to update DB and then updates state. State change should cause rerender.)

*/

//imports and setup stuff. 
import React from 'react';
import {createRoot} from 'react-dom/client';
import './styling.css';
import {useState} from "react";


//main logic flow, as per design doc and notes here. 
export default function UI() {
  return(
    <div>
      <p>Testing to see if default function is exporting and rendering</p>
    </div>  
    )

}



//supporting functions
function catElement(catName, lastSighting){
  const catPicString = catName + ".jpg"
  return(
    <div className="catElement">
      <img src={catPicString} alt="Picture of a cat" className="catPic"></img>
      <p>{catName} was last seen: {lastSighting}</p>
      <button type="button" className="catButton" onClick={updateSighting}>I saw {catName} today.</button>
    </div>
  );
}




//Render to the dom. 
const root = createRoot(document.getElementById('root'));
root.render(<UI />);
