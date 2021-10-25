import React, {useState, useEffect} from 'react'
import './Navbar.css'
import Slider, { Range } from "rc-slider";
import { Link } from "react-router-dom";

import "rc-slider/assets/index.css";
import { Select, MenuItem, Snackbar, IconButton } from "@material-ui/core";
import { CloseIcon} from "@material-ui/icons/Close";
const Navbar = ({level, changeLevel, changeFormat}) => {
    const [format, setFormat] = useState("hex")
    const [open, setOpen] = useState(false)
    const handleChange =(e)=>{
      setFormat(e.target.value)
      setOpen(true);
      changeFormat(e.target.value);
    }
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">die-farbe-picker</Link>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              step={100}
              max={900}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={handleChange}>
            <MenuItem value="hex">HEX</MenuItem>
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="rgba">RGBA</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed to {format.toLocaleUpperCase()}.!
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={() => setOpen(false)}
          // action={
          //   [<IconButton onClick={() => setOpen(false)} aria-label="close" key="close" color="inherit">
          //     <CloseIcon />
          //   </IconButton>]
          // }
        />
      </header>
    );
}

export default Navbar
