import React, { useState, useEffect } from 'react';

import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button
} from '@material-ui/core';

import PropTypes from 'prop-types';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const PaletteMetaForm = ({ palettes, handleSavePalette, hideForm }) => {
  const [newPaletteName, setNewPaletteName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );

    return () => {
      ValidatorForm.removeValidationRule('isPaletteNameUnique');
    };
  }, [palettes]);

  return (
    <Dialog open onClose={hideForm} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={() => handleSavePalette(newPaletteName)}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new beautiful palette. Make sure it's
            unique!
          </DialogContentText>
          <TextValidator
            label="Palette Name"
            value={newPaletteName}
            onChange={e => setNewPaletteName(e.target.value)}
            validators={['required', 'isPaletteNameUnique']}
            fullWidth
            margin="normal"
            errorMessages={['Enter Palette Name', 'Name already used']}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideForm} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
};

PaletteMetaForm.propTypes = {
  handleSavePalette: PropTypes.func,
  hideForm: PropTypes.func,
  palettes: PropTypes.array
};

export default PaletteMetaForm;
