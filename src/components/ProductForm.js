import React, { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function ProductForm({ onAdd }) {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  if (user.role !== "Manager" && user.role !== "StoreKeeper") return null;

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onAdd({ name, price });
    setName("");
    setPrice("");
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}
