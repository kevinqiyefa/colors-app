import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const MiniPalette = ({ colors, paletteName, emoji }) => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '5px',
      padding: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    colors: { backgroundColor: 'grey' },
    title: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0',
      color: 'black',
      paddingTop: '0.5rem',
      fontSize: '1rem',
      position: 'relative'
    },
    emoji: { marginLeft: '0.5rem', fontSize: '1.5rem' }
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.colors} />
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

MiniPalette.propTypes = {
  colors: PropTypes.array,
  paletteName: PropTypes.string,
  emoji: PropTypes.string
};

export default MiniPalette;
