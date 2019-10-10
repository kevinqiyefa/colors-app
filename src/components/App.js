import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import seekPalettes from '../data/seedPalettes';
import { generatePalette } from '../utils/ColorHelper';

const findPalette = id => {
  return seekPalettes.find(function(palette) {
    return palette.id === id;
  });
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
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

      {/* <Palette palette={generatePalette(seekPalettes[1])} /> */}
    </div>
  );
}

export default App;
