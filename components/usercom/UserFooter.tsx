// import Link from "next/link";
import React from "react";
// import { userFooterLinks, socialLinks, paymentMethods } from "../../../constants/index";

const UserFooter: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#151030] text-[#86868b] py-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* About Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-white text-lg font-semibold">About EcomNom</h2>
          <p className="text-xs mt-2">
            Your one-stop destination for quality products at the best prices. Shop with confidence and enjoy a seamless experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 flex flex-col">
          <h2 className="text-white text-lg font-semibold">Quick Links</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {/* {userFooterLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white capitalize text-xs">
                {link.name}
              </Link>
            ))} */}
          </div>
        </div>

        {/* Contact & Socials */}
        <div className="w-full md:w-1/3">
          <h2 className="text-white text-lg font-semibold">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            {/* {socialLinks.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {social.icon}
              </a>
            ))} */}
          </div>
          <h2 className="text-white text-lg font-semibold mt-4">Customer Support</h2>
          <p className="text-xs">📞 +1 234 567 890</p>
          <p className="text-xs">📧 support@ecomnom.com</p>
        </div>
      </div>

      {/* Payment & Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <div className="flex justify-center gap-4 mb-2">
          {/* {paymentMethods.map((method) => (
            <img key={method.name} src={method.icon} alt={method.name} className="h-6" />
          ))} */}
        </div>
        <p className="text-xs">© {year} EcomNom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default UserFooter;
