import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="bg-white w-full md:scroll-mt-[13rem] scroll-mt-[2rem]">
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
              d="
                M0,0 
                L10,10 
                L0,20 
                L10,30 
                L0,40 
                L10,50 
                L0,60 
                L10,70 
                L0,80 
                L10,90 
                L0,100 
                L0,0
              "
              fill="white"
            />
          </svg>
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center px-6 py-10">
          <div className="text-[#2E2E2E] max-w-2xl w-full space-y-6">
            <div className="mb-4">
              <span className="block uppercase text-sm tracking-widest text-gray-500 mb-2">
                sobre nosotros
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight uppercase">
                Compromiso que deja huella
              </h2>
              <div className="h-1 w-16 bg-[#2E2E2E] mt-4" />
            </div>

            <p className="text-lg md:text-xl leading-relaxed">
              En <strong>Bona Pedra</strong>, no solo removemos tierra:
              removemos límites. Nacimos con la fuerza de las grandes ideas y
              el respaldo de un equipo apasionado por hacer las cosas bien,
              desde el primer movimiento de suelo.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Nos especializamos en excavaciones, nivelaciones y preparación de
              terrenos. Usamos maquinaria moderna y trabajamos con plazos
              claros, comunicación constante y atención personalizada.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Nuestro objetivo es construir relaciones tan sólidas como el
              terreno que preparamos. Sabemos que una buena base es esencial
              para que cualquier proyecto crezca firme y seguro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
