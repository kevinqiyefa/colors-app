import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useStyles from '../styles/PaletteListStyles';
import MiniPalette from './MiniPalette';

const PaletteList = ({ palettes, history, deletePalette }) => {
  const classes = useStyles();

  const goToPalette = id => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map(palette => (
            <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                {...palette}
                handleClick={() => goToPalette(palette.id)}
                handleDelete={deletePalette}
                id={palette.id}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

PaletteList.propTypes = {
  palettes: PropTypes.array,
  deletePalette: PropTypes.func,
  history: PropTypes.object
};

export default PaletteList;
