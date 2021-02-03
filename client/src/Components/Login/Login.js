import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import {Container, AppBar, Typography, Grow, Button, Grid } from '@material-ui/core';
import useStyles from '../../styles';




export default function Login({ setToken }) {

    const classes = useStyles();

    const [uname, setUname] = useState();
    const [password, setPassword] = useState();
    const [showLogin, setShowLogin] = useState(false);
    const [showReg, setShowReg] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const bcrypt = require('bcryptjs');
    const [session, setSession] = useState(localStorage);

    const login = async (creds) => {
      console.log(creds);
        return fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
          })
            .then(data => data.json())
         }


    const setSesh = async (creds) => {
    console.log(creds);
      return fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(creds)
        })
          .then(data => data.json())
        }


    const loginCheck = async (creds) => {
      const token = await bcrypt.genSalt(5);

        fetch('http://localhost:5000/users')
          .then(res => res.json())
          .then(data => {
            const user = data.find(u => creds.uname === u.username )
            console.log(user);
            if (!user) return;
            console.log(data);
            if (user.password === creds.password) {
              console.log('your token is ' +token);
              //const userToken = login(token);
              setToken(token);
            } else {
              console.log('wrong password');
            }
          })
          setShowLogin(false);
        //console.log(users);
    }

    const logout = () => {
      //const token = localStorage.clear();
      console.log('clear');
      setToken('clear');
    }


    const onSubmit = async (e) => {
        //console.log(e);
        //e.preventDefault();
        /*const token = await login({
          uname,
          password
        });
        setToken(token);
      */
        
        loginCheck(e);
      }

    const reg = async (creds) => {
        return fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
          })
            .then(data => data.json())
         }
    return (
        <Container>
            <Container className={classes.logins}>
              {localStorage.length === 0 ?
                <Button className={classes.loginButton} onClick={() => setShowLogin(!showLogin)}>Login</Button> :
                <Button className={classes.loginButton} onClick={() => logout()}>Logout</Button> 
              } 
                <Button className={classes.loginButton} onClick={() => setShowReg(!showReg)}>Register</Button>
            </Container>
        <div>
                        {showLogin && 
            <Container className={classes.loginMenu}>
                <h1>login menu</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name='uname' placeholder='username' onChange={(e) => setUname(e.target.value)} ref={register}/>
                    <input name='password' placeholder='Password: ' type='password' onChange={(e) => setPassword(e.target.value)} ref={register}/>
                    <input type='submit'/>
                </form>
            </Container>    }
            {/*showReg && 
            <Grid className={classes.regMenu}>
                <h1>Reg menu</h1>
                <form onSubmit={handleSubmit(reg)}>
                    <input name='uname' ref={register}/>
                    <input name='email' ref={register}/>
                    <input name='password' type='password' ref={register}/>
                    <input type='submit'/>
                </form>
            </Grid>   */}
        </div>
        </Container>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }