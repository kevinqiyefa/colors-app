import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { makeStyles } from '@material-ui/styles';
import '../styles/ColorBox.css';

const ColorBox = ({
  background,
  name,
  singleColorPaletteURL,
  showingFullPalette
}) => {
  const useStyles = makeStyles({
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
        transition: '0.5s'
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
        fontSize: '5rem'
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

  const classes = useStyles();

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    copied && setTimeout(() => setCopied(false), 1500);
  }, [copied]);

  return (
    <CopyToClipboard text={background} onCopy={() => setCopied(true)}>
      <div className={classes.ColorBox} style={{ backgroundColor: background }}>
        <div
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
          style={{ backgroundColor: background }}
        />

        <div
          className={`${classes.copyMessage} ${copied && classes.showMessage}`}
        >
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>

        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>

          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={singleColorPaletteURL} onClick={e => e.stopPropagation()}>
            <span className={classes.moreColors}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

ColorBox.propTypes = {
  background: PropTypes.string,
  name: PropTypes.string,
  singleColorPaletteURL: PropTypes.string,
  showingFullPalette: PropTypes.bool
};

export default ColorBox;
