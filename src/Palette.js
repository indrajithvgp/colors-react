import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import './Palette.css'
import {generatePalette} from './colorHelpers'
import Navbar from "./Navbar";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format:"hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level){
    this.setState({...this.state, level});
  }
  changeFormat(val){
    this.setState({...this.state, format: val});
  }
  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const {level, format} = this.state
    const colorBoxes = colors[level].map(
      (color) => <ColorBox key={color.id} background={color[format]} name={color.name} />
    );
    return (
      <div className="Palette">
        <Navbar
          changeFormat={this.changeFormat}
          level={level}
          changeLevel={this.changeLevel}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">{paletteName}
        <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
export default Palette;
