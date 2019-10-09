import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import '../styles/ColorBox.css';

const ColorBox = ({ background, name }) => {
  const [copied, setCopied] = useState(false);

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
          <p>{background}</p>
        </div>

        <div className="ColorBox-container">
          <span>{name}</span>

          <button className="copy-button">Copy</button>
        </div>
        <span>More</span>
      </div>
    </CopyToClipboard>
  );
};

ColorBox.propTypes = {
  background: PropTypes.string,
  name: PropTypes.string
};

export default ColorBox;
