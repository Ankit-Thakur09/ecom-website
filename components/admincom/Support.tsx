"use client"
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { FaTimes } from "react-icons/fa";


import emailjs from "@emailjs/browser"

interface SupportProps {
  Xmark?: boolean;
  closeModal: () => void;
}

const Support: React.FC<SupportProps>= ({  Xmark = false, closeModal }) => {
    const formRef = useRef(null); 
      const modalRef = useRef<HTMLDivElement>(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message:""
    })
    const [loading, setLoading] = useState(false)
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    }
  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_SUPPORT_TEMPLATE_ID!,
      {
        from_name: form.name,
        to_name: process.env.NEXT_PUBLIC_EMAILJS_TO_NAME!,
        from_email: form.email,
        to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!,
        message: form.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    )
    .then(() => {
      setLoading(false);
      alert("We will get back to you soon");
      setForm({
        name: "",
        email: "",
        message: "",
      });
      closeModal();
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
      alert("Something went wrong");
    });
};

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  return (
      <div className='fixed inset-0 flex items-center justify-center  backdrop-blur-lg mt-5 mb-5 h-screen '
          onClick={(e)=>handleOutsideClick(e)}>
          <div  ref={modalRef}
                  onClick={(e) => e.stopPropagation()}className='md:p-10 rounded-lg p-8  bg-[#100d25] relative md:w-96 '>

              
                   {Xmark && (
                        <button
                          onClick={closeModal}
                          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-all duration-300"
                        >
                          <FaTimes />
                        </button>
                      )}
                <p className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider">Need any help.</p>
              <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h3>
              <form onSubmit={handleSubmit}
                  ref={formRef}
                  className='mt-2 flex flex-col gap-2'>
                  <label htmlFor="name" className='text-white flex flex-col'>
                      <input type="text" name='name' value={form.name} onChange={handleChange} className='bg-[#151030]  py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white '
                      placeholder="What's your name?"/>
                  </label>
                  <label htmlFor="email" className=' text-white flex flex-col'>
                   
                      <input type="email" name='email' value={form.email} onChange={handleChange}className='bg-[#151030]  py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white '
                      placeholder="What's your email?"/>
                  </label>
                  <label htmlFor="message" className=' text-white flex flex-col'>
                     
                      <textarea  name='message' rows={7 }value={form.message} onChange={handleChange} className='bg-[#151030]  py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white '
                      placeholder="What do you want to say?"/>
                  </label>
                  
<button type="submit"  className='bg-[#151030] mt-2 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-[#050816] rounded-xl'>
{loading? "Sending...":"Send Message"}

                      
</button>


              </form>
          </div>
    </div> 
  )
}

export default Support