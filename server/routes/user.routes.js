import express from 'express'
import userCtrl from '../controllers/user.controller'

/*The user routes that are defined here will use express.Router() to define route paths
with the relevant HTTP methods and assign the corresponding controller function that
should be called when these requests are received by the server.
We will keep the user routes simplistic by using the following:
    /api/users for the following:
        - Listing users with GET
        - Creating a new user with POST
    /api/users/:userId for the following:
        - Fetching a user with GET
        - Updating a user with PUT
        - Deleting a user with DELETE
*/
const router = express.Router()

/*When the server receives requests at each of these defined routes, the corresponding
controller functions are invoked. The functionality for each of these controller methods
will be defined and exported from the user.controller.js file.
*/
router.route('/api/users')
    .get(userCtrl.list)
    .post(userCtrl.create)

router.route('/api/users/:userId')
    .get(userCtrl.read)
    .put(userCtrl.update)
    .delete(userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router;