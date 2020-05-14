import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';

import template from '../template'

//comment out before building for production !!!
import devBundle from './devBundle';

const app = express();

//comment out before building for production !!!
/*In development mode, when this line is executed, Webpack will compile and bundle the React
code to place it in dist/bundle.js.*/
devBundle.compile(app);

// Serving static files from the dist folder
/*Webpack will compile client-side code in both development and production mode,
then place the bundled files in the dist folder. These two lines configure the
Express app to return static files from the dist folder when the requested route
starts with /dist.
*/
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// Rendering templates at the root
/*When the server receives a request at the root URL /, we will render template.js in
the browser.*/
app.get('/', (req, res) => {
    res.status(200).send(template())
    })

// Express app to start a server that listens on the specified port for incoming requests
let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) console.log(err) 
    console.info('Server started on port %s.', port)
})

//Connecting the server to MongoDB
/*MongoClient is the driver that connects to the running MongoDB instance using its URL.
It allows us to implement the database-related code in the backend.*/
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/Ironhack-mern-stack-setup';
MongoClient.connect( url, (err, db) => {
    console.log("Connected successfully to mongodb server")
    db.close()
})