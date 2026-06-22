import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/format";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ¡Pizzería Mamma Mía!
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                🍕 Home
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/profile">
                    🔓 Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link text-white btn btn-link">
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    🔏 Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            <Link to="/cart" className="btn btn-outline-info">
              🛒 Total: ${formatCurrency(total)}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
