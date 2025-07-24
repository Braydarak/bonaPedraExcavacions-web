import React from "react";
import CustomButton from "../../components/customButton";


const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video-excavadora.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Capa oscura encima del video */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido */}
      <div className="z-20 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
          Excavaciones profesionales
        </h1>
        <p className="text-lg md:text-2xl mb-10">
          Construyendo desde la base con compromiso, seguridad y eficiencia.
        </p>
        <CustomButton variant="secondary" size="lg" onClick={() => window.location.href = "/#contacto"}>
          Pedir presupuesto
        </CustomButton>
      </div>
    </section>
  );
};

export default Hero;
