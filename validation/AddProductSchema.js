import * as Yup from "yup";
const categories = {
  Clothing: ["T-Shirts", "Jeans", "Jackets"],
  Electronics: ["Mobile", "Laptop", "Tablet"],
};

const AddProductSchema = Yup.object({
  productName: Yup.string().required("Product name is required"),
  description: Yup.string().required("Description is required"),
    highlights: Yup.string().required("Description is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be greater than zero"),
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

export default AddProductSchema;


