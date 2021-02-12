import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../actions/users';

export default function useToken() {
  const dispatch = useDispatch();

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
      };
  
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
      if (userToken === 'clear') {
        localStorage.removeItem('token');
        localStorage.clear();
        setToken(getToken());
        dispatch(updateUser(getToken()));
      } else {
        //localStorage.setItem('token', JSON.stringify(userToken));
        //setToken(userToken.token);
        localStorage.setItem('token', JSON.stringify(userToken));
        //dispatch(updateUser(creds))
        setToken(userToken);
        dispatch(updateUser(userToken));

      }
    };

    return {
        setToken: saveToken,
        token
      }
}