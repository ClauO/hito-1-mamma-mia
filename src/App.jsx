import { Routes, Route, Navigate } from "react-router-dom"; // <-- Añadimos Navigate
import { useContext } from "react";
import { UserContext } from "./context/UserContext"; // <-- Importamos
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const { token } = useContext(UserContext); // <-- Extraemos el token

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Rutas protegidas para usuarios NO logueados */}
        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />

        <Route path="/cart" element={<Cart />} />

        {/* Ruta dinámica para la pizza */}
        <Route path="/pizza/:id" element={<Pizza />} />

        {/* Ruta protegida para usuarios logueados */}
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
