import * as Yup from "yup";


const RegisterSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
  password_confirmation: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
   mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "invalid number")
    // .min(10, "Mobile number must be at least 10 digits")
    // .max(15, "Mobile number cannot exceed 15 digits"),
});

export default RegisterSchema;