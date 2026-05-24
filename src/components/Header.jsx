import imagenFondo from "../assets/img/Header.jpg";

const Header = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-white text-center header-background"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagenFondo})`,
      }}
    >
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-50 mx-auto" />
    </div>
  );
};

export default Header;
