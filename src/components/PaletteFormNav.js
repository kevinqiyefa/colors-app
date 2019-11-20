import React, { useState } from 'react';
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

import { makeStyles } from '@material-ui/core/styles';
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '64px',
    alignItems: 'center'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  navBtns: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none'
    }
  },
  button: {
    margin: '0 0.5rem'
  }
}));

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
            <MenuIcon />
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
