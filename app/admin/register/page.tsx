"use client"

import React from 'react'
import { useFormik } from "formik";
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


const initialValues = {
  name: "",
  username: "",
  email: "",
  mobile:"",
  password: "",
  password_confirmation: "",
};

const Page = () => {

    const formik = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    onSubmit: async () => {
      try {
  //  const selectedAvatar = getAvatar(values.name);
  //  console.log("Selected Avatar:", selectedAvatar);

        // const response = await createUser({
        //   ...values,
        //   avatar: selectedAvatar,
        // });
        // console.log("API Response:", response);

        

        // if (response.data && response.data.status === "success") {
        //   setServerSuccessMessage(response.data.message);
        //   router.push("/blog/account/verify-email");
        //   resetForm(); // Clears the form after submission
        // }
        // if (response.error && response.error.data.status === "failed") {
        //   setServerErrorMessage(response.error.data.message);
        // }
        // setTimeout(() => {
        //   setServerSuccessMessage("");
        //   setServerErrorMessage("");
        // }, 1000);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
 <div>
      {/* {serverSuccessMessage && (
        <p className="text-green-500 text-sm text-center font-bold pt-10">
          {serverSuccessMessage}
        </p>
      )}
      {serverErrorMessage && (
        <p className="text-red-500 text-sm text-center font-bold pt-10">
          {serverErrorMessage}
        </p>
      )} */}

      <div className="max-w-md mx-auto mt-10 p-6 text-[#86868b]">
        <h2 className="text-2xl font-bold mb-4 text-center">Register the new Admin</h2>


              <form
                  onSubmit={formik.handleSubmit}
                  className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border-b bg-transparent outline-none"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border-b bg-transparent outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
                  {/* mobile */}
                    <div>
            <label htmlFor="mobile" className="block font-medium">
              Mobile
            </label>
            <input
              id="mobile"
              type="tel"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border-b bg-transparent outline-none"
            />
            {formik.touched.mobile && formik.errors.mobile && (
              <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
            )}
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border-b bg-transparent outline-none"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="password_confirmation"
              className="block font-medium"
            >
              Confirm Password
            </label>
            <input
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              value={formik.values.password_confirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border-b bg-transparent outline-none"
            />
            {formik.touched.password_confirmation &&
              formik.errors.password_confirmation && (
                <p className="text-red-500 text-sm">
                  {formik.errors.password_confirmation}
                </p>
              )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            Register
          </button>
        </form>
    
      </div>
    </div>
  )
}

export default Page