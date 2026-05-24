import { formatCurrency } from "../utils/format";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mia!
        </a>
        <div className="collapse navbar-collapse d-flex justify-content-between">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-2">
            <li className="nav-item">
              <button className="btn btn-outline-light text-white">
                🍕 Home
              </button>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light text-white">
                    🔓 Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light text-white">
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-outline-light text-white">
                    🔐 Login
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light text-white">
                    🔐 Register
                  </button>
                </li>
              </>
            )}
          </ul>

          <button className="btn btn-outline-info">
            🛒 Total: ${formatCurrency(total)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
