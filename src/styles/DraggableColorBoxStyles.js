import chroma from 'chroma-js';
import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';

const draggableColorBoxStyles = color => {
  return makeStyles({
    root: {
      width: '20%',
      height: '25%',
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-5px',
      '&:hover svg': {
        color: 'white',
        transform: 'scale(1.5)',
        [sizes.down('sm')]: {
          transform: 'scale(1.3)'
        }
      },
      [sizes.down('lg')]: {
        width: '25%',
        height: '20%'
      },
      [sizes.down('md')]: {
        width: '50%',
        height: '10%'
      },
      [sizes.down('sm')]: {
        width: '100%',
        height: '5%'
      }
    },

    boxContent: {
      position: 'absolute',
      width: '100%',
      left: '0px',
      bottom: '0px',
      padding: '10px',
      color:
        chroma(color).luminance() <= 0.08
          ? 'rgba(255,255,255,0.8)'
          : 'rgba(0,0,0,0.6)',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [sizes.down('sm')]: {
        height: '100%'
      }
    },
    deleteIcon: {
      transition: 'all 0.3s ease-in-out'
    }
  });
};

export default draggableColorBoxStyles;
