import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterIcon,
} from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin, BsEnvelope, BsGeoAlt } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";

export default function FooterComp() {
  return (
    <Footer className="w-full bg-[#9CAF88] text-white py-8 px-24 mb-20">
      <div className="w-full">
        {/* Logo & Info Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Left - Logo & Description */}
          <div className="text-center md:text-left space-y-3">
           
           
            <div className="flex flex-col sm:flex-row gap-3 text-sm text-white/80">
              <div className="flex items-center gap-1 justify-center md:justify-start">
                <BsEnvelope className="h-3 w-3" />
                <span>hengkaralaurenchia@gmail.com</span>
              </div>
              <div className="flex items-center gap-1 justify-center md:justify-start">
                <BsGeoAlt className="h-3 w-3" />
                <span>Bogor, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right - Social Media Icons */}
          <div className="flex space-x-6">
            <FooterIcon 
              href="https://github.com/hengkaralaurenchia" 
              icon={BsGithub} 
              className="text-white/80 hover:text-white transition-all hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            />
            <FooterIcon 
              href="https://www.instagram.com/laurnchia/" 
              icon={BsInstagram} 
              className="text-white/80 hover:text-white transition-all hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            />
            <FooterIcon 
              href="https://www.linkedin.com/in/hengkaralaurenchia" 
              icon={BsLinkedin} 
              className="text-white/80 hover:text-white transition-all hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>

        {/* Bottom Section - Copyright & Made with love */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-8 pt-6 border-t border-white/20">
          <FooterCopyright 
            href="#" 
            className="text-xs text-white/70" 
            by="Hengkara" 
            year={2026} 
          />
          
          <div className="flex items-center gap-1 text-white/60 text-xs">
            <span>Made with</span>
            <HiHeart className="text-red-400 animate-pulse h-3 w-3" />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </Footer>
  );
}