import React from 'react';
import Palette from './Palette';
import seekPalettes from '../data/seedPalettes';
import { generatePalette } from '../utils/ColorHelper';

function App() {
  const temp = {
    paletteName: 'Flat UI Colors French',
    id: 'flat-ui-colors-french',
    emoji: '🇫🇷',
    colors: [{ name: 'FlatFlesh', color: '#fad390' }]
  };
  generatePalette(temp);
  return (
    <div className="App">
      <Palette palette={seekPalettes[1]} />
    </div>
  );
}

export default App;
