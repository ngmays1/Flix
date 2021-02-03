import { useState } from 'react';

export default function useToken() {
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
      } else {
        //localStorage.setItem('token', JSON.stringify(userToken));
        //setToken(userToken.token);
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
      }
    };

    return {
        setToken: saveToken,
        token
      }
}