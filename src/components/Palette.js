import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ColorBox from './ColorBox';
import NavBar from './NavBar';

import '../styles/Palette.css';

const Palette = ({ palette }) => {
  const { colors, paletteName, emoji } = palette;
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const colorBoxes = colors[level].map(c => (
    <ColorBox key={c.id} background={c[format]} name={c.name} />
  ));

  return (
    <div className="Palette">
      <NavBar
        level={level}
        setLevel={setLevel}
        format={format}
        setFormat={setFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {paletteName}
        <span>{emoji}</span>
      </footer>
    </div>
  );
};

Palette.propTypes = {
  palette: PropTypes.object
};

export default Palette;
