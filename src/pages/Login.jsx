import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres");
      return;
    }

    const success = await login(email, password);
    if (success) {
      alert("¡Inicio de sesión exitoso!");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
