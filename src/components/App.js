import React from 'react';
import Palette from './Palette';
import seekPalettes from '../data/seedPalettes';
import { generatePalette } from '../utils/ColorHelper';

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seekPalettes[1])} />
    </div>
  );
}

export default App;
