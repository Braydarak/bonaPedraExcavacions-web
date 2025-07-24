import React from "react";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="sobre"
      className="bg-white w-full md:scroll-mt-[13rem] scroll-mt-[2rem]"
    >
      <div className="w-full h-[80vh] flex flex-col md:flex-row items-stretch overflow-hidden pt-[20rem] md:pt-0">
        {/* Imagen con borde sierra */}
        <div className="w-full md:w-1/2 h-full relative">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/excavaciones.avif')" }}
          />
          <svg
            className="hidden md:block absolute top-0 right-0 h-full w-[40px] z-10 scale-x-[-1]"
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 L10,10 L0,20 L10,30 L0,40 L10,50 L0,60 L10,70 L0,80 L10,90 L0,100 L0,0"
              fill="white"
            />
          </svg>
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6 py-10">
          <div className="text-[#2E2E2E] max-w-2xl w-full space-y-6">
            <div className="mb-4">
              <span className="block uppercase text-sm tracking-widest text-gray-500 mb-2">
                {t("about.label")}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight uppercase">
                {t("about.title")}
              </h2>
              <div className="h-1 w-16 bg-[#2E2E2E] mt-4" />
            </div>

            <p className="text-lg md:text-xl leading-relaxed">
              {t("about.p1")}
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              {t("about.p2")}
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              {t("about.p3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
