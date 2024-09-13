import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Categorias, CategoriasDetalles, Error404, Home, Servicios, ServiciosDetalle, AcercaDeNosotros } from "./page";
import Navbar from "./components/Navbar";


function App() {
 
  return (
    <>

    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/categorias" element = {<Categorias/>}></Route>
          <Route path="/categoriasDetalles" element = {<CategoriasDetalles/>}></Route>
          <Route path="/Erro404" element = {<Error404/>}></Route>
          <Route path="/Servicios" element = {<Servicios/>}></Route>
          <Route path="/ServiciosDetalle" element = {<ServiciosDetalle/>}></Route>
          <Route path="/AcercaDeNosotros" element = {<AcercaDeNosotros/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
