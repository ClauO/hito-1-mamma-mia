import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";
// import Home from "./components/Home";
// import Cart from "./components/Cart";
// import Register from "./components/Register";
// import Login from "./components/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  );
};

export default App;
