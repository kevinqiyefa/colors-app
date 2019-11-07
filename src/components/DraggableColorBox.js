import React from 'react';
import PropTypes from 'prop-types';

import useStyles from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = ({ color }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {color}
    </div>
  );
};

DraggableColorBox.propTypes = {
  color: PropTypes.string
};

export default DraggableColorBox;
