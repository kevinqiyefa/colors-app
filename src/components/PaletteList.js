import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import MiniPalette from './MiniPalette';

const PaletteList = ({ palettes }) => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: 'blue',
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    container: {
      width: '50%',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    nav: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    },
    palettes: {
      boxSizing: 'border-box',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 30%)',
      gridGap: '5%'
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette {...palette} key={palette.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

PaletteList.propTypes = {
  palettes: PropTypes.array
};

export default PaletteList;
