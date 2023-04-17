import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../Css/Card.css";

export const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json.products))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <img
        style={{ display: "flex", margin: "auto" }}
        src={"https://media.tenor.com/guhB4PpjrmUAAAAM/loading-loading-gif.gif"}
      />
    );
  }

  return (
    <div style={{ marginTop: "8%" }}>
      <div id="grid">
        {allProducts ? (
          allProducts?.map((elem, index) => (
            <div key={index}>
              <div class="card">
                <img
                  src={elem.images[0]}
                  alt="Denim Jeans"
                  style={{ width: "100%", height: "200px" }}
                />
                <div style={{ height: "120px" }}>
                  <h4>{elem.title}</h4>
                  <p class="price">₹{elem.price}</p>
                  <p>{elem.brand}</p>
                </div>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            </div>
          ))
        ) : (
          <img
            src={
              "https://media.tenor.com/guhB4PpjrmUAAAAM/loading-loading-gif.gif"
            }
          />
        )}
      </div>
    </div>
  );
};
