import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ColorBox.css';

const ColorBox = ({ background, name }) => {
  return (
    <div className="ColorBox" style={{ backgroundColor: background }}>
      <span>{name}</span>
      <span>More</span>
    </div>
  );
};

ColorBox.propTypes = {
  background: PropTypes.string,
  name: PropTypes.string
};

export default ColorBox;
