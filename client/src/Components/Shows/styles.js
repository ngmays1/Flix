import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  table: {
    position: 'relative',
    margin: '10px',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: 700,
    backgroundColor: '#a6a6a6',
    borderRadius: '15px',
    maxWidth: '99%'
  },
  row: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  cell: {
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
    position: 'relative',
    flexDirection: 'row',
  },

  button: {
    position: 'relative',
    backgroundColor: 'grey',
    color: 'white',

  },  
  
  tickerbutton: {
    position: 'relative',
    backgroundColor: 'grey',
    color: 'white',
    marginTop: '10px',
    marginRight: '10px',

  },

  centerButton: {
    position: 'relative',
    margin: '5px',
    left: '50%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
  },

  menu: {
    position: 'absolute',
    top: 1,
    right: '50%',
    color: 'white',
  },

  menu_container: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },

  corner: {
    position: 'absolute',
    right: 30,
    top: 10,
  },

  corner2: {
    position: 'absolute',
    right: 230,
    top: 10,
  },

  title: {
    position: 'absolute',
    top: 10,
    right: 3,
  },

  spaceLeft: {
    marginLeft: '5px',
  },

  spaceRight: {
    marginLeft: '10px',
  },

  tags: {
    position: 'absolute',
    top: 10,
    right: 3,
    color: 'white',
  },

  info: {
    position: 'absolute',
    left: 150,
    top: 2,
    backgroundColor: 'black',
    color: 'white',
    opacity: .5,
    borderRadius: '15px',
    width: '175px',
    height: '125px',
  },

  description__box: {
    position: 'absolute',
    flexDirection: 'column',
    left: 200,
    top: 2,
    backgroundColor: 'black',
    color: 'red',
    opacity: .5,
    borderRadius: '15px',
    width: '175px',
    height: '125px',
  },

  search: {
    color: 'white',
  },

  col: {
    position: 'flex',
    flexDirection: 'column',
    marginTop: '5px',
    marginBottom: '5px',
  },

  row: {
    position: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  desc: {
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
    position: 'relative',
  },

  ticker: {
    position: 'relative',
    flexDirection: 'row',
    height: '60px',
    width: '100%',
    color: 'white',
    opacity: .75,
    borderRadius: '15px',
    minWidth: 700,
    backgroundColor: '#a6a6a6',
    justifyContent: 'center',
    alignContent: 'center',
  },

  whiteButton: {
    backgroundColor: 'white',
    color: 'black',
    margin: '2px',
    zIndex: 1,
  },

  box: {
    position: 'absolute',
    width: 'full',
    height: 'full',
    justifyContent: 'center',
    alignContent: 'center',
  },

  floating: {
    position: 'relative',
    right: 5,
    top: 15,
  }

});