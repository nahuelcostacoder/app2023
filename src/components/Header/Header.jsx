import "./Header.css";
import logo from "../../assets/logo.svg";

import Slider from "./Slider/Slider.jsx"

function Header({ setActualPage, sliders }) {
  return (
    <>
      <div className="Header">
        <div className="logo" onClick={() => {setActualPage("a"); window.scrollTo(0,0)}}>
          <img src={logo} />
          <h2>Security</h2>
        </div>
        <div className="pages">
          <button onClick={() => {setActualPage("a"); window.scrollTo(0,0)}}>Home</button>
          <button onClick={() => {setActualPage("b"); window.scrollTo(0,0)}}>Demo</button>
          <button onClick={() => {setActualPage("c"); window.scrollTo(0,0)}}>Contactanos</button>
        </div>
        <Slider slider={sliders.slider} setSlider={sliders.setSlider} />
      </div>
    </>
  );
}

export default Header;
