import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/NavBar/NavBar"
import { Slider } from "./components/Slider/Slider"
import "./App.scss"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Slider/>
      </BrowserRouter>
    </>
  )
}

export default App
