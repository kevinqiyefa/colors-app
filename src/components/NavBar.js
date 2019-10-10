import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import { Select, MenuItem } from '@material-ui/core';

import 'rc-slider/assets/index.css';
import '../styles/NavBar.css';

const NavBar = ({ level, setLevel, format, setFormat }) => {
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="/">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={lv => setLevel(lv)}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={e => setFormat(e.target.value)}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
};

NavBar.propTypes = {
  level: PropTypes.number,
  setLevel: PropTypes.func,
  format: PropTypes.string,
  setFormat: PropTypes.func
};

export default NavBar;
