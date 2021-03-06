import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link, withRouter } from "react-router-dom";
import chroma from "chroma-js";
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }
  render() {
    const { name, background, moreUrl, id, paletteId, showLink, showingFullPalette } =
      this.props;
    const {copied} = this.state
    const isDarkColor = chroma(background).luminance() <= 0.6
    const isWhiteColor = chroma(background).luminance() >= 0.7;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ backgroundColor: background }} className="ColorBox">
          <div
            style={{ backgroundColor: background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button className={`copy-button ${isWhiteColor && "dark-text"}`}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={`see-more ${isWhiteColor && "dark-text"}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
export default withRouter(ColorBox);
