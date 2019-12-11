import chroma from 'chroma-js';
import { makeStyles } from '@material-ui/styles';
import sizes from './sizes';

const colorBoxStyles = (showingFullPalette, background) => {
  return makeStyles({
    ColorBox: {
      width: '20%',
      height: showingFullPalette ? '25%' : '50%',
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-3.5px',
      '&:hover button': {
        opacity: 1,
        transition: 'all 0.5s'
      },
      [sizes.down('lg')]: {
        width: '25%',
        height: showingFullPalette ? '20%' : '33.3333%'
      },
      [sizes.down('md')]: {
        width: '50%',
        height: showingFullPalette ? '10%' : '20%'
      },
      [sizes.down('xs')]: {
        width: '100%',
        height: showingFullPalette ? '5%' : '10%'
      }
    },
    copyText: {
      color: chroma(background).luminance() >= 0.7 ? 'black' : 'white'
    },

    colorName: {
      color: chroma(background).luminance() <= 0.08 ? 'white' : 'black'
    },

    moreColors: {
      color:
        chroma(background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
      background: 'rgba(255, 255, 255, 0.3)',
      position: 'absolute',
      border: 'none',
      right: 0,
      bottom: 0,
      width: '60px',
      height: '30px',
      textAlign: 'center',
      lineHeight: '30px',
      textTransform: 'uppercase'
    },
    copyButton: {
      color:
        chroma(background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none',
      opacity: 0
    },
    boxContent: {
      position: 'absolute',
      width: '100%',
      left: '0px',
      bottom: '0px',
      padding: '10px',
      color: 'black',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '12px',
      boxSizing: 'border-box'
    },

    copyOverlay: {
      opacity: '0',
      zIndex: '0',
      width: '100%',
      height: '100%',
      transition: 'transform 0.6s ease-in-out',
      transform: 'scale(0.1)'
    },
    showOverlay: {
      opacity: '1',
      transform: 'scale(50)',
      zIndex: '10',
      position: 'absolute'
    },

    copyMessage: {
      position: 'fixed',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontSize: '4rem',
      transform: 'scale(0.1)',
      opacity: '0',
      color: 'white',
      '& h1': {
        fontWeight: '400',
        textShadow: '1px 2px black',
        background: 'rgba(255, 255, 255, 0.2)',
        width: '100%',
        textAlign: 'center',
        marginBottom: '0',
        padding: '1rem',
        textTransform: 'uppercase',
        fontSize: '5rem',

        [sizes.down('xs')]: {
          fontSize: '2.8rem'
        }
      },
      '& p': {
        fontSize: '2rem',
        fontWeight: '100'
      }
    },
    showMessage: {
      opacity: '1',
      transform: 'scale(1)',
      zIndex: '25',
      transition: 'all 0.4s ease-in-out',
      transitionDelay: '0.3s'
    }
  });
};

export default colorBoxStyles;
