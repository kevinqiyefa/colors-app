import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';
import '../styles/NavBar.css';

const NavBar = ({ level, setLevel, format, setFormat }) => {
  const [open, setOpen] = useState(false);

  const handleFormatChanged = e => {
    setFormat(e.target.value);
    setOpen(true);
  };

  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">reactcolorpicker</Link>
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
        <Select value={format} onChange={handleFormatChanged}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
      </div>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">Format Changed!</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
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
