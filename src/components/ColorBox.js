import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ColorBox.css';

const ColorBox = ({ background, name }) => {
  return (
    <div className="ColorBox" style={{ backgroundColor: background }}>
      <div className="ColorBox-container">
        <span>{name}</span>

        <button className="copy-button">Copy</button>
      </div>
      <span>More</span>
    </div>
  );
};

ColorBox.propTypes = {
  background: PropTypes.string,
  name: PropTypes.string
};

export default ColorBox;
