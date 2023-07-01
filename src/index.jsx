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
import React, {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import './styling.css';



//main logic flow, as per design doc and notes here. 
export default function App() {
  console.log('entering main app.')
  //create state
  const [cats, setCats] = useState([]);


  //get data on load
  const system = "http://localhost:3000";   //during testing
  //const system = "http://services:3000";  //during production
  const getCatData = () => {
    fetch(system)
    .then(response => response.json())
    .then(catData => setCats(catData))      //should be array of objects
    .catch(error => console.log('We had an error getting data from the BE: ', error))
  }

  //create elements from state
  console.log(cats);



  return(<div><p>Testing to see if default function is exporting and rendering. {cats}</p></div>)

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

async function getCatDataFromDB(){
  //do a fetch and return the response after deJSONifying. 
  const response = await fetch('http://localhost:3000', {
    //method: 'GET', //default
    //mode: 'no-cors',  //handled in express. 
    //headers: {'Content-Type': 'application/json'}
  });
  const catDataFromDB = await response.json();
  console.log('cat data from DB is: ', catDataFromDB);

  return catDataFromDB;
}



//Render to the dom. 
const root = createRoot(document.getElementById('root'));
root.render(<App />);
