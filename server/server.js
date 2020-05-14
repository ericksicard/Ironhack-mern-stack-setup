import express from 'express';

import devBundle from './devBundle'; //commente it out when building the application code for production !!!!!!!

const app = express();

/*In development mode, when this line is executed, Webpack will compile and bundle the React
code to place it in dist/bundle.js.*/
devBundle.compile(app); //commente it out when building the application code for production !!!!!!!