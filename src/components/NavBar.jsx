import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 text-xl font-semibold">
            <a href="#home" className="text-gray-100 hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="text-gray-100 hover:text-blue-500">
              About
            </a>
            <a href="#projects" className="text-gray-100 hover:text-blue-500">
              Projects
            </a>
            <a href="#contact" className="text-gray-100 hover:text-blue-500">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-100 focus:outline-none absolute right-4"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-6 mt-4 text-lg font-semibold">
            <a href="#home" className="text-gray-100 hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="text-gray-100 hover:text-blue-500">
              About
            </a>
            <a href="#projects" className="text-gray-100 hover:text-blue-500">
              Projects
            </a>
            <a href="#contact" className="text-gray-100 hover:text-blue-500">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;