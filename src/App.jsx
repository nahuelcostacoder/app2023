import { createContext, useContext, useState, useEffect } from "react";
import "./App.css";

//COMPONENTES
import Header from "./components/Header/Header.jsx";
import Page3 from "./components/Page_3/Page3.jsx";
import Page2 from "./components/Page_2/Page2.jsx";
import Page1 from "./components/Page_1/Page1.jsx";
import Footer from "./components/Footer/Footer.jsx";

const theme = createContext("ERROR");
export function contadorContext() {
  const tema = useContext(theme)?"light":"dark"
  return tema;
}

//FUNCION
function App() {
  const [actualPage, setActualPage] = useState("a");
  const [slider, setSlider] = useState(false)

  function pages(x) {
    switch (x) {
      case "b":
      return <Page2/>
      case "c":
        return <Page3/>
      default:
        return <Page1/>
    }
  }

  return (
    <>
      <theme.Provider value={slider}>
        <div style={{backgroundColor: (slider?"white":"#1f1e1e")}}>
        <Header setActualPage={setActualPage} sliders={{slider, setSlider}}></Header>
        {pages(actualPage)}
      <Footer />
        </div>
      </theme.Provider>
    </>
  );
}

export default App;
