import React, { useState, useEffect } from 'react'
import {Container, AppBar, Typography, Grow, Button, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Shows from './Components/Shows/Shows';
import { getShows } from './actions/shows'
import useStyles from './styles';
import { useForm } from 'react-hook-form';



function App() {
    const [showLogin, setShowLogin] = useState(false);
    const [showReg, setShowReg] = useState(false);
    const { register, handleSubmit, errors } = useForm();


    const classes = useStyles();
/*
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShows());
    
    }, [dispatch])
*/

    const login = (data) => {
        console.log(data)
        setShowLogin(false);
    }

    const reg = (data) => {
        console.log(data)
        setShowReg(false);
    }

    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.header} position='static' color='inherit'>
                <Typography variant='h2' align='center'>Shows</Typography>
                <Container className={classes.logins}>
                    <Button className={classes.loginButton} onClick={() => setShowLogin(!showLogin)}>Login</Button>
                    <Button className={classes.loginButton} onClick={() => setShowReg(!showReg)}>Register</Button>
                </Container>
            </AppBar>
            {showLogin && 
            <Container className={classes.loginMenu}>
                <h1>login menu</h1>
                <form onSubmit={handleSubmit(login)}>
                    <input name='uname' placeholder='username' ref={register}/>
                    <input name='password' placeholder='Password: ' type='password' ref={register}/>
                    <input type='submit'/>
                </form>
            </Container>    }
            {showReg && 
            <Grid className={classes.regMenu}>
                <h1>Reg menu</h1>
                <form onSubmit={handleSubmit(reg)}>
                    <input name='uname' ref={register}/>
                    <input name='email' ref={register}/>
                    <input name='password' type='password' ref={register}/>
                    <input type='submit'/>
                </form>
            </Grid>    }
            <Grow in>
                <Container>
                        <Shows/>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
