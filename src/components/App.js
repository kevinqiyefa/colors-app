import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import seedPalettes from '../data/seedPalettes';
import { generatePalette } from '../utils/ColorHelper';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

  const [palettes, setPalettes] = useState(savedPalettes || seedPalettes);

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
    syncLocalStorage();
  };

  const syncLocalStorage = () => {
    //save palettes to local storage
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  };

  const findPalette = id => {
    return palettes.find(palette => palette.id === id);
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={props => (
            <NewPaletteForm
              savePalette={savePalette}
              palettes={palettes}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={props => (
            <SingleColorPalette
              colorId={props.match.params.colorId}
              palette={generatePalette(
                findPalette(props.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <PaletteList palettes={palettes} {...props} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
