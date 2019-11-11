import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = ({ color, name, removeColor }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span> {name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={removeColor} />
      </div>
    </div>
  );
};

DraggableColorBox.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  removeColor: PropTypes.func
};

export default DraggableColorBox;
