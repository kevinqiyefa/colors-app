import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from '@material-ui/core';

import PaletteMetaForm from './PaletteMetaForm';
import useStyles from '../styles/PaletteFormNavStyles';

const PaletteFormNav = ({
  open,
  handleSavePalette,
  handleDrawerOpen,
  palettes
}) => {
  const classes = useStyles();

  const [formShowing, setFormShowing] = useState(false);

  const hideForm = () => setFormShowing(false);

  return (
    <div className={classes.root}>
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
            <AddToPhotosIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create a palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Go Back
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setFormShowing(true)}
            className={classes.button}
          >
            Save
          </Button>
          {formShowing && (
            <PaletteMetaForm
              palettes={palettes}
              handleSavePalette={handleSavePalette}
              hideForm={hideForm}
            />
          )}
        </div>
      </AppBar>
    </div>
  );
};

PaletteFormNav.propTypes = {
  open: PropTypes.bool,
  handleSavePalette: PropTypes.func,
  handleDrawerOpen: PropTypes.func,
  palettes: PropTypes.array
};

export default PaletteFormNav;
