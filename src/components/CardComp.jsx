import { Card } from "flowbite-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "KitaBisa",
    desc: "Website Donasi Digital",
    date: "Jan 2026",
    image: "/projects/kitabisa.png",
    github: "https://github.com/hengkaralaurenchia/donasi-app"
  },
  {
    id: 2,
    title: "Makeup Store",
    desc: "Modern online store",
    date: "Feb 2026",
    image: "/projects/makeup.png",
    github: "https://github.com/hengkaralaurenchia/makeupstore-app"
  },
  {
    id: 3,
    title: "Wikrama Website Revamp",
    desc: "Modern school website",
    date: "Mar 2025",
    image: "/projects/web-wk.png",
    github: "https://github.com/RPL-Wikrama-Bogor/wikrama-web"
  },
  {
    id: 4,
    title: "FAS | Forum Aspirasi Siswa",
    // desc: "Platform for report your aspiration",
    date: "Jan 2026",
    image: "/projects/fas.png",
    github: "https://github.com/hengkaralaurenchia/aspiration-app"
  },
  {
    id: 5,
    title: "SILAPOR",
    desc: "Public Complaint System",
    date: "Apr 2026",
    image: "/projects/silapor.png",
  },
  {
    id: 6,
    title: "Educora",
    desc: "E-Learning App",
    date: "Apr 2026",
    image: "/projects/educora.png",
    github: "https://github.com/hengkaralaurenchia/e-learning-app"
  },
  {
    id: 7,
    title: "Sports Court",
    desc: "Booking Courts App",
    date: "Apr 2026",
    image: "/projects/court.png",
    github: "https://github.com/hengkaralaurenchia/booking-courts-app"
  },
  {
    id: 8,
    title: "travee.id",
    desc: "Travel UI Design",
    date: "Jan 2026",
    image: "/projects/travee.png",
  },
  {
    id: 9,
    title: "Ecopine App",
    desc: "UI Design",
    date: "Jan 2026",
    image: "/projects/ecopine.png",
  },
];

export default function CardComp() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="w-full overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              onClick={() => setSelectedImage(project.image)}
              className="h-40 w-full object-cover cursor-pointer"
            />

            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-gray-900">
                {project.title}
              </h5>

              <p className="text-xs text-gray-500 leading-snug">
                {project.desc}
              </p>

              <span className="text-[10px] text-gray-400">
                {project.date}
              </span>

              <div className="flex gap-2 pt-2">
                <button className="flex-1 text-[10px] bg-black text-white py-1 rounded-md">
                  Live Demo
                </button>

                <button className="flex-1 text-[10px] border border-gray-400 py-1 rounded-md">
                  {project.github}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* POPUP IMAGE */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-4xl w-full rounded-xl"
          />
        </div>
      )}
    </>
  );
}