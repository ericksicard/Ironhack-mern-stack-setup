import React from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import unicornbikeImg from './../assets/images/unicornbike.jpg';

/*The JSS style objects defined here will be injected into the component using the hook returned by makeStyles.
The makeStyles hook API takes a function as an argument and gives access to our custom theme variables, which
we can use when defining the styles.*/
const useStyles = makeStyles( theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title: {
        padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight: 400
    }
}))

export default function Home() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <Typography variant='h6' className={classes.title}>
                Home Page
            </Typography>
            <CardMedia
                className={classes.media}
                image={unicornbikeImg}
                title='Unicorn Bicycle'
            />
            <CardContent>
                <Typography variant='body2' component='p'>
                    Welcome to the MERN Stack Setup home page
                </Typography>
            </CardContent>
            <Link to="/users">Users</Link>
        </Card>
    )
}