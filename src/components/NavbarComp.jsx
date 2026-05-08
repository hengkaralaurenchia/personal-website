import { Navbar, NavbarBrand } from "flowbite-react";
import { HiCheckBadge } from "react-icons/hi2";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Component() {
  return (
    <Navbar 
      fluid 
      rounded 
      className="sticky top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm"
    >
      <NavbarBrand href="#">
        <img src="/projects/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="text-xs flex items-center gap-1 text-black">
          hengkaralaurenchia@gmail.com
          <HiCheckBadge className="text-blue-700" />
        </span>
      </NavbarBrand>
      
      <div className="flex gap-3 text-xl justify-end">
        <a href="https://github.com/hengkaralaurenchia" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer hover:scale-110 transition text-gray-900" />
        </a>
        <a href="https://www.instagram.com/laurnchia/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="cursor-pointer hover:scale-110 transition text-pink-700" />
        </a>
        <a href="https://www.linkedin.com/in/hengkaralaurenchia" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="cursor-pointer hover:scale-110 transition text-blue-800" />
        </a>
      </div>
    </Navbar>
  );
}