/* What I need this to do
console log what time it is. 

*/

//main code

export function fakeDateWrite (request, response, next) {

  const fullDate = new Date();
  const date = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();
  const dateString = month + '/' + date + '/' + year;

  console.log('Fake date is...', dateString, ' Totally fake writing to the DB.');

  return next();

};

//module.exports = fakeDateWrite;