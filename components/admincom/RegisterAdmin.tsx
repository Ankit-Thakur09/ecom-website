"use client"

import React, {  useRef } from 'react'
import { FaTimes } from "react-icons/fa";

import { useFormik } from "formik";
import RegisterSchema from "../../validation/RegisterAdminSchema"

const initialValues = {
  name: "",
  username: "",
  email: "",
  mobile:"",
  password: "",
  password_confirmation: "",
};
interface RegisterProps {
  Xmark?: boolean;
  closeModal: () => void;
}
const RegisterAdmin : React.FC<RegisterProps>= ({  Xmark = false, closeModal })=> {
//  const formRef = useRef(null); 
      const modalRef = useRef<HTMLDivElement>(null);
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
  


 const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };
  
  return (
 <div className='fixed inset-0 flex items-center justify-center  backdrop-blur-lg mt-5 mb-5 h-screen'onClick={(e)=>handleOutsideClick(e)}>
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

      <div ref={modalRef}
                  onClick={(e) => e.stopPropagation()}className='md:p-10 rounded-lg p-8  bg-[#100d25] relative md:w-96 '>
           {Xmark && (
                                <button
                                  onClick={closeModal}
                                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-all duration-300"
                                >
                                  <FaTimes />
                                </button>
                              )}
        <h2 className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider">Register the new Admin</h2>
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

export default RegisterAdmin