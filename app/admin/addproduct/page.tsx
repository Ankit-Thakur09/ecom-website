"use client";

import { useState } from "react";
import { useFormik } from "formik";
import {categories,seasons} from "../../../constants"

import AddProductSchema from "../../../validation/AddProductSchema"
import { useAddProductMutation } from "@/lib/services/adminAuth";
import { useRouter } from "next/navigation";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [displayPreviews, setDisplayPreviews] = useState([]);
  const [insidePreviews, setInsidePreviews] = useState([]);
    const [serverErrorMessage, setServerErrorMessage] = useState("");
  const [serverSuccessMessage, setServerSuccessMessage] = useState("");
   const router = useRouter();
  const [addProduct]=useAddProductMutation()

  const formik = useFormik({
    initialValues: {
      productName: "",
      description: "",
      price: "",
      quantity: "",
      category: "",
      subcategory: "",
      season: "",
      displayImages: [],
      insideImages: [],
      keywords: "",
      highlights: "",
      size:"",
    },
    validationSchema: AddProductSchema,
    onSubmit: async (values, { resetForm }) => {
        console.log("Form submitted!");

alert("no data")
      
        console.log("Submitting form...", values);
        const formData = new FormData();
      formData.append("productName", values.productName);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("quantity", values.quantity);
      formData.append("category", values.category);
      formData.append("subcategory", values.subcategory);
      formData.append("season", values.season);
      formData.append("keywords", values.keywords);
      formData.append("highlights", values.highlights);
      formData.append("size", values.size);

      // Append images
      values.displayImages.forEach((image) => {
        formData.append("displayImages", image);
      });
      values.insideImages.forEach((image) => {
        formData.append("insideImages", image);
      });
      try {
       const response = await addProduct(formData);
        if (response.data?.success) {
      setServerSuccessMessage(response.data.message);
      router.push("/");  // Ensure this route exists
      resetForm();
    } else {
      setServerErrorMessage(response.data.message || "Something went wrong");
    }
        setTimeout(() => {
          setServerSuccessMessage("");
          setServerErrorMessage("");
        }, 2000);
     
     } catch (error) {
        console.log(error)
     }
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


    <> {serverSuccessMessage && (
        <p className="text-green-500 text-sm text-center font-bold pt-10">
          {serverSuccessMessage}
        </p>
      )}
      {serverErrorMessage && (
        <p className="text-red-500 text-sm text-center font-bold pt-10">
          {serverErrorMessage}
        </p>
      )}
        <div className=" p-6 bg-[#100d25] ">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Add New Product
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Product Name */}
          <div>
            <label className="block font-medium text-white">Product Name</label>
            <input
              type="text"
              name="productName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productName}
              className="bg-[#151030]  py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
            />
            {formik.touched.productName && formik.errors.productName && (
              <p className="text-red-500 text-sm">
                {formik.errors.productName}
              </p>
            )}
          </div>
          {/* Price */}
          <div>
            <label className="block font-medium text-white">Price</label>
            <input
              type="number"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              className="bg-[#151030]  py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
            />
            {formik.touched.price && formik.errors.price && (
              <p className="text-red-500 text-sm">{formik.errors.price}</p>
            )}
          </div>
          {/* Quantity */}
          <div>
            <label className="block font-medium text-white">Quantity</label>
            <input
              type="number"
              name="quantity"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.quantity}
              className="bg-[#151030]  py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
            />
            {formik.touched.quantity && formik.errors.quantity && (
              <p className="text-red-500 text-sm">{formik.errors.quantity}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Description */}
          <div>
            <label className="block font-medium text-white">Description</label>
            <textarea
              name="description"
              rows={7}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className="bg-[#151030] w-full  py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
            />
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 text-sm">
                {formik.errors.description}
              </p>
            )}
          </div>

          <div className="flex flex-col md:gap-2 gap-4">
            {/* Highlights */}
            <div>
              <label className="block font-medium text-white">
                Major Highlights
              </label>
              <textarea
                name="highlights"
                rows={3}
                className="bg-[#151030]  py-4 px-6 rounded-lg w-full outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
                value={formik.values.highlights}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.highlights && formik.errors.highlights && (
                <div className="text-red-500 text-sm">
                  {formik.errors.highlights}
                </div>
              )}
            </div>
            {/* keywords */}
            <div>
              <label className="block font-medium text-white">Keywords</label>
              <input
                name="keywords"
                placeholder="(comma separated)"
                className="bg-[#151030]  py-4 px-6 rounded-lg w-full outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
                value={formik.values.keywords}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.keywords && formik.errors.keywords && (
                <div className="text-red-500 text-sm">
                  {formik.errors.keywords}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Display Images */}
          <div>
            <label className="block font-medium text-white">
              Display Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "displayImages")}
              className="bg-[#151030]  py-4 px-6 rounded-lg w-full outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
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
            <label className="block font-medium text-white">
              Inside Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "insideImages")}
              className="bg-[#151030]  py-4 px-6 rounded-lg w-full outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
            />
            {formik.touched.insideImages && formik.errors.insideImages && (
              <p className="text-red-500 text-sm">
                {formik.errors.insideImages}
              </p>
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
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Category Dropdown */}
          <div>
            <label className="block font-medium text-white">Category</label>
            <select
              name="category"
              onChange={(e) => {
                setCategory(e.target.value);
                formik.setFieldValue("category", e.target.value);
                formik.setFieldValue("subcategory", "");
              }}
              onBlur={formik.handleBlur}
              value={formik.values.category}
              className="bg-[#151030]  py-4 px-6 rounded-lg w-full outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
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
              <label className="block font-medium text-white">
                Subcategory
              </label>
              <select
                name="subcategory"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subcategory}
                className="bg-[#151030]  py-4 px-6 rounded-lg w-full outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
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

          {category === "Clothing" && (
            <div>
              <label className="block font-medium text-white">Season</label>
              <select
                name="season"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.season}
                className="bg-[#151030]  py-4 px-6 rounded-lg w-full outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
              >
                <option value="">Select seasons</option>
                {seasons.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
          )}
          {category === "Clothing" && (
            <div>
              <label className="block font-medium text-white">Size</label>
              <input
                name="size"
                placeholder="(comma separated)"
                className="bg-[#151030]  py-4 px-6 rounded-lg w-full outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white "
                value={formik.values.size}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.size && formik.errors.size && (
                <div className="text-red-500 text-sm">{formik.errors.size}</div>
              )}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          {" "}
          <button
            type="submit"
            className="bg-[#151030] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-[#050816] rounded-xl hover:scale-105 cursor-pointer hover:bg-[#201747] "
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
    </>
  
  );
};

export default AddProduct;
