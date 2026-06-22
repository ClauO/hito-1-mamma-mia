import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-5 mb-5 text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <h2>Página no encontrada 😢</h2>
      <p className="mb-4">La ruta que intentas consultar no existe.</p>
      <Link to="/" className="btn btn-dark">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
