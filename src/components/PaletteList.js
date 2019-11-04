import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useStyles from '../styles/PaletteListStyles';

import MiniPalette from './MiniPalette';

const PaletteList = ({ palettes, history }) => {
  const classes = useStyles();

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette
              {...palette}
              key={palette.id}
              handleClick={() => goToPalette(palette.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

PaletteList.propTypes = {
  palettes: PropTypes.array,
  history: PropTypes.object
};

export default PaletteList;
