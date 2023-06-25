/* What this needs to do.

I will have a FE that pull do a GET request for last time someone 
the cats, and a POST request to update that time in the DB.

I need this to respond to the GET request and properly query the DB. 
I need this to respond to the POST request and update the date/timestamp in the DB.
DB is redis on home network. "services" box. 



Done:
set up all the boilerplate, imports, listen, port, etc. 
handle basic 404 error. 


In progress:
Write simple GET and POST routes that respond with fake times and respond to fake times, so I can write the FE while I figure out the DB calls. 

To Do:
connect to redis DB
figure out redis commands to get the data I want.
Read up on setting which DB to read from in Redis, and naming them.
set up error handling. 



*/

//set up everything
import express from 'express';
import holler from '@tonydiethelm/holler';	//console logging during testing.
import fakeDate from './fakeDate.js';
import fakeDateWrite from './fakeDateWrite.js';

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());	//automagically read JSON.


//Hello world to start. Comment out later. 

app.get("/",
	(request, response) => {response.send("Hello, world!")}
);


app.get("/",
	holler,
	fakeDate,
	holler,
	(request, response) => {response.status(200).send(response.fakeDate)}
);

app.post("/",
  holler,
  fakeDateWrite,
  holler,
  (request, response) => {response.status(200).send("Written to DB")}
);




//handle wrong URIs
app.use('*', 
  (request, response) => {response.status(404).json('Sorry, we don\'t have that here.')
});

//listen on port. 
app.listen(port, () => {console.log("Server listening on port", port);});
