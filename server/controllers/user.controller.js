/*This file contains the definitions of the controller methods that are used in the user route
declarations as callbacks to be executed when a route request is received by the server.*/

/*lodash is a JavaScript library that provides utility functions for common programming tasks,
including the manipulation of arrays and objects.*/
import extend from 'lodash/extend';

/*This controller makes use of the errorHandler helper to respond to route requests with meaningful
messages when a Mongoose error occurs.*/
import errorHandler from '../helpers/dbErrorHandler';
import User from '../models/user.model';

//Creating a new user
/*This function creates a new user with the user JSON object that's received in the POST request from
the frontend within req.body. The call to user.save attempts to save the new user in the database after
Mongoose has performed a validation check on the data. Consequently, an error or success response is
returned to the requesting client.
The create function is defined as an asynchronous function with the async keyword, allowing us to use
await with user.save(), which returns a Promise. Using the await keyword inside an async function causes
this function to wait until the returned Promise resolves, before the next lines of code are executed.
If the Promise rejects, an error is thrown and caught in the catch block.
*/
const create = async (req, res) => {
    const user = new User( req.body )
    try {
        await user.save()
        return res.status(200).json({
            message: 'Successfully signed up!'
        })
    }
    catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


const list = (req, res) => { … }
const userByID = (req, res, next, id) => { … }
const read = (req, res) => { … }
const update = (req, res, next) => { … }
const remove = (req, res, next) => { … }

export default { create, userByID, read, list, remove, update }