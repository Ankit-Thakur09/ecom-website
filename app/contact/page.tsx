import React, { useRef, useState } from 'react'

import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import {styles} from "../style"
import {SectionWrapper} from "../../hoc/index"
import { slideIn } from "../../utils/motion"
import {EarthCanvas} from "../../components/canvas/index"


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message:""
    })
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => { }
     const handleSubmit=(e)=>{}

  return (
      <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden'>
          <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] p-8 rounded-2xl'></motion.div>
          <p>Get in touch</p>
          h3
    </div>
  )
}

export default SectionWrapper(Contact, "contact")