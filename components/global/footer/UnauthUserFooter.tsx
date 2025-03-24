"use client"


import Link from "next/link";
// import React from "react";
import { unauthFooterLinks } from "../../../constants/index";
import { useEffect, useRef, useState } from "react";
import UserReg from "@/components/usercom/UserReg";


const UnauthUserFooter: React.FC = () => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
 const modalRef = useRef<HTMLDivElement>(null);
  
  const closeModal = () => {
    setIsSupportModalOpen(false)
      setIsRegisterModalOpen(false)
    };
    useEffect(() => {
      if (isSupportModalOpen||isRegisterModalOpen) {
        document.body.style.overflow = "hidden";
      
      } else {
        document.body.style.overflow = "auto";
      }
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isSupportModalOpen,isRegisterModalOpen]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => { 
  if (
    modalRef.current &&
    !modalRef.current.contains(event.target as Node) &&  
    isSupportModalOpen
  ) {
    closeModal();
  }
  if (
    modalRef.current &&
    !modalRef.current.contains(event.target as Node) &&
    isRegisterModalOpen
  ) {
    closeModal();
  }
};

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isSupportModalOpen,isRegisterModalOpen]);



  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#151030] text-[#86868b] py-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* About Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-white text-lg font-semibold">Welcome to EcomNom</h2>
          <p className="text-xs mt-2">
            Discover the best deals and exclusive offers. Sign up to start shopping today!
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 flex flex-col">
          <h2 className="text-white text-lg font-semibold">Explore</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {unauthFooterLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white capitalize text-xs">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media & Signup */}
        <div className="w-full md:w-1/3">
          <h2 className="text-white text-lg font-semibold">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            {/* {socialLinks.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {social.icon}
              </a>
            ))} */}
          </div>
          <h2 className="text-white text-lg font-semibold mt-4">Join Us</h2>
          <div  onClick={() => setIsRegisterModalOpen(true)}  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-xs inline-block mt-2">
            Create an Account
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-xs">© {year} EcomNom. All rights reserved.</p>
      </div>
      
       {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex w-full h-screen justify-center  rounded-3xl py-[2vw] ">
          <div
            className="w-[80%] md:w-[40vw] overflow-y-auto h-[90%]  rounded-3xl"
            ref={modalRef}
          >
            <UserReg  Xmark={true} closeModal={closeModal} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default UnauthUserFooter;
