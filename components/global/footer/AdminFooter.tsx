import Link from "next/link";
import React from "react";
import {adminFooterLinks} from "../../../constants/index"


const AdminFooter: React.FC = () => {
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
          <Link href="/admin/register" className="hover:text-white text-xs block cursor-pointer">Add new admin</Link>
          <Link href="/support" className="hover:text-white text-xs block cursor-pointer">Contact Support</Link>
        </div>
        
      </div>
    </footer>
  );
};

export default AdminFooter;
