/*The "EditProfile" component allows the authorized user to edit their own profile information
in a form similar to the signup form.
Upon loading at '/user/edit/:userId', the component will fetch the user's information with
their ID after verifying JWT for auth, and then load the form with the received user information.
The form will allow the user to edit and submit only the changed information to the update fetch
call, and, on successful update, redirect the user to the Profile view with updated information.*/

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'

import auth from './../auth/auth-helper';
import { read, update } from './api-user.js';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
    },
    title: {
        margin: theme.spacing(2),
        color: theme.palette.protectedTitle
    },
    error: {
        verticalAlign: 'middle'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2)
    }
}))


export default function EditProfile({ match }) {
    const classes = useStyles()
    const jwt = auth.isAuthenticated();
    const [ values, setValues ] = useState({
        name: '',
        password: '',
        email: '',
        open: false,
        error: '',
        redirectToProfile: false
    });
    
    /* "EditProfile" will load the user information by fetching with "read" in useEffect using the userId
    parameter from match.params. It will gather credentials from "auth.isAuthenticated".
    */
    useEffect( () => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        read(
            { userId: match.params.userId },
            { t: jwt.token },
            signal
        )
        .then( data => {
            if (data && data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({ ...values, name: data.name, email: data.email })
            }
        })

        return function cleanup() {
            abortController.abort()
        }
    }, [match.params.userId])

   /*
   On form submit, the component will call the "update" fetch method with the userId, JWT and updated user data.   
   */
    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        }

        update(
            { userId: match.params.userId },
            { t: jwt.token },
            user
        )
        .then( data => {
            if (data && data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({ ...values, userId: data._id, redirectToProfile: true })
            }
        })
    }

    const handleChange = (event, name) => {
        setValues({ ...values, [name]: event.target.value })
    }

  /*Depending on the response from the server, the user will either see an error message or be redirected to
  the updated Profile page using the Redirect component.
  */
    if (values.redirectToProfile) {
        return (<Redirect to={ '/user/' + values.userId } />)
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" className={classes.title}>
                    Edit Profile
                </Typography>
                <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    value={values.name}
                    onChange={ event => handleChange(event, 'name')}
                    margin="normal"
                /><br/>
                <TextField 
                    id="email" 
                    type="email" 
                    label="Email" 
                    className={classes.textField} 
                    value={values.email} 
                    onChange={ event => handleChange(event, 'email')} 
                    margin="normal"/>
                <br/>
                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    className={classes.textField}
                    value={values.password}
                    onChange={ event => handleChange(event, 'password')}
                    margin="normal"
                /><br/>
                {
                    values.error && (
                        <Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>error</Icon>
                            {values.error}
                        </Typography>
                    )
                }
            </CardContent>
            <CardActions>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={clickSubmit}
                    className={classes.submit}
                >Submit</Button>
            </CardActions>
        </Card>
    )
}