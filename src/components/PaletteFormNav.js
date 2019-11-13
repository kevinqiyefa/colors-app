import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from '@material-ui/core';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const PaletteFormNav = ({
  classes,
  open,
  handleSavePalette,
  handleDrawerOpen,
  palettes
}) => {
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
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>

          <ValidatorForm onSubmit={() => handleSavePalette(newPaletteName)}>
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              onChange={e => setNewPaletteName(e.target.value)}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter Palette Name', 'Name already used']}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </>
  );
};

PaletteFormNav.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  handleSavePalette: PropTypes.func,
  handleDrawerOpen: PropTypes.func,
  palettes: PropTypes.array
};

export default PaletteFormNav;
