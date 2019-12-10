import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from '../styles/MiniPaletteStyles';

const MiniPalette = ({
  colors,
  paletteName,
  emoji,
  handleClick,
  handleDelete,
  id
}) => {
  const classes = useStyles();

  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  const deletePalette = e => {
    e.stopPropagation();
    handleDelete(id);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{ transition: 'all 0.3s ease-in-out' }}
        onClick={deletePalette}
      />

      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

MiniPalette.propTypes = {
  colors: PropTypes.array,
  paletteName: PropTypes.string,
  emoji: PropTypes.string,
  handleClick: PropTypes.func,
  handleDelete: PropTypes.func,
  id: PropTypes.string
};

export default MiniPalette;
