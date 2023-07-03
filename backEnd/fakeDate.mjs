/* What I need this to do
get a date that is right now. 
Insert that into the express response in proper cat format. 
[{cat name: date}, {other cat name: date}]

*/

//main code

export function fakeDate (request, response, next) {
  const fullDate = new Date();
  const date = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();
  const dateString = month + '/' + date + '/' + year;

  response.locals = [{name: 'Alfred', lastSighting: dateString}, {name: 'Beanie', lastSighting: dateString}, {name: 'Charlie', lastSighting: dateString}];

  return next();

};

//module.exports = fakeDate;
