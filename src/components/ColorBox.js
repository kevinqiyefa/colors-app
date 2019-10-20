import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import colorBoxStyles from '../styles/ColorBoxStyles';

const ColorBox = ({
  background,
  name,
  singleColorPaletteURL,
  showingFullPalette
}) => {
  const classes = colorBoxStyles(showingFullPalette, background)();

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
