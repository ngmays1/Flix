import React, { useState, useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Button, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Shows from '../Shows/Shows';
import { getShows } from '../../actions/shows'
import useStyles from '../../styles';
import { useForm } from 'react-hook-form';
import Login from '../Login/Login';
import useToken from './useToken';

function App() {
    
    const { token, setToken } = useToken();
    const classes = useStyles();

   
/*
    //const [showing, setShowing] = useState(false);
    
    useEffect(() => {
        console.log(token);
    }, [token]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShows());
    
    }, [dispatch])
    if(!token) {
    return <Login setToken={setToken} />
  }
*/


    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.header} position='static' color='inherit'>
                <Typography variant='h2' align='center'>Shows</Typography>
                <Login setToken={setToken}/>
            </AppBar>

                <Container>
                {localStorage.length === 1 ?
                    <Shows/> : 
                    <h1>Please Log In </h1>
                }
                </Container>
        </Container>
    )
}

export default App
