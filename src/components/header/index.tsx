import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/logo_BonaPedra.avif";
import { Mail, Phone, Menu, X } from "lucide-react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../lenguajeSelector";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar ancho >= 1600px
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth <= 1700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animación del menú
  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          menuRef.current,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(menuRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen]);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isOpen) setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-24 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div
        className={`w-full mx-auto px-4 py-3 flex items-center justify-between h-full ${
          isWideScreen ? "md:pl-10 " : "pl-2 xl:pl-[20rem] pr-0 xl:pr-[10rem]"
        }`}
      >
        {/* Logo */}
        <div
          onClick={scrollToTop}
          className="flex items-center gap-2 cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") scrollToTop();
          }}
        >
          <img src={Logo} alt="Logo Bona Pedra" className="h-auto w-45 md:w-60" />
        </div>

        {/* Menú desktop */}
        <div className="hidden xl:flex items-center gap-10">
          <nav className="flex gap-8 text-md font-medium text-[#2E2E2E]">
            <a
              href="#sobre"
              className="relative text-[#2E2E2E] after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-full after:bg-[#2E2E2E] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {t("header.about")}
            </a>
            <a
              href="#servicios"
              className="relative text-[#2E2E2E] after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-full after:bg-[#2E2E2E] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {t("header.services")}
            </a>
            <a
              href="#contacto"
              className="relative text-[#2E2E2E] after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-full after:bg-[#2E2E2E] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {t("header.contact")}
            </a>
          </nav>
        </div>

        {/* Contacto + idioma (desktop) */}
        <div className="hidden xl:flex items-center gap-6">
          <div className="flex flex-col gap-2 text-sm text-black">
            <a
              href="tel:+34610429243"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone className="w-4 h-4" />
              +34 610 429 243
            </a>
            <a
              href="mailto:info@excavacionsbonapedra.com"
              className="flex items-center gap-2 hover:underline"
            >
              <Mail className="w-4 h-4" />
              info@excavacionsbonapedra.com
            </a>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Botón hamburguesa (mobile) */}
        <div className="xl:hidden flex items-center gap-3">
          <button
            className="text-[#2E2E2E] focus:outline-none z-[60]"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div
          ref={menuRef}
          className="xl:hidden absolute top-24 left-0 w-full bg-white/90 px-6 py-6 shadow-lg border-t border-gray-200 z-40 flex flex-col gap-4"
        >
          <nav className="flex flex-col space-y-4 text-md font-medium text-[#2E2E2E]">
            <a href="#sobre" onClick={toggleMenu}>
              {t("header.about")}
            </a>
            <a href="#servicios" onClick={toggleMenu}>
              {t("header.services")}
            </a>
            <a href="#contacto" onClick={toggleMenu}>
              {t("header.contact")}
            </a>
          </nav>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-2 text-sm text-black">
              <a
                href="tel:+34610429243"
                className="flex items-center gap-2 hover:underline text-xs"
              >
                <Phone className="w-3 h-3" />
                +34 610 429 243
              </a>
              <a
                href="mailto:info@excavacionsbonapedra.com"
                className="flex items-center text-xs gap-2 hover:underline"
              >
                <Mail className="w-3 h-3" />
                info@excavacionsbonapedra.com
              </a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
