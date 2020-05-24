import express from 'express';
import path from 'path';

/*bodyParser is a middleware to handle the complexities of parsing streamable request objects
so that we can simplify browser-server communication by exchanging JSON in the request body*/
import bodyParser from 'body-parser';

/*Cookie parsing middleware to parse and set cookies in request objects.*/
import cookieParser from 'cookie-parser';

/*Compression middleware that will attempt to compress response bodies for all requests that
traverse through the middleware.*/
import compress from 'compression';

/*Middleware to enable cross-origin resource sharing (CORS).*/
import cors from 'cors';

/*Collection of middleware functions to help secure Express apps by setting various HTTP headers.*/
import helmet from 'helmet';

import Template from '../template';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import devBundle from './devBundle'; //comment out before building for production !!!

const app = express();

/*In development mode, when this line is executed, Webpack will compile and bundle the React
code to place it in dist/bundle.js.*/
devBundle.compile(app);     //comment out before building for production !!!

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

// Serving static files from the dist folder
/*Webpack will compile client-side code in both development and production mode, then place the
bundled files in the dist folder. These two lines configure theExpress app to return static files
from the dist folder when the requested route starts with /dist.
*/
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// Rendering the template at the root
/*When the server receives a request at the root URL /, we will render template.js in the browser.*/
app.get('/', (req, res) => {
    res.status(200).send(Template())
    })

/*All routes and API endpoints need to be mounted on the Express app so that they can be accessed from
the client-side.*/
app.use('/', userRoutes)
app.use('/', authRoutes)

//Auth error handling for express-jwt
/*We will handle auth-related errors thrown by express-jwt when it tries to validate JWT tokens in
incoming requests.
express-jwt throws an error named UnauthorizedError when a token cannot be validated for some reason.
We catch this error here to return a 401 status back to the requesting client. We also add a response
to be sent if other server-side errors are generated and caught here.
*/
app.use( (err, req, res, next) =>{
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ 'error': err.name + ': ' + err.message })
    }
    else if (err) {
        res.status(400).json({"error" : err.name + ": " + err.message})
        console.log(err)
    }
})

export default app;