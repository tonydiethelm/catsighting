/* What this needs to do...
Set up the DB with proper cat data

{cats: [{name: 'SlugBear', lastSighting: 'today'}, {name: 'Pan', lastSighting: 'today'}]}

As Redis is key:value, i need a key (cats) and my value (my array, as per above). But I'll need to JSONify my array. 

https://redis.io/docs/clients/nodejs/

*/


//setup stuff
import {todaysDate} from './todaysDate.mjs';
import redis from 'redis';
const port = 6379;
const server = "192.168.0.3";
const connectionString = 'redis://services.shc:6379';

//main
//connect to DB
const client = redis.createClient({url: connectionString})
client.connect()
.then(() => console.log('connected!'))
.catch((error) => console.log('We had an error: ', error))

//JSONify the data
const cats = [{name: 'SlugBear', lastSighting: 'today'}, {name: 'Pan', lastSighting: 'today'}]
const JSONcats = JSON.stringify(cats);
console.log('I am going to send...', JSONcats, typeof(JSONcats));

//write to DB


console.log(await client.set('cats', JSONcats)); // 'OK'
