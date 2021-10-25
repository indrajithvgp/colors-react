import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";

class App extends Component {
  constructor(props) {
    super(props);
  }
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColors}/>} />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
