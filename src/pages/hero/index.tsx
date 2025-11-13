import React, { useRef, useState } from "react";
import CustomButton from "../../components/customButton";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoReady = () => {
    setVideoReady(true);
    videoRef.current?.play();
  };

  return (
    <section className="relative flex items-center justify-center w-full min-h-dvh md:min-h-screen overflow-hidden bg-black">
      {/* Imagen de fondo */}
      <img
        src="/video-screenshoot.avif"
        alt="Excavadora"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />

      {/* Video */}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        onCanPlayThrough={handleVideoReady}
      >
        <source src="/video-excavadora.mp4" type="video/mp4" />
        <img
          src="/video-screenshoot.avif"
          alt="Excavadora"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido */}
      <div className="z-20 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-2xl mb-10">
          {t("hero.subtitle")}
        </p>
        <CustomButton
          variant="secondary"
          size="lg"
          onClick={() => (window.location.href = "/#contacto")}
        >
          {t("hero.button")}
        </CustomButton>
      </div>
    </section>
  );
};

export default Hero;
