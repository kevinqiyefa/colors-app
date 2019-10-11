import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import seekPalettes from '../data/seedPalettes';
import { generatePalette } from '../utils/ColorHelper';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

const findPalette = id => {
  return seekPalettes.find(palette => palette.id === id);
};

function App() {
  return (
    <div className="App">
      <Switch>
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
          render={props => <PaletteList palettes={seekPalettes} {...props} />}
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
