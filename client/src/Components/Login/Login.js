import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import {Container, Button, Grid } from '@material-ui/core';
import useStyles from '../../styles';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, login } from '../../actions/users';
import { getShows } from '../../actions/shows';


export default function Login({ setToken }) {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const classes = useStyles();

    const [uname, setUname] = useState();
    const [password, setPassword]  = useState();
    const [showLogin, setShowLogin] = useState(false);
    const [showReg, setShowReg] = useState(false);
    const [checkToken, setCheckToken] = useState('');
    const { register, handleSubmit, errors } = useForm();
    //const bcrypt = require('bcryptjs');

    useEffect(() => {
      dispatch(getUsers());
      console.log(checkToken)
    }, [checkToken, dispatch])

    const users = useSelector((state) => state.users);

    const registerUser = async (creds) => {
      console.log(creds);
      const thisUser = ({username:creds.username, password:creds.password, email:creds.email, session:'' });
      //dispatch(addUser(thisUser));
      setShowReg(false);
    }

    const login3 = async (creds) => {
      const token = 'a;sdfkj;ejf;a;sdfjk';
      console.log(users);
    //  console.log(dispatch(getUsers));
    //dispatch(getUsers);
    }
    
    const loginCheck = async (creds) => {
      //const token = await bcrypt.genSalt(5);
      dispatch(getUsers());
      console.log('check');
      const token = 'placeholdertoken'; //
      const user = users.find(u => creds.uname === u.username);
      console.log(state);

      console.log(users);
      if (!user) return;
      if (user.password === creds.password) {
        console.log('your token is ' +token);
        //const userToken = login(token);
        setToken(token);
        setCheckToken(token);
      } else {
        console.log('wrong password');
      } setShowLogin(false);
      console.log('check');
    }

      const loggy = async (creds) => {
        const user = users.find(u => creds.uname === u.username);
        console.log(user);
        dispatch(login(user));
      }

    const logout = () => {
      //const token = localStorage.clear();
      setToken('clear');
      setCheckToken('clear');
    }

    return (
        <Container>
            <Container className={classes.logins}>
              {localStorage.length === 0 ?
                <Button className={classes.loginButton} onClick={() => setShowLogin(!showLogin)}>Login</Button> :
                <Button className={classes.loginButton} onClick={() => logout()}>Logout</Button> 
              } 
              {localStorage.length === 0 &&
                <Button className={classes.loginButton} onClick={() => setShowReg(!showReg)}>Register</Button>
              }
            </Container>
        <div>
                        {showLogin && 
            <Container className={classes.loginMenu}>
                <h1>login menu</h1>
                <form onSubmit={handleSubmit(loggy)}>
                    <input name='uname' placeholder='username' onChange={(e) => setUname(e.target.value)} ref={register}/>
                    <input name='password' placeholder='Password: ' type='password' onChange={(e) => setPassword(e.target.value)} ref={register}/>
                    <input type='submit'/>
                </form>
            </Container>    }
            {showReg && 
            <Grid className={classes.regMenu}>
                <h1>Reg menu</h1>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input name='username' placeholder='username' ref={register}/>
                    <input name='email' placeholder='Email' ref={register}/>
                    <input name='password' placeholder='Password: ' type='password' ref={register}/>
                    <input type='submit'/>
                </form>
            </Grid>   }
        </div>
        <button onClick={login3}>get userssss</button>
        </Container>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }