import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/Palette.css';

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map(c => (
    <ColorBox key={c.name} background={c.hex} name={c.name} />
  ));

  return (
    <div className="Palette">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={lv => setLevel(lv)}
      />
      {/* Navbar goes here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  );
};

Palette.propTypes = {
  palette: PropTypes.object
};

export default Palette;
