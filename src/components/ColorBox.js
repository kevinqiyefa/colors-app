import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';

import '../styles/ColorBox.css';

const ColorBox = ({ background, name, singleColorPaletteURL, showLink }) => {
  const [copied, setCopied] = useState(false);

  const isDarkColor = chroma(background).luminance() <= 0.08;
  const isLightColor = chroma(background).luminance() >= 0.7;
  console.log(isDarkColor, isLightColor);

  useEffect(() => {
    copied && setTimeout(() => setCopied(false), 1500);
  }, [copied]);

  return (
    <CopyToClipboard text={background} onCopy={() => setCopied(true)}>
      <div className="ColorBox" style={{ backgroundColor: background }}>
        <div
          className={`copy-overlay ${copied && 'show'}`}
          style={{ backgroundColor: background }}
        />

        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p className={`${isLightColor && 'dark-text'}`}>{background}</p>
        </div>

        <div className="ColorBox-container">
          <span className={`${isDarkColor && 'light-text'}`}>{name}</span>

          <button className={`copy-button ${isLightColor && 'dark-text'}`}>
            Copy
          </button>
        </div>
        {showLink && (
          <Link to={singleColorPaletteURL} onClick={e => e.stopPropagation()}>
            <span className={`more-color ${isLightColor && 'dark-text'}`}>
              More
            </span>
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
  showLink: PropTypes.bool
};

export default ColorBox;
