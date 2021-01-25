import React from 'react';
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
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShows());
    
    }, [dispatch])
*/
    if(!token) {
    return <Login setToken={setToken} />
  }


    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.header} position='static' color='inherit'>
                <Typography variant='h2' align='center'>Shows</Typography>
                <Login setToken={setToken}/>
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
