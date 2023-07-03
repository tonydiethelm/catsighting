// initial test, comment out later
console.log('test to make sure the JSX is loaded');

/* Utilizing "Big State" design, see design doc.
1. create state 
2. pull data from DB.
3. update state. 
4. Create cat element for each cat in state, passing in name and date via props. 

Cat Element:
  cat name and date is passed in via props.
  use cat name to generate pic link. 
  surrounding div for margin/size control. 

  pic (name.jpg, and set a classname of catPic for sizing via CSS.)
  last seen: date (passed in via props)
  button (calls BE to update DB and then updates state. State change should cause rerender.)

Done:
Set up boilerplate code, imports, etc.
render statement
set up basic app
  State
  fetch + update state
write cat element


ToDo:
CSS to prettify




*/

//imports and setup stuff. 
import React, {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import './styling.css';



//main logic flow, as per design doc and notes here. 
export default function App() {
  //create state
  const [cats, setCats] = useState([{name: "Test Cat", lastSighting: "today"}]);

  //get data on load
  useEffect(function getCatData(){
    const system = "http://localhost:3000";   //during testing
    //const system = "http://services:3000";  //during production
    fetch(system)
    .then(response => response.json())
    //.then(response => console.log('we fetched: ', response))
    .then(catData => setCats(catData))      //should be array of objects
    .catch(error => console.log('We had an error getting data from the BE and updating state: ', error))
  }, []);

  console.log('after fetch, cats is: ', cats)

  //set date on specific cat to today. 
  //needs index to change correct cat in cats/state.
  function updateSighting(index){
    setCats(cats[index].lastSighting = makeADate());
  }


  return(
  <div className='allCats'>

    {cats.map((oneCat, index) => <CatElement specificCat={oneCat} index={index}/>)}   

  </div>)

}



//supporting functions

function CatElement({specificCat}, index, updateSighting){
  const catPicString = "Public/" + specificCat.name + ".jpg"
  return(
    <div className="catElement" key={index}>
      <img src={catPicString} alt={`Picture of ${specificCat.name}`} className="catPic"></img>
      <p>{specificCat.name} was last seen: {specificCat.lastSighting}</p>
      <button type="button" className="catButton" onClick={() => updateSighting(index)}>I saw {specificCat.name} today.</button>
    </div>
  );
}

function makeADate(){
  const fullDate = new Date();
  const date = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();

  return (month + '/' + date + '/' + year);
}


//Render to the dom. 
const root = createRoot(document.getElementById('root'));
root.render(<App />);
