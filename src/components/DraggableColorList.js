import React from 'react';
import PropTypes from 'prop-types';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = ({ colors, removeColor }) => {
  return (
    <div style={{ height: '100%' }}>
      {colors.map(({ color, name }, idx) => (
        <DraggableColorBox
          index={idx}
          color={color}
          key={color}
          name={name}
          removeColor={() => removeColor(name)}
        />
      ))}
    </div>
  );
};

DraggableColorList.propTypes = {
  colors: PropTypes.array,
  removeColor: PropTypes.func
};

export default SortableContainer(DraggableColorList);
