import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gatherShades } from '../utils/ColorHelper';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';

const SingleColorPalette = ({ colorId, palette }) => {
  const [format, setFormat] = useState('hex');

  const { paletteName, emoji, id } = palette;

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
    <div className="SingleColorPalette Palette">
      <NavBar format={format} setFormat={setFormat} showingAllColors={false} />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link to={`/palette/${id}`} className="back-button">
            Go Back
          </Link>
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
