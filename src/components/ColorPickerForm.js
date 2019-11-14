import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core';

const ColorPickerForm = ({ paletteIsFull, addNewColor, colors }) => {
  const [curColor, setCurColor] = useState('teal');
  const [newColorName, setNewColorName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', value =>
      colors.every(({ color }) => color !== curColor)
    );

    return () => {
      ValidatorForm.removeValidationRule('isColorNameUnique');
      ValidatorForm.removeValidationRule('isColorUnique');
    };
  }, [colors, curColor]);

  const handleSubmit = () => {
    const newColor = {
      color: curColor,
      name: newColorName
    };

    addNewColor(newColor);
    setNewColorName('');
  };

  return (
    <>
      <ChromePicker
        color={curColor}
        onChangeComplete={newColor => setCurColor(newColor.hex)}
      />

      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          value={newColorName}
          onChange={e => setNewColorName(e.target.value)}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'Enter a color name',
            'Color name must be unique',
            'Color already used!'
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ backgroundColor: paletteIsFull ? 'grey' : curColor }}
          disabled={paletteIsFull}
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </>
  );
};

ColorPickerForm.propTypes = {
  paletteIsFull: PropTypes.bool,
  addNewColor: PropTypes.func,
  colors: PropTypes.array
};

export default ColorPickerForm;
