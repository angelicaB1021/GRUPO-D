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
          {/* Ruta para la página principal */}
          <Route path="/" element={<Home />} />
            {/* Ruta para la página de categorías */}
          <Route path="/categorias" element={<Categorias />} />
          {/* Rutas para las subcategorías específicas */}
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
          {/* Ruta para la página de error 404 */}
          <Route path="/Erro404" element={<Error404 />}/>
          <Route path="/Servicios" element={<Servicios />}/>
           {/* Rutas para los servicios y sus detalles */}
          <Route
            path="/Servicios/:id"
            element={<ServiciosDetalle />}
          />
          {/* Ruta para la página "Acerca de Nosotros" */}
          <Route
            path="/AcercaDeNosotros"
            element={<AcercaDeNosotros />}
          />
          {/* Colocamos el componente pie de pagina, que también estará visible en todas las páginas */}
        </Routes>
       <PiedePagina/>
      </BrowserRouter>
    </>
  );
}

export default App;
