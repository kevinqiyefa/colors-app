import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gatherShades } from '../utils/ColorHelper';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import { makeStyles } from '@material-ui/styles';

const SingleColorPalette = ({ colorId, palette }) => {
  const useStyles = makeStyles({
    singlePalette: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },

    PaletteColors: {
      height: '90%'
    },

    goBack: {
      width: '20%',
      height: '50%',
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-3.5px',
      opacity: 1,
      backgroundColor: 'black',
      '& a': {
        color: 'white',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none'
      }
    }
  });

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
