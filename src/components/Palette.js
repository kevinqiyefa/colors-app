import React from 'react';
import PropTypes from 'prop-types';
import ColorBox from './ColorBox';
import '../styles/Palette.css';

const Palette = ({ palette }) => {
  console.log(palette);
  const colorBoxes = palette.colors.map(c => (
    <ColorBox key={c.name} background={c.color} name={c.name} />
  ));
  return (
    <div className="Palette">
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
