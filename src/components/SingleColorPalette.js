import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gatherShades } from '../utils/ColorHelper';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import useStyles from '../styles/PaletteStyles';

const SingleColorPalette = ({ colorId, palette }) => {
  const classes = useStyles();

  const [format, setFormat] = useState('hex');

  const { paletteName, emoji, id } = palette;

  const colorShades = gatherShades(palette, colorId);
  const colorBoxes = colorShades.map(color => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));

  return (
    <div className={classes.singlePalette}>
      <NavBar format={format} setFormat={setFormat} showingAllColors={false} />
      <div className={classes.PaletteColors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`}>Go Back</Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

SingleColorPalette.propTypes = {
  colorId: PropTypes.string,
  palette: PropTypes.object
};

export default SingleColorPalette;
