import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/logo_BonaPedra.avif";
import { Mail, Phone, Menu, X } from "lucide-react";
import gsap from "gsap";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Montar menú al abrir
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  // Animación de entrada/salida
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
          onComplete: () => setIsMounted(false),
        });
      }
    }
  }, [isOpen]);

  // Cerrar menú si se hace clic fuera
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

  return (
    <header className="fixed top-0 left-0 w-full h-24 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="w-full mx-auto px-4 py-3 flex items-center h-full justify-between">
        {/* Logo */}
       <div className="flex items-center gap-2 pl-90">
          <img src={Logo} alt="Logo Bona Pedra" className="h-14" />
        </div>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#2E2E2E]">
          <a href="#sobre" className="hover:text-black transition">
            Quiénes somos
          </a>
          <a href="#servicios" className="hover:text-black transition">
            Servicios
          </a>
          <a href="#contacto" className="hover:text-black transition">
            Contacto
          </a>
        </nav>

        {/* Contacto */}
        <div className="hidden md:flex flex-col gap-2 text-sm text-black pr-30">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            +34 600 000 000
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            info@excavacionsbonapedra.com
          </div>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-[#2E2E2E] focus:outline-none z-[60]"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay + Menú mobile */}
      {isMounted && (
        <div
          ref={menuRef}
          className="absolute top-24 left-0 w-full bg-white/90 px-6 py-4 shadow-lg border-t border-gray-200"
        >
          <nav className="flex flex-col space-y-4 text-md font-medium text-[#2E2E2E]">
            <a href="#sobre" onClick={toggleMenu}>
              Quiénes somos
            </a>
            <a href="#servicios" onClick={toggleMenu}>
              Servicios
            </a>
            <a href="#contacto" onClick={toggleMenu}>
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
