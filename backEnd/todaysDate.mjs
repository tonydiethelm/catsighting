/* What I need this to do
spit out todays date in month/day/year format
*/

export function todaysDate(){
  const fullDate = new Date();
  const date = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();

  return(month + '/' + date + '/' + year);
}
