import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../mocks/pizzas";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container mt-5 mb-5">
        <div className="row justify-content-center g-4">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="col-12 col-md-4 d-flex justify-content-center"
            >
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
