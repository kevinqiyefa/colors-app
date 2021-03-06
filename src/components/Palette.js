import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';

import useStyles from '../styles/PaletteStyles';

const Palette = ({ palette }) => {
  const classes = useStyles();

  const { colors, paletteName, emoji, id } = palette;
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const colorBoxes = colors[level].map(c => (
    <ColorBox
      key={c.id}
      background={c[format]}
      name={c.name}
      singleColorPaletteURL={`/palette/${id}/${c.id}`}
      showingFullPalette
    />
  ));

  return (
    <div className={classes.singlePalette}>
      <NavBar
        level={level}
        setLevel={setLevel}
        format={format}
        setFormat={setFormat}
        showSlider
      />
      <div className={classes.PaletteColors}>{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

Palette.propTypes = {
  palette: PropTypes.object
};

export default Palette;
