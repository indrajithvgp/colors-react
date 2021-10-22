import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Palette from "./Palette";
import seedColors from './seedColors'
import { generatePalette } from "./colorHelpers";

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return <Palette palette={generatePalette(seedColors[5])}/>;
  }
}

export default App;
