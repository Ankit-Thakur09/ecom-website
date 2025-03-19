"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const categories = {
  Clothing: ["T-Shirts", "Jeans", "Jackets"],
  Electronics: ["Mobile", "Laptop", "Tablet"],
};

const seasons = ["Summer", "Winter", "Spring", "Autumn"];

// ✅ Yup Validation Schema
const AddProductSchema = Yup.object({
  productName: Yup.string().required("Product name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be greater than zero"),
  dateAdded: Yup.date().required("Date is required"),
  quantity: Yup.number()
    .required("Quantity is required")
    .min(1, "Quantity must be at least 1"),
  category: Yup.string().required("Category is required"),
  subcategory: Yup.string().when("category", {
    is: (val) => val && categories[val],
    then: (schema) => schema.required("Subcategory is required"),
  }),
  season: Yup.string().when("category", {
    is: "Clothing",
    then: (schema) => schema.required("Season is required"),
  }),
  displayImages: Yup.mixed().required("Display images are required"),
  insideImages: Yup.mixed().required("Inside images are required"),
  keywords: Yup.string().required("Keywords are required"),
});

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [displayPreviews, setDisplayPreviews] = useState([]);
  const [insidePreviews, setInsidePreviews] = useState([]);

  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      price: "",
      dateAdded: "",
      quantity: "",
      category: "",
      subcategory: "",
      season: "",
      displayImages: [],
      insideImages: [],
      keywords: "",
    },
    validationSchema: AddProductSchema,
    onSubmit: (values) => {
      console.log("Product Data:", values);
      alert("Product added successfully!");
    },
  });

  // Handle file uploads and previews
  const handleImageUpload = (event, field) => {
    const files = Array.from(event.target.files);
    formik.setFieldValue(field, files);

    const previews = files.map((file) => URL.createObjectURL(file));
    if (field === "displayImages") setDisplayPreviews(previews);
    else setInsidePreviews(previews);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            name="productName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productName}
            className="w-full p-2 border-b outline-none"
          />
          {formik.touched.productName && formik.errors.productName && (
            <p className="text-red-500 text-sm">{formik.errors.productName}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="w-full p-2 border-b bg-transparent outline-none"
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500 text-sm">{formik.errors.description}</p>
          )}
        </div>
        {/* keywords */}
        <div>
          <label className="block font-medium">Keywords</label>
          <input
            type="text"
            name="keywords"
            placeholder="(comma separated)"
            className="w-full p-2 border-b"
            value={formik.values.keywords}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.keywords && formik.errors.keywords && (
            <div className="text-red-500 text-sm">{formik.errors.keywords}</div>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            className="w-full p-2 border-b bg-transparent outline-none"
          />
          {formik.touched.price && formik.errors.price && (
            <p className="text-red-500 text-sm">{formik.errors.price}</p>
          )}
        </div>

        {/* Display Images */}
        <div>
          <label className="block font-medium">Display Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "displayImages")}
            className="w-full p-2 "
          />
          {formik.touched.displayImages && formik.errors.displayImages && (
            <p className="text-red-500 text-sm">
              {formik.errors.displayImages}
            </p>
          )}
          {/* Preview */}
          <div className="flex gap-2 mt-2">
            {displayPreviews.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Preview"
                className="w-16 h-16 object-cover rounded"
              />
            ))}
          </div>
        </div>

        {/* Inside Images */}
        <div>
          <label className="block font-medium">Inside Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "insideImages")}
            className="w-full p-2 "
          />
          {formik.touched.insideImages && formik.errors.insideImages && (
            <p className="text-red-500 text-sm">{formik.errors.insideImages}</p>
          )}
          {/* Preview */}
          <div className="flex gap-2 mt-2">
            {insidePreviews.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Preview"
                className="w-16 h-16 object-cover rounded"
              />
            ))}
          </div>
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block font-medium">Category</label>
          <select
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
              formik.setFieldValue("category", e.target.value);
              formik.setFieldValue("subcategory", "");
            }}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            className="w-full p-2 border-b bg-transparent outline-none"
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
              name="subcategory"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subcategory}
              className="w-full p-2 border-b bg-transparent outline-none"
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
