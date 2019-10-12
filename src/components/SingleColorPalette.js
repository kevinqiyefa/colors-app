import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gatherShades } from '../utils/ColorHelper';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';

const SingleColorPalette = ({ colorId, palette }) => {
  const [format, setFormat] = useState('hex');

  const { paletteName, emoji } = palette;

  const colorShades = gatherShades(palette, colorId);
  const colorBoxes = colorShades.map(color => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <NavBar format={format} setFormat={setFormat} showingAllColors={false} />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

SingleColorPalette.propTypes = {
  colorId: PropTypes.string,
  palette: PropTypes.object
};

export default SingleColorPalette;
