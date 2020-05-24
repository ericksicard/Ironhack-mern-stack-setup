//FETCH FOR USER CRUD
/*Here we will add methods for accessing each of the user CRUD API endpoints,
which the React components can use to exchange user data with the server and
database as required. */

//Creating a user
/*The create method will take user data from the view component, which is where we
will invoke this method. Then, it will use fetch to make a POST call at the create API
route, '/api/users', to create a new user in the backend with the provided data.
We return the response from the server as a promise. So, the component calling this method
can use this promise to handle the response appropriately, depending on what is returned
from the server.
*/
const create = async (user) => {
    try {
        let response = await fetch('/api/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json();
    }
    catch(err) { console.log(err) }
}

//Listing users
/*The list method will use fetch to make a GET call to retrieve all the users in the
database, and then return the response from the server as a promise to the component.
The returned promise, if it resolves successfully, will give the component an array
containing the user objects that were retrieved from the database. In the case of a
single user read, we will deal with a single user object instead.
*/
const list = async (signal) => {
    try {
        let response = await fetch('/api/users/', {
            method: 'GET',
            signal: signal
        })
        return await response.json();
    }
    catch(err) { console.log(err) }
}