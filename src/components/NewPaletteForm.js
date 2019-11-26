import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import {
  Drawer,
  Typography,
  Divider,
  IconButton,
  Button
} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import arrayMove from 'array-move';

import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import useStyles from '../styles/NewPaletteFormStyles';

function NewPaletteForm({ savePalette, palettes, history }) {
  const classes = useStyles();

  const defaultColors = palettes[0].colors;

  const [colors, setColors] = useState(defaultColors);

  const [open, setOpen] = useState(false);

  const maxColors = 20;
  const paletteIsFull = colors.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = newColor => {
    setColors([...colors, newColor]);
  };

  const addRandomColor = () => {
    //pick random color from existing palettes
    const allColors = palettes.map(p => p.colors).flat();
    var rand = (Math.random() * allColors.length) >> 0;
    const randomColor = allColors[rand];
    setColors([...colors, randomColor]);
  };

  const removeColor = colorName => {
    setColors(colors.filter(color => color.name !== colorName));
  };

  const handleSavePalette = ({ paletteName, emoji }) => {
    const newPalette = {
      paletteName,
      id: paletteName.toLowerCase().replace(/ /g, '-'),
      colors,
      emoji
    };
    savePalette(newPalette);
    history.push('/');
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(cls => arrayMove(cls, oldIndex, newIndex));
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        palettes={palettes}
        handleSavePalette={handleSavePalette}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setColors([])}
              className={classes.button}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={paletteIsFull}
              className={classes.button}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />

        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}

NewPaletteForm.propTypes = {
  savePalette: PropTypes.func,
  history: PropTypes.object,
  palettes: PropTypes.array
};

export default NewPaletteForm;
