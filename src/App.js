import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Palette from "./Palette";
import seedColors from './seedColors'


class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return <Palette {...seedColors[5]}/>;
  }
}

export default App;
