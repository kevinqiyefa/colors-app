import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import '../styles/NavBar.css';

const NavBar = ({ level, setLevel }) => {
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
    </header>
  );
};

NavBar.propTypes = {
  level: PropTypes.number,
  setLevel: PropTypes.func
};

export default NavBar;
