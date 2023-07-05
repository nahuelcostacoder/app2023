import "./Slider.css";
import { useState } from "react";


function Header({slider, setSlider}) {
  return (
    <>
      <div className={"container "+ (slider?"light":"dark")} onClick={()=>{setSlider(!slider); setTimeout(()=>{}, 1000)}}>
        <div className={ "sphere " + (slider?"fow":"back")}>
        </div>
      </div>
    </>
  );
}

export default Header;
