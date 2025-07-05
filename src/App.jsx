import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { WhatsappComponent } from "./components/WhatsappComponent/WhatsappComponent";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import "./App.scss";
import { Experience } from "./components/Experience/Experience";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:experience" element={<Experience/>}/>
        </Routes>
        <Footer/>
        <WhatsappComponent/>
      </BrowserRouter>
    </>
  );
}

export default App;
