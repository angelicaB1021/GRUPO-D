// Importamos los módulos necesarios desde react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importamos los componentes de páginas desde el archivo "./page"
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
// Importamos los componentes Navbar y Footer
import Navbar from "./components/Navbar";
import PiedePagina from "./components/PiedePagina";
// Definimos el componente principal "App"
function App() {
  return (
    <>
    {/* Utilizamos BrowserRouter para manejar el enrutamiento */}
      <BrowserRouter>
      {/* Colocamos el componente Navbar, que estará visible en todas las páginas */}
        <Navbar />
         {/* Definimos las rutas que se renderizarán según la URL */}
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
            path="/Servicios/:id"
            element={<ServiciosDetalle />}
          />
          <Route
            path="/AcercaDeNosotros"
            element={<AcercaDeNosotros />}
          />
        </Routes>
       <PiedePagina/>
      </BrowserRouter>
    </>
  );
}

export default App;
