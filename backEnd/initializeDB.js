/* What this needs to do...
Set up the DB with proper cat data

{cats: [{name: 'SlugBear', lastSighting: 'today'}, {name: 'Pan', lastSighting: 'today'}]}

As Redis is key:value, i need a key (cats) and my value (my array, as per above). But I'll need to JSONify my array. 


*/


//setup stuff
import {todaysDate} from './todaysDate.mjs';
import redis from 'redis';


//main
//connect to DB
//JSONify the data
//write to DB

const client = redis.createClient({url: 'redis://service'})
client.on('error', err => console.log('Redis Server Error', err));

const cats = [{name: 'SlugBear', lastSighting: 'today'}, {name: 'Pan', lastSighting: 'today'}]
const JSONcats = JSON.stringify(cats);
console.log('I am going to send...', JSONcats);

console.log(await client.set('cats', JSONcats)); // 'OK'
