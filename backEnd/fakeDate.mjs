/* What I need this to do
get a date that is right now. 
Insert that into the express response in proper cat format. 
[{cat name: date}, {other cat name: date}]

*/
//setup
import {todaysDate} from './todaysDate.mjs'; 

//main code

export function fakeDate (request, response, next) {
  //const dateString = todaysDate();
  const dateString = "today";

  response.locals = [{name: 'Alfred', lastSighting: dateString}, {name: 'Beanie', lastSighting: dateString}];

  return next();

};

//module.exports = fakeDate;
