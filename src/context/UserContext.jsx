import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (emailInput, passwordInput) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await response.json();

      if (data?.token) {
        setToken(data.token);
        setEmail(data.email);
        return true;
      } else {
        alert(data?.error || "Error al iniciar sesión");
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const register = async (emailInput, passwordInput) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await response.json();

      if (data?.token) {
        setToken(data.token);
        setEmail(data.email);
        return true;
      } else {
        alert(data?.error || "Error al registrarse");
        return false;
      }
    } catch (error) {
      console.error("Register error:", error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const getProfile = async () => {
    if (!token) return;
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Profile error:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
