import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import seedPalettes from '../data/seedPalettes';
import { generatePalette } from '../utils/ColorHelper';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../styles/app.css';

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

  const [palettes, setPalettes] = useState(savedPalettes || seedPalettes);

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = id => {
    setPalettes(palettes.filter(palette => palette.id !== id));
  };

  const findPalette = id => {
    return palettes.find(palette => palette.id === id);
  };

  useEffect(() => {
    function syncLocalStorage() {
      //save palettes to local storage
      window.localStorage.setItem('palettes', JSON.stringify(palettes));
    }

    syncLocalStorage();
  }, [palettes]);

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={props => (
                  <div className="page">
                    <NewPaletteForm
                      savePalette={savePalette}
                      palettes={palettes}
                      {...props}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/palette/:paletteId/:colorId"
                render={props => (
                  <div className="page">
                    <SingleColorPalette
                      colorId={props.match.params.colorId}
                      palette={generatePalette(
                        findPalette(props.match.params.paletteId)
                      )}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/"
                render={props => (
                  <div className="page">
                    <PaletteList
                      palettes={palettes}
                      {...props}
                      deletePalette={deletePalette}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={routeProps => (
                  <div className="page">
                    <Palette
                      palette={generatePalette(
                        findPalette(routeProps.match.params.id)
                      )}
                    />
                  </div>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
