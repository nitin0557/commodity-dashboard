import React, { useEffect, useState } from "react";
import Footer from "./Dashboard/components/Footer";
import SideNav from "./Dashboard/components/SideNav";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const AddProductPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    tags: "",
    price: "",
    discount: "",
    discountCategory: "",
    previewImage: null,
    thumbnailImage: null,
  });

  // Fetch categories from Fake Store API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, [type]: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Product Saved (Check console)");
  };
  const handleLogout = () => {
    navigate("/commodity-dashboard");
  };

  return (
    <>
      <div className="flex bg-gray-100 min-h-screen">
        <SideNav />

        <main className="flex-1 p-6 bg-customLight dark:bg-customDark dark:text-white">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Add Product</h2>

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

          <div className="flex space-x-2 justify-end mb-4">
            <button className="px-4 py-2 rounded-lg border border-red-400 text-red-500 hover:bg-red-100">
              Discard Changes
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>

          {/* Form */}
          <form className="grid grid-cols-3 gap-6 bg-customLight dark:bg-customDark dark:text-white">
            {/* Left Side (Form Fields) */}
            <div className="col-span-2 space-y-6">
              {/* General Info */}
              <div className="bg-white shadow-md rounded-lg p-6 bg-customLight dark:bg-customDark dark:text-white">
                <h3 className="font-semibold text-lg mb-4">
                  General Information
                </h3>

                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat, i) => (
                      <option key={i} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full border rounded p-2 h-24"
                  />
                  <input
                    type="text"
                    name="tags"
                    placeholder="Tag keywords"
                    value={form.tags}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Pricing</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                  <input
                    type="text"
                    name="discount"
                    placeholder="Discount"
                    value={form.discount}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                  <select
                    name="discountCategory"
                    value={form.discountCategory}
                    onChange={handleChange}
                    className="w-full border rounded p-2 col-span-2"
                  >
                    <option value="">Discount Category</option>
                    <option value="seasonal">Seasonal</option>
                    <option value="clearance">Clearance</option>
                    <option value="special">Special</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Side (Image Upload) */}
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Preview Product</h3>
                <label className="border-2 border-dashed rounded-lg flex items-center justify-center h-40 cursor-pointer">
                  {form.previewImage ? (
                    <img
                      src={form.previewImage}
                      alt="Preview"
                      className="h-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-400">Drag & drop or Click</span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "previewImage")}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">
                  Thumbnail Product
                </h3>
                <label className="border-2 border-dashed rounded-lg flex items-center justify-center h-40 cursor-pointer">
                  {form.thumbnailImage ? (
                    <img
                      src={form.thumbnailImage}
                      alt="Thumbnail"
                      className="h-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-400">Drag & drop or Click</span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "thumbnailImage")}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AddProductPage;
