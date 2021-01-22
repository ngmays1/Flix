import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  header: {
    marginBottom: '15px',
    position: 'relative',
    borderRadius: '15px',
    height: '100px',
    backgroundColor: '#a6a6a6',
    color: 'white',
  },

  logins: {
    position: 'absolute',
    top: '3%',
    right: '0%',
    width: '20%',
    height: '90%',
  }, 

  home: {
    position: 'relative',
  },

  loginButton: {
    backgroundColor: 'grey',
    margin: '2px',
    minWidth: '90px'
  },

  loginMenu: {
    position: 'absolute',
    backgroundColor: 'blue',
    color: 'white',
    zIndex: '50',
    height: 'full',
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
  },

  regMenu: {
    position: 'absolute',
    backgroundColor: 'red',
    color: 'white',
    zIndex: '50',
    height: '500px',
    width: '85%',
    top: '40%',
    direction: "column",
    justify: "center",
    alignItems: "center",
  }

})