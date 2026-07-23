import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, logout, getProfile } = useContext(UserContext);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container mt-5 mb-5 text-center">
      <h2>Perfil del Usuario</h2>
      <p className="mt-3">
        <strong>Email:</strong> {email}
      </p>
      <button className="btn btn-danger mt-3" onClick={logout}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
