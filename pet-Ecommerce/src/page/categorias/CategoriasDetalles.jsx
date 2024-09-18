// import { useParams, useNavigate } from "react-router-dom";

// export const CategoriasDetalles = ({ categorias }) => {
//   const navegacion = useNavigate();
//   const { id } = useParams();
//   const infoCategoria= categorias.find(
//     (categoria) => categoria.id.toString() === id
//   );

//   const funcionNavegacion = () => {
//     navegacion(-1);
//   };


//   return (
//     <section>
//       <h1>{infoCategoria.nombre}</h1>
//       <h2>{infoCategoria.descripcion}</h2>
//       <button onClick={funcionNavegacion}>Regresar</button>
//     </section>
//   );
// };
