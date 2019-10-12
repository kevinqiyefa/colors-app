import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PaletteFooter.css';

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <footer className="Palette-footer">
      {paletteName}
      <span>{emoji}</span>
    </footer>
  );
};

PaletteFooter.propTypes = {
  paletteName: PropTypes.string,
  emoji: PropTypes.string
};

export default PaletteFooter;
