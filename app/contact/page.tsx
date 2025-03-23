"use client"

import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'

import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import {styles} from "../style"
import {SectionWrapper} from "../../hoc/index"
import { slideIn } from "../../utils/motion"
import EarthCanvas from '@/components/canvas/Earth'


const Contact = () => {
    const formRef = useRef(null ); 
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
        setLoading(true)
        emailjs.send("service_6kymvux", "template_u6ec05v",
            {
                from_name: form.name,
                to_name: "Ankit",
                from_email: form.email,
                to_email:"ankitthakur12499@gmail.com",
                message: form.message
            },
            "MPp-viltL7tfZCpyE"
).then(()=>{
    setLoading(false);
    alert("We will get back to you soon");
    setForm({
        name: "",
        email: "",
        message:""
    })
},(error) => {
        setLoading(false);
    console.log(error)
    alert("something went wrong")
    }

        )
      }

  return (
      <div className='lg:mt-12 lg:flex-row flex flex-col-reverse gap-10 overflow-hidden'>
          <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] p-8 rounded-2xl bg-[#100d25]'>
                <p className={styles.sectionSubText}>Get in touch</p>
              <h3 className={styles.sectionHeadText}>Contact.</h3>
              <form onSubmit={handleSubmit}
                  ref={formRef}
                  className='mt-12 flex flex-col gap-8'>
                  <label htmlFor="name" className='text-white flex flex-col'>
                      <span className='font-medium mb-4'>
                          Your Name
                      </span>
                      <input type="text" name='name' value={form.name} onChange={handleChange} className='bg-[#151030]  py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white '
                      placeholder="What's your name?"/>
                  </label>
                  <label htmlFor="email" className=' text-white flex flex-col'>
                      <span className='font-medium mb-4'>
                          Your Email
                      </span>
                      <input type="email" name='email' value={form.email} onChange={handleChange}className='bg-[#151030]  py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white '
                      placeholder="What's your email?"/>
                  </label>
                  <label htmlFor="message" className=' text-white flex flex-col'>
                      <span className='font-medium mb-4'>
                          Your Message
                      </span>
                      <textarea  name='message' rows={7 }value={form.message} onChange={handleChange} className='bg-[#151030]  py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-[#aaa6c3] text-white '
                      placeholder="What do you want to say?"/>
                  </label>
                  
<button type="submit"  className='bg-[#151030] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-[#050816] rounded-xl'>
{loading? "Sending...":"Send Message"}

                      
</button>


              </form>
          </motion.div>

          <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]  '>
              <EarthCanvas/>
        </motion.div>
    </div> 
  )
}

export default SectionWrapper(Contact, "contact")