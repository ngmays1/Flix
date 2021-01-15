import React, { useState, useEffect } from 'react'
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Shows from './Components/Shows/Shows';
import { getShows } from './actions/shows'
import useStyles from './styles';



function App() {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getShows());
    
    }, [dispatch])
    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.header} position='static' color='inherit'>
                <Typography variant='h2' align='center'>Shows</Typography>
            </AppBar>
            <Grow in>
                <Container>
                        <Shows/>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
