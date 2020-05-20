import mongoose, { Schema } from 'mongoose';
import crypto from 'crypto'

/*The mongoose.Schema() function takes a schema definition object as a parameter to
generate a new Mongoose schema object that will specify the properties or structure
of each document in a collection.*/
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    hashed_password: {
        type: String,
        required: "Password is required"
    },
    salt: String
})

/*The password string that's provided by the user is not stored directly in the user
document. Instead, it is handled as a virtual field.*/
UserSchema
    .virtual('password')
    .set( function(password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password)
    })
    .get( function() {
        return this._password
    })

/*To add validation constraints to the actual password string that's selected by the end user, we need
to add custom validation logic and associate it with the hashed_password field in the schema.*/
UserSchema
    .path('hashed_password')
    .validate( function(value) {
        if (this._password && this._password.length < 6) {
            this.invalidate('password', 'Password must be at least 6 characters.')
        }
        if (this.isNew && !this._password) {
            this.invalidate('password', 'Password is required')
        } 
    }, null)

/*These UserSchema methods are used to encrypt the user-provided password string into a hashed_password
with a randomly generated salt value. The hashed_password and the salt are stored in the user document
when the user details are saved to the database on a create or update. Both the hashed_password and salt
values are required in order to match and authenticate a password string provided during user sign-in using
the authenticate method.*/
UserSchema.method = {
    /*This method is called to verify sign-in attempts by matching the user-provided
    password text with the hashed_password stored in the database for a specific user.*/
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },
    /*This method is used to generate an encrypted hash from the plain-text password and
    a unique salt value using the crypto module from Node.*/
    encryptPassword: function(password) {
        if (!password) return ''
        try {
            return crypto
                .createHmac('esr', this.salt)
                .update(password)
                .digest('hex')
        }
        catch(err) {
            return '';
        }
    },
    /*This method generates a unique and random salt value using the current timestamp at
    execution and Math.random().*/
    makeSalt: function() {
        return Math.round((new Date().valueOf() * Math.random())) + ''
    }

}

export default mongoose.model('User', UserSchema);