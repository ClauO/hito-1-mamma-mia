import Header from "./Header";
import CardPizza from "./CardPizza";
import imgNapolitana from "../assets/img/napolitana.png";
import imgEspanola from "../assets/img/española.png";
import imgPepperoni from "../assets/img/pepperoni.png";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container mt-5 mb-5">
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={imgNapolitana}
            />
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={[
                "mozzarella",
                "gorgonzola",
                "parmesano",
                "provolone",
              ]}
              img={imgEspanola}
            />
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img={imgPepperoni}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
