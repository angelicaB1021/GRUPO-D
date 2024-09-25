import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Categorias,
  //CategoriasDetalles, 
  CategoriaAccesorios,
  CategoriaAlimento,
  CategoriaJuguetes,
  CategoriaRopa,
  Error404,
  Home,
  Servicios,
  ServiciosDetalle,
  AcercaDeNosotros,
} from "./page";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route
            path="/categorias/Accesorios"
            element={<CategoriaAccesorios />}
          ></Route>
          <Route
            path="/categorias/Alimento"
            element={<CategoriaAlimento />}
          ></Route>
          <Route
            path="/categorias/Juguetes"
            element={<CategoriaJuguetes />}
          ></Route>
          <Route
            path="/categorias/Ropa"
            element={<CategoriaRopa />}
          ></Route>
          {/* <Route
            path="/categoriasDetalles"
            element={<CategoriasDetalles />}
          ></Route>
          <Route
            path="/categoria/:id"
            element={<CategoriasDetalles categorias={categorias} />}
          /> */}
          <Route path="/Erro404" element={<Error404 />}/>
          <Route path="/Servicios" element={<Servicios />}/>
          <Route
            path="/ServiciosDetalle"
            element={<ServiciosDetalle />}
          />
          <Route
            path="/AcercaDeNosotros"
            element={<AcercaDeNosotros />}
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
