/* What this needs to do.

I will have a FE that pull do a GET request for last time someone 
the cats, and a POST request to update that time in the DB.

I need this to respond to the GET request and properly query the DB. 
I need this to respond to the POST request and update the date/timestamp in the DB.
DB is redis on home network. "services" box. 



Done:
set up all the boilerplate, imports, listen, port, etc. 
handle basic 404 error. 
write fake date and fake date write modules. 
Write simple GET and POST routes that respond with fake times and respond to fake times, so I can write the FE while I figure out the DB calls. 


In progress:


To Do:
connect to redis DB
figure out redis commands to get the data I want.
Read up on setting which DB to read from in Redis, and naming them.
set up error handling. 
write modules/middleware for writing and reading from DB. 


*/

//set up everything
import express from 'express';
import holler from '@tonydiethelm/holler';	//console logging during testing.
import cors from 'cors';
import {fakeDate} from './fakeDate.mjs';
import {fakeDateWrite} from './fakeDateWrite.mjs';
import {getCatDataFromRedis} from './getCatDataFromRedis.mjs';
import { updateCatDataToRedis } from './updateCatDataToRedis.mjs';

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());	//automagically read JSON.
app.use(cors());  //automagically allow CORS requests


//Hello world to start. Comment out later. 
/*
app.get("/",
	(request, response) => {response.send("Hello, world!")}
);
*/

app.get("/",
	//holler,
	//fakeDate,
  getCatDataFromRedis,
	holler,
	(request, response) => {response.status(200).send(response.locals)}
);

app.post("/",
  holler,
  updateCatDataToRedis,
  holler,
  (request, response) => {response.status(200).send("Written to DB")}
);




//handle wrong URIs
app.use('*', 
  (request, response) => {response.status(404).json('Sorry, we don\'t have that here.')
});

//listen on port. 
app.listen(port, () => {console.log("Server listening on port", port);});
