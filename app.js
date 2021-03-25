//Set up fake Routes
const routes = require('./routes/routes');

// Require packages and set the port
const express = require('express');
const bodyParser = require('body-parser');
const port = 3002;
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    entended:true,
}))

// (5. Set up Routes) replace this app.get() with
// app.get('/',(request, response)=>{
//     // console.log(`URL: ${request.url}`);
//     response.send({
//         message:'Node.js and Express REST API'
//     });
// }) 

routes(app);

// Start the server
const server = app.listen(port, (error)=>{
    if (error) return console.log(`Error:${error}`);

    console.log(`Server listening on port ${server.address().port}`)
})