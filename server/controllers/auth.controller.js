// AUTH CONTROLLER
/*The auth controller functions will not only handle requests to the signin and signout routes,
but also provide JWT and express-jwt functionality to enable authentication and authorization for
protected user API endpoints.*/

import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import config from './../../config/config';

//Signin
/*When the Express app gets a POST request at '/auth/signin', it executes the signin controller function.
The POST request object receives the email and password in req.body. This email is used to retrieve a
matching user from the database. Then, the password authentication method defined in UserSchema is used to
verify the password that's received in req.body from the client.
If the password is successfully verified, the JWT module is used to generate a signed JWT using a secret key
and the user's _id value.
Then, the signed JWT is returned to the authenticated client, along with the user's details. Optionally, we
can also set the token to a cookie in the response object so that it is available to the client-side if cookies
are the chosen form of JWT storage. On the client-side, this token must be attached as an Authorization header
when requesting protected routes from the server. To sign-out a user, the client-side can simply delete this
token depending on how it is being stored.
*/
const signin = async (req, res) => {
    try {
        let user = await User.findOne({ 'email': req.body.email })

        if (!user) return res.status(401).json({ error: 'User not found'})
        if (!user.authenticate(req.body.password)) return res.status(401).send({ error: 'Email and password do not match.'})

        const token = jwt.sign({ _id: user._id }, config.jwtSecret);
        res.cookie('t', token, { expire: new Date() + 9999 })

        return res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    }
    catch(err) {
        return res.status(401).json({ error: 'Could not sign in'})
    }
}


//Signout
/*When the Express app gets a GET request at '/auth/signout', it executes the signout controller function.
The signout function clears the response cookie containing the signed JWT. This is an optional endpoint and
not really necessary for auth purposes if cookies are not used at all in the frontend.
With JWT, user state storage is the client's responsibility, and there are multiple options for client-side
storage besides cookies. On signout, the client needs to delete the token on the client-side to establish
that the user is no longer authenticated. On the server-side, we can use and verify the token that's generated
at sign-in to protect routes that should not be accessed without valid authentication.
*/
const signout = (req, res) => {
    res.clearCookie('t')
    return res.status(200).json({ message: 'Signed out'})
}


const requireSignin = …
const hasAuthorization = (req, res) => { … }

export default { signin, signout, requireSignin, hasAuthorization }