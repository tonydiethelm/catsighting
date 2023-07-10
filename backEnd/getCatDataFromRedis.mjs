/* What I need this to do
get the cat data from redis
Insert that into the express response in proper cat format. 
[{cat name: date}, {other cat name: date}]

*/
//setup
import redis from 'redis';
const connectionString = 'redis://services.shc:6379';

//main code

export async function getCatDataFromRedis (request, response, next) {
  //connect to DB
  const client = redis.createClient({url: connectionString})
  client.on('error', error => console.log('Redis Client Error', error));  
  await client.connect();

  //stick cats data in response back to FE. 
  //FE will deJSONify it. 
  response.locals = await client.get('cats')

  return next();

};