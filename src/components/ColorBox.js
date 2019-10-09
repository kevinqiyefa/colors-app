import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import '../styles/ColorBox.css';

const ColorBox = ({ background, name }) => {
  return (
    <CopyToClipboard text={background}>
      <div className="ColorBox" style={{ backgroundColor: background }}>
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
