"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-30 bg-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-auto flex-col items-center sm:h-16 sm:flex-row sm:justify-between">
          {/* Logo */}
          <div className="flex-1 md:flex md:items-center md:gap-12 pt-[12px]">
            <div className="mid:mt-18 z-30 w-[200px] justify-normal border border-black bg-white sm:mt-14 sm:w-[150px] sm_custom:mt-24 sm_custom:w-[200px] mid:mx-2">
              <Link href="/home">
                <Image 
                  src="/AK_Header_Logo.png" 
                  alt="Asphalt Kings Logo" 
                  width={218}
                  height={188}
                  className="px m-auto"
                  priority={true} 
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="sm:flex sm:items-center sm:gap-12">
            <nav aria-label="Global" className="hidden mid:block">
              <ul className="flex items-center gap-6 text-sm text-white">
                <li>
                  <a className="transition hover:text-gold" href="/services"> Services </a>
                </li>
                <li>
                  <a className="transition hover:text-gold" href="/estimate"> Estimate </a>
                </li>
                <li>
                  <a className="transition hover:text-gold" href="/gallery"> Gallery </a>
                </li>
                <li>
                  <a className="transition hover:text-gold" href="/contact"> Contact </a>
                </li>
              </ul>
            </nav>

            {/* Contact Information (Desktop) */}
            <div className="hidden md_custom:flex sm:gap-4">
              <div className="flex items-center space-x-2">
                <span className="ml- text-sm text-white">Call (555) 412-1234</span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                    <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
                    <path fillRule="evenodd" d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="hidden md_custom:flex">
                <div className="flex items-center space-x-2">
                  <span className="ml- text-sm text-white">Info@asphaltkingsinc.com</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                      <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                      <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center justify-end p-2 sm:p-0 mid:hidden">
              <button 
                className="rounded p-2 text-white transition hover:text-gold"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar (Positioned on Right) */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-cyan-950 flex flex-col items-center text-sand shadow-lg">
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

          {/* Mobile Navigation */}
          <nav className="flex flex-col items-center gap-3 mt-24 text-md font-sans">
            <Link href="/home" className="transition hover:text-gold" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link href="/services" className="transition hover:text-gold" onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
            <Link href="/estimate" className="transition hover:text-gold" onClick={() => setIsMenuOpen(false)}>ESTIMATE</Link>
            <Link href="/gallery" className="transition hover:text-gold" onClick={() => setIsMenuOpen(false)}>GALLERY</Link>
            <Link href="/contact" className="transition hover:text-gold" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
