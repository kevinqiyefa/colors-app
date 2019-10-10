import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PaletteList = ({ palettes }) => {
  return (
    <div>
      <h1>React Colors</h1>
      {palettes.map(palette => (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
};

PaletteList.propTypes = {
  palettes: PropTypes.object
};

export default PaletteList;
