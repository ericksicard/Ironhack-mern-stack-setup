import { MongoClient } from 'mongodb';

import config from './../config/config'
import app from './express'


// Express app to start a server that listens on the specified port for incoming requests
app.listen(config.port, err => {
    if (err) console.log(err) 
    console.info('Server started on port %s.', config.port)
})

//Connecting the server to MongoDB
/*MongoClient is the driver that connects to the running MongoDB instance using its URL.
It allows us to implement the database-related code in the backend.*/
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/Ironhack-mern-stack-setup';
MongoClient.connect( url, (err, db) => {
    console.log("Connected successfully to mongodb server")
    db.close()
})