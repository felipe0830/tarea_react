import {  Route, Routes } from "react-router-dom"
import GaleriaImagenes from "./components/GaleriaImagenes"
import InicioSesion from "./components/InicioSesion"
import LugaresPopulares from "./components/LugaresPopulares"
import LugaresTransCurridos from "./components/LugaresTransCurridos"
import Layout from "./Menu/Layout"

function App() {
  return (


<Routes>
<Route>

<Route path="/" element={<Layout/>}/>
<Route path="*" element={<InicioSesion/>}/>
<Route path="lugaresTrans" element={<LugaresTransCurridos/>}/>
<Route path="lugarespopulares" element={<LugaresPopulares/>}/>
<Route path="galeriaimagenes" element={<GaleriaImagenes/>}/>
<Route path="lugarestranscurridos" element={<lugaresTransCurrido/>}/>
</Route>
</Routes>

  )
}

export default App
