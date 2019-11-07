import React from 'react';
import PropTypes from 'prop-types';

import useStyles from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = ({ color, name }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {name}
    </div>
  );
};

DraggableColorBox.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string
};

export default DraggableColorBox;
