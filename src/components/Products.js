import React, { useEffect, useState } from "react";
import SideNav from "./Dashboard/components/SideNav";
import Footer from "./Dashboard/components/Footer";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex bg-gray-100 min-h-screen bg-customLight dark:bg-customDark dark:text-white">
        <SideNav />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Product</h2>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <select className="border rounded-lg px-3 py-1">
                <option>Admin</option>
                <option>User</option>
                <option>Manager</option>
              </select>
              <button className="p-2 rounded-lg hover:bg-gray-200">
                <span className="material-icons">grid_view</span>
              </button>

              <button className="p-2 rounded-lg hover:bg-gray-200">
                <span className="material-icons">notifications</span>
              </button>

     
              <Link to="/login">
                <button
                  onClick={handleLogout}
                  className="w-10 h-10 rounded-full overflow-hidden border"
                >
                  <img
                    src="https://i.pravatar.cc/100" // Replace with real user profile image
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </button>
              </Link>
            </div>
          </div>

    
          <div className="flex justify-between space-x-4 mb-4 border-b pb-2">
            <div className="flex space-x-1">
              <button className="border-b-2 border-blue-600 text-blue-600 font-semibold">
                Published
              </button>
              <button className="text-gray-500">Draft</button>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
              + Add New Product
            </button>
          </div>

  
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {loading ? (
              <p className="p-4">Loading...</p>
            ) : (
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="p-3">
                      <input type="checkbox" />
                    </th>
                    <th className="p-3">Product Name</th>
                    <th className="p-3">Views</th>
                    <th className="p-3">Pricing</th>
                    <th className="p-3">Revenue</th>
                    <th className="p-3">Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-3">
                        <input type="checkbox" />
                      </td>
                      <td className="p-3 flex items-center space-x-2">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-10 h-10 object-contain rounded"
                        />
                        <span className="truncate max-w-xs">
                          {product.title}
                        </span>
                      </td>
                      <td className="p-3">14,000</td>
                      <td className="p-3">${product.price}</td>
                      <td className="p-3">
                        ${(product.price * 164).toFixed(2)}
                      </td>
                      <td className="p-3 flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">
                          Edit
                        </button>
                        <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

    
          <div className="flex justify-end mt-4 space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className="px-3 py-1 border rounded hover:bg-gray-200"
              >
                {num}
              </button>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
