import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-col mid:flex-row items-start justify-between px-6">
          
          {/* Logo Column (Aligned Left) */}
          <div className="w-full mid:w-1/3 flex justify-center mid:justify-start mb-6 mid:mb-0">
            <Image
              src="/Logo_Footer.png"
              alt="Footer Logo"
              width={235}
              height={193}
            />
          </div>

          {/* Sitemap Column (Centered) */}
          <div className="w-full mid:w-1/3 flex flex-col items-center text-center font-alfarn">
            <h3 className="text-lg font-bold mb-2">Sitemap</h3>
            <nav className="mb-4 text-gray-400">
              <ul className="flex flex-col mid:flex-row space-y-2 mid:space-y-0 mid:space-x-6">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><a href="/services" className="hover:text-white">Services</a></li>
                <li><a href="/estimate" className="hover:text-white">Estimate</a></li>
                <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </nav>
          </div>

          {/* Contact Information Column (Aligned Right, Proper Spacing) */}
          <div className="w-full mid:w-1/3 flex flex-col items-center mid:items-end text-center font-alfarn px-2 mid:pr-2 py-4 mid:py-0">
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-lg font-bold mb-2">Contact Us</h3>
              <p className="text-gray-400"><a href="tel:+15108608819" className="hover:text-white">Phone: +1 (510) 860-8819</a></p>
              <p className="text-gray-400"><a href="mailto:asphaltkings67@yahoo.com" className="hover:text-white">asphaltkings67@yahoo.com</a></p>
              <p className="text-gray-400"><span className="hover:text-white">Lic#1113680</span></p>
            </div>
          </div>
        </div>

        {/* Copyright Section (Full Width, Below Columns) */}
        <div className="w-full text-center mt-6 pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-400">&copy; 2025 Asphalt Kings. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  