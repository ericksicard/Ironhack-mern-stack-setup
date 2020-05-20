/*This file contains the definitions of the controller methods that are used in the user route
declarations as callbacks to be executed when a route request is received by the server.*/

/*lodash is a JavaScript library that provides utility functions for common programming tasks,
including the manipulation of arrays and objects.*/
import extend from 'lodash/extend';

/*This controller makes use of the errorHandler helper to respond to route requests with meaningful
messages when a Mongoose error occurs.*/
import errorHandler from '../helpers/dbErrorHandler';
import User from '../models/user.model';

const create = (req, res, next) => { … }
const list = (req, res) => { … }
const userByID = (req, res, next, id) => { … }
const read = (req, res) => { … }
const update = (req, res, next) => { … }
const remove = (req, res, next) => { … }

export default { create, userByID, read, list, remove, update }