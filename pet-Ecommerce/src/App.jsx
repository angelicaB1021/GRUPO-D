import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Categorias, categorias } from "./page/categorias/Categorias";
import {
  CategoriasDetalles, 
  // CategoriaAccesorios,
  // CategoriaAlimento,
  // CategoriaJuguetes,
  // CategoriaRopa,
  Error404,
  Home,
  Servicios,
  ServiciosDetalle,
  AcercaDeNosotros,
} from "./page";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          {/* <Route
            path="/categoriaAccesorios"
            element={<CategoriaAccesorios />}
          ></Route>
          <Route
            path="/categoriaAlimento"
            element={<CategoriaAlimento />}
          ></Route>
          <Route
            path="/categoriaJuguetes"
            element={<CategoriaJuguetes />}
          ></Route>
          <Route
            path="/categoriaRopa"
            element={<CategoriaRopa />}
          ></Route> */}
          {/* <Route
            path="/categoriasDetalles"
            element={<CategoriasDetalles />}
          ></Route> */}
          <Route
            path="/categoria/:id"
            element={<CategoriasDetalles categorias={categorias} />}
          />
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
      </BrowserRouter>
    </>
  );
}

export default App;
