import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MiniPalette from './MiniPalette';

const PaletteList = ({ palettes }) => {
  /* <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link> */

  return (
    <div>
      <h1>React Colors</h1>
      {palettes.map(palette => (
        <MiniPalette {...palette} key={palette.id} />
      ))}
    </div>
  );
};

PaletteList.propTypes = {
  palettes: PropTypes.array
};

export default PaletteList;
