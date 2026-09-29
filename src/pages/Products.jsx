import React from "react";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://fakestoreapi.com/products");

      // response.ok reads a boolean property
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (

  <div className="container mt-4">
<h2 className="mb-4">Products</h2>

<div className="row">
{products.map((product) => (
  <div className="col-md-4 mb-4" key={product.id}>
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>

        <p className="card-text">
          ₹{product.price}
        </p>

        <button className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
))}
</div>
</div>
  );
}