"use client"

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {adminFooterLinks} from "../../../constants/index"
import Support from "@/components/admincom/Support";
import RegisterAdmin from "@/components/admincom/RegisterAdmin";


const AdminFooter: React.FC = () => {
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
      const handleClickOutside = (event: MouseEvent) => {  // ✅ Explicitly define event type
  if (
    modalRef.current &&
    !modalRef.current.contains(event.target as Node) &&  // ✅ Cast event.target to Node
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
    <footer className="bg-[#151030] text-[#86868b] py-4 px-6 text-sm ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p>© {year} EcomNom. All rights reserved.</p>
          <p className="text-xs">Admin Panel v1.0.3</p>
        </div>

              {/* Quick Links */}
              <div  className="flex flex-wrap justify-center gap-4 text-xs">
              {adminFooterLinks.map((link) => (
                  
          <Link key={link.href} href={link.href} className="hover:text-white capitalize">
              {link.name}
            </Link>
        
        ))}
        </div>
       

        {/* System Status & Support */}
        <div className="text-center md:text-right">
          <p className="text-xs">🟢 Server Status: Online</p>
          <div onClick={() => setIsRegisterModalOpen(true)}  className="hover:text-white text-xs block cursor-pointer">Add new admin</div>
          <div  onClick={() => setIsSupportModalOpen(true)} className="hover:text-white text-xs block cursor-pointer">Contact Support</div>
        </div>
        
      </div>
 {isSupportModalOpen && (
        <div className="fixed inset-0 z-50 flex w-full h-screen justify-center  rounded-3xl py-[2vw] ">
          <div
            className="w-[80%] md:w-[40vw] overflow-y-auto h-[90%]  rounded-3xl"
            ref={modalRef}
          >
            <Support  Xmark={true} closeModal={closeModal} />
          </div>
        </div>
      )}


       {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex w-full h-screen justify-center  rounded-3xl py-[2vw] ">
          <div
            className="w-[80%] md:w-[40vw] overflow-y-auto h-[90%]  rounded-3xl"
            ref={modalRef}
          >
            <RegisterAdmin  Xmark={true} closeModal={closeModal} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default AdminFooter;
