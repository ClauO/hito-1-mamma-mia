import { useContext } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/format";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ¡Pizzería Mamma Mía!
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                🍕 Home
              </Link>
            </li>
            {token ? (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/profile">
                  🔓 Profile
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">
                  🔐 Login
                </Link>
              </li>
            )}
          </ul>
          <Link to="/cart" className="btn btn-outline-info">
            🛒 Total: ${formatCurrency(total)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
