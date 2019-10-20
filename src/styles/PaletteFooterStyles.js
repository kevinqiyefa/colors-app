import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  paletteFooter: {
    backgroundColor: 'white',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold',
    '& > span': {
      fontSize: '1.5rem',
      margin: '0 1rem'
    }
  }
});
