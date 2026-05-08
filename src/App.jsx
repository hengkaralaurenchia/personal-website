import { Button } from "flowbite-react";
import NavbarComp from "./components/NavbarComp";
import { HiArrowRight } from "react-icons/hi";
import { FaSpotify, FaGithub } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { IoBuild } from "react-icons/io5";
import SkillsMarquee from "./components/SkillsMarquee";
import TabsComp from "./components/TabsComp";
import { SiFlutter, SiDart } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoCalendarClearOutline } from "react-icons/io5";
import FooterComp from "./components/FooterComp";
import ContactForm from "./components/ContactForm";
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Fungsi untuk scroll ke Productivity Boost
  const handleExploreClick = () => {
    const productivitySection = document.getElementById("productivity-section");
    if (productivitySection) {
      productivitySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Fungsi untuk scroll ke Contact Form
  const handleSayHelloClick = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={`transition-all duration-1000 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
      <NavbarComp />
      <div
        className="min-h-screen flex items-start"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), 
                         linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="ml-24 mr-24 mt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-gray-300 bg-white shadow-sm">
            <span className="w-2.5 h-2.5 bg-[#779776] rounded-full"></span>
            <p className="text-xs text-gray-700">Available to work</p>
          </div>
          <div className="space-y-5 text-4xl leading-tight">
            <h1 className="font-semibold flex items-center gap-3">
              <span>Hey, I am</span>
              <div className="w-14 h-14 rounded-xl overflow-hidden rotate-6 border-2 border-[#799677] shadow-md hover:rotate-0 transition">
                <img
                  src="/projects/DSC08963.JPG"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Hengkara!</span>
            </h1>
            <h1 className="font-semibold">
              <span className="text-gray-400">I am a </span>
              Mobile Developer
              <span className="text-gray-400"> at</span>
            </h1>
            <h1 className="font-semibold text-[#799677]!">Apple Design.</h1>
          </div>

          <div className="flex items-center gap-4 mt-14">
            <Button 
              onClick={handleSayHelloClick}
              className="bg-black text-white hover:scale-105 transition hover:bg-[#779776]"
            >
              <HiArrowRight className="mr-2 h-3 w-3" />
              Say Hello
            </Button>
            <Button
              onClick={handleExploreClick}
              className="border border-black text-black bg-transparent hover:bg-gray-400 hover:border-white hover:text-white hover:scale-105 transition cursor-pointer"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>

      {/* Productivity Section */}
      <section id="productivity-section" className="mx-24 mt-5 flex flex-col-2 gap-10 items-start scroll-mt-20">
        <div className="max-w-sm">
          <p className="text-xs text-gray-400 mb-5 pb-3 tracking-[0.2em] uppercase flex items-center gap-2">
            <FaSpotify className="text-green-500" />
            Productivity Boost
          </p>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/51juV9KYggLySz1HGcxJEc?utm_source=generator"
            width="105%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-5 pb-3 tracking-[0.2em] flex items-center gap-2 uppercase">
            <FaGithub className="text-blue-950" />
            Github Activity
          </p>
          <img
            src="https://ghchart.rshah.org/hengkaralaurenchia"
            alt="github chart"
            className="rounded-xl border border-black/15 w-170 max-w[700px] p-3"
          />
          <div className="mt-7 w-160!">
            <p className="text-xs text-gray-400 mb-5 pb-3 tracking-[0.2em] flex items-center gap-2 uppercase">
              <IoBuild className="text-yellow-400" />
              Skills
            </p>
            <SkillsMarquee />
          </div>
        </div>
      </section>

      {/* Currently Exploring & Ongoing Project */}
      <section className="mx-24 mt-10 grid grid-cols-2 gap-10">
        <div className="w-full">
          <p className="text-xs text-gray-400 mb-5 pb-3 flex gap-2 items-center tracking-[0.2em] uppercase">
            <FaBook className="text-blue-400" />
            Currently exploring
          </p>
          <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
            <p className="text-sm font-semibold text-gray-800">Mobile Development</p>
            <p className="text-xs text-gray-400 pt-1 leading-relaxed">
              Currently learning to build smooth and responsive mobile apps using modern tools and best practices.
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="flex items-center gap-1 text-[10px] px-3 py-1 rounded-full bg-linear-to-r from-blue-50 to-blue-100 text-blue-600 border border-blue-100">
                <SiFlutter className="text-xs" />
                Flutter
              </span>
              <span className="flex items-center gap-1 text-[10px] px-3 py-1 rounded-full bg-linear-to-r from-sky-50 to-sky-100 text-sky-600 border border-sky-100">
                <SiDart className="text-xs" />
                Dart
              </span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <p className="text-xs text-gray-400 mb-5 pb-3 flex gap-2 items-center tracking-[0.2em] uppercase">
            <IoCalendarClearOutline className="text-blue-400" />
            On going project
          </p>
          <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
            <p className="text-sm font-semibold text-gray-800 tracking-wide">OURA</p>
            <p className="text-xs text-gray-400 pt-1 leading-relaxed">
              A modern makeup store concept focused on clean UI, smooth shopping experience, and aesthetic product presentation.
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="flex items-center gap-1 text-[10px] px-3 py-1 rounded-full bg-linear-to-r from-cyan-50 to-cyan-100 text-cyan-600 border border-cyan-100">
                <FaReact className="text-xs" />
                React
              </span>
              <span className="flex items-center gap-1 text-[10px] px-3 py-1 rounded-full bg-linear-to-r from-sky-50 to-sky-100 text-sky-600 border border-sky-100">
                <SiTailwindcss className="text-xs" />
                Tailwind
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section>
        <div className="ml-23 mr-23 mt-10">
          <TabsComp />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-section" className="py-16 px-4 bg-gray-50/50 scroll-mt-20">
        <div className="ml-23 mr-23">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <section>
        <div className="mt-10 mb-10 ml-25 mr-25">
          <FooterComp />
        </div>
      </section>
    </div>
  );
}

export default App;