import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Slider } from "./components/Slider/Slider";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Experiences } from "./components/Experiences/Experiences";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { WhatsappComponent } from "./components/WhatsappComponent/WhatsappComponent";
import "./App.scss";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Slider />
        <AboutUs/>
        <Experiences/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        <WhatsappComponent/>
      </BrowserRouter>
    </>
  );
}

export default App;

//ARRANCAS A CREAR ABOUT US. VERIFICA LOGICA PARA QUE LA NAVEGACION SEA POR SCROLL. BASATE EL LA PAGINA QUE TE PASO. PEDI A CHATGPT UN ABOuT US SEGUN EL SERVICIO QUE OFRECE y EN INGLES; con TITULO y UNA BREVE DESCRIPCION
//HACER GRID AL PRIMER CONTENEDOR DEL EXPERIENCES Y QUE QUEDEN EN FILA AMBOS
