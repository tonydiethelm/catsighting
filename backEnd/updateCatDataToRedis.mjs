/* What I need this to do
updated cat state should be in request
jsonify if needed
connect to DB
update with new string
send "OK" response

[{cat name: date}, {other cat name: date}]
Do I pull data, jsonify, update? 
Or do I just send state in request, and push that to DB? 
No need to pull DB twice. 

*/

//setup
import redis from 'redis';
const connectionString = 'redis://services.shc:6379';

//main code
export async function updateCatDataToRedis (request, response, next) {
  //get updated state from FE 
  const updatedCats = request.body; //array of objects, auto deJSONified.
  const JSONifiedCats = JSON.stringify(updatedCats);
  
  //connect to DB
  const client = redis.createClient({url: connectionString})
  client.on('error', error => console.log('Redis Client Error', error));  
  await client.connect();

  //save to DB
  await client.set('cats', JSONifiedCats);

  return next();

};