import React from 'react';
import Palette from './Palette';
import seekPalettes from '../data/seedPalettes';

function App() {
  return (
    <div className="App">
      <Palette palette={seekPalettes[0]} />
    </div>
  );
}

export default App;
