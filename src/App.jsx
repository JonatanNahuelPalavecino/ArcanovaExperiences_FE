import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Slider } from "./components/Slider/Slider";
import "./App.scss";
import { AboutUs } from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Slider />
        <AboutUs/>
      </BrowserRouter>
    </>
  );
}

export default App;

//ARRANCAS A CREAR ABOUT US. VERIFICA LOGICA PARA QUE LA NAVEGACION SEA POR SCROLL. BASATE EL LA PAGINA QUE TE PASO. PEDI A CHATGPT UN ABOuT US SEGUN EL SERVICIO QUE OFRECE y EN INGLES; con TITULO y UNA BREVE DESCRIPCION
