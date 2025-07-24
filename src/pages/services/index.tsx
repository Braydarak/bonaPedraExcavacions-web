import React from "react";
import {
  Shovel,
  Layers,
  Droplet,
  Truck,
  Wrench,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: <Shovel className="w-8 h-8 text-[#2E2E2E]" />,
    title: "Excavaciones generales",
  },
  {
    icon: <Layers className="w-8 h-8 text-[#2E2E2E]" />,
    title: "Nivelaciones de terreno",
  },
  {
    icon: <Droplet className="w-8 h-8 text-[#2E2E2E]" />,
    title: "Zanjas y canalizaciones",
  },
  {
    icon: <Truck className="w-8 h-8 text-[#2E2E2E]" />,
    title: "Movimiento de tierras",
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#2E2E2E]" />,
    title: "Alquiler de maquinaria",
  },
  {
    icon: <Building2 className="w-8 h-8 text-[#2E2E2E]" />,
    title: "Preparación para obra civil",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="bg-white w-full py-20 px-4 scroll-mt-[2rem] md:scroll-mt-[21rem]">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <span className="uppercase text-sm tracking-widest text-gray-500 mb-2 block">
            nuestros servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#2E2E2E]">
            Todo lo que podemos hacer por vos
          </h2>
          <div className="h-1 w-16 bg-[#2E2E2E] mt-4 mx-auto" />
        </div>

        {/* Grilla de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] p-6 rounded-xl shadow-sm hover:shadow-md transition text-center flex flex-col items-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#2E2E2E]">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
