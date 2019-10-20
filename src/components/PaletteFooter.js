import React from 'react';
import PropTypes from 'prop-types';

import useStyles from '../styles/PaletteFooterStyles';

const PaletteFooter = ({ paletteName, emoji }) => {
  const classes = useStyles();
  return (
    <footer className={classes.paletteFooter}>
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
