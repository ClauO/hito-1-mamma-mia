import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Register from "./components/Register";
// import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Register />
      <Login /> */}
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
