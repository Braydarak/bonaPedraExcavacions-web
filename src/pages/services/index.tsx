import React from "react";
import { useTranslation } from "react-i18next";
import {
  Shovel,
  Layers,
  Droplet,
  Truck,
  Wrench,
  Building2,
} from "lucide-react";

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const icons = [
    <Shovel className="w-8 h-8 text-[#2E2E2E]" />,
    <Layers className="w-8 h-8 text-[#2E2E2E]" />,
    <Droplet className="w-8 h-8 text-[#2E2E2E]" />,
    <Truck className="w-8 h-8 text-[#2E2E2E]" />,
    <Wrench className="w-8 h-8 text-[#2E2E2E]" />,
    <Building2 className="w-8 h-8 text-[#2E2E2E]" />,
  ];

  const serviceItems = t("services.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      id="servicios"
      className="bg-white w-full py-20 px-4 scroll-mt-[2rem] md:scroll-mt-[21rem]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <span className="uppercase text-sm tracking-widest text-gray-500 mb-2 block">
            {t("services.label")}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#2E2E2E]">
            {t("services.title")}
          </h2>
          <div className="h-1 w-16 bg-[#2E2E2E] mt-4 mx-auto" />
        </div>

        {/* Grilla de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((title, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] p-6 rounded-xl shadow-sm hover:shadow-md transition text-center flex flex-col items-center"
            >
              <div className="mb-4">{icons[index]}</div>
              <h3 className="text-xl font-semibold text-[#2E2E2E]">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
