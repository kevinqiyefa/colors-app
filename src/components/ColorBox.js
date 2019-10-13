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
          className={`copy-overlay ${copied && 'show'}`}
          style={{ backgroundColor: background }}
        />

        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>

        <div className="ColorBox-container">
          <span className={classes.colorName}>{name}</span>

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
