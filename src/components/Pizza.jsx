import { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error fetching pizza:", error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container text-center mt-5 mb-5">
        <h3>Cargando pizza... 🍕</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center">
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={pizza.img}
              className="img-fluid rounded-start h-100 object-fit-cover"
              alt={pizza.name}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title text-capitalize">Pizza {pizza.name}</h3>
              <p className="card-text text-muted">{pizza.desc}</p>

              <p className="card-text fw-bold mb-1">Ingredientes:</p>
              <ul className="text-capitalize list-unstyled">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>🍕 {ingredient}</li>
                ))}
              </ul>

              <h4 className="mt-4">
                Precio: ${pizza.price.toLocaleString("es-CL")}
              </h4>
              <button className="btn btn-dark mt-3">Añadir 🛒</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
