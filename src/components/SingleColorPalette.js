import React from 'react';
import PropTypes from 'prop-types';
import { gatherShades } from '../utils/ColorHelper';
import ColorBox from './ColorBox';

const SingleColorPalette = ({ colorId, palette }) => {
  const colorShades = gatherShades(palette, colorId);
  const colorBoxes = colorShades.map(color => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color.hex}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

SingleColorPalette.propTypes = {
  colorId: PropTypes.string,
  palette: PropTypes.object
};

export default SingleColorPalette;
