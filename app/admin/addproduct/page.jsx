"use client"

import { useState } from "react";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [season, setSeason] = useState("");

  const categories = {
    Clothing: ["T-Shirts", "Jeans", "Jackets"],
    Electronics: ["Mobile", "Laptop", "Tablet"],
  };

  const seasons = ["Summer", "Winter", "Spring", "Autumn"];

  return (
    <div className="max-w-md mx-auto mt-10 p-6 text-[#86868b]">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>
      <form className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            className="w-full p-2 border-b bg-transparent outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea className="w-full p-2 border-b bg-transparent outline-none" />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            className="w-full p-2 border-b bg-transparent outline-none"
          />
        </div>

        {/* Display Images */}
        <div>
          <label className="block font-medium">Display Images</label>
          <input type="file" multiple className="w-full p-2" />
        </div>

        {/* Main Image */}
        <div>
          <label className="block font-medium">Main Image</label>
          <input type="file" className="w-full p-2" />
        </div>

        {/* Date Added */}
        <div>
          <label className="block font-medium">Date Added</label>
          <input
            type="date"
            className="w-full p-2 border-b bg-transparent outline-none"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-medium">Quantity</label>
          <input
            type="number"
            className="w-full p-2 border-b bg-transparent outline-none"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block font-medium">Category</label>
          <select
            className="w-full p-2 border-b bg-transparent outline-none"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Dropdown (if applicable) */}
        {category && categories[category] && (
          <div>
            <label className="block font-medium">Subcategory</label>
            <select
              className="w-full p-2 border-b bg-transparent outline-none"
              onChange={(e) => setSubcategory(e.target.value)}
            >
              <option value="">Select Subcategory</option>
              {categories[category].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Season Dropdown (if Clothing) */}
        {category === "Clothing" && (
          <div>
            <label className="block font-medium">Season</label>
            <select
              className="w-full p-2 border-b bg-transparent outline-none"
              onChange={(e) => setSeason(e.target.value)}
            >
              <option value="">Select Season</option>
              {seasons.map((season) => (
                <option key={season} value={season}>
                  {season}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
