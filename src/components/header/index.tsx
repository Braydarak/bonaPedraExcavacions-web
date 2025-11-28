import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/logo_BonaPedra.avif";
import { Mail, Phone, Menu, X } from "lucide-react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../lenguajeSelector";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

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

  // Bloquear scroll del documento cuando el menú móvil está abierto
  useEffect(() => {
    try {
      if (isOpen) {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    } catch {
      // noop
    }
    return () => {
      try {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      } catch {
        // noop
      }
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const goHome = () => {
    const isHome = window.location.pathname === "/";
    if (!isHome) {
      navigate("/");
      requestAnimationFrame(() => {
        try {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } catch {
          window.scrollTo(0, 0);
        }
      });
    } else {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
    if (isOpen) setIsOpen(false);
  };

  const goToSection = (id: string) => {
    const isHome = window.location.pathname === "/";
    if (!isHome) {
      // Navegar a Home pasando el objetivo para realizar scroll suave allí
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) {
        try {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          el.scrollIntoView();
        }
        try {
          window.history.replaceState(null, "", `/#${id}`);
        } catch {
          // noop
        }
      } else {
        // Fallback: actualizar hash
        window.location.hash = id;
      }
    }
    if (isOpen) setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full h-24 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[rgba(239,238,233,0.90)] backdrop-blur border-b border-gray-200"
          : "bg-[var(--color-base)]"
      }`}
    >
      <div
        className={`w-full mx-auto px-4 py-3 flex items-center justify-between h-full ${
          isWideScreen ? "md:pl-10 " : "pl-2 xl:pl-[20rem] pr-0 xl:pr-[10rem]"
        }`}
      >
        {/* Logo */}
        <div
          onClick={goHome}
          className="flex items-center gap-2 cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") goHome();
          }}
        >
          <img
            src={Logo}
            alt="Logo Bona Pedra"
            className="h-auto w-32 md:w-52 xl:w-60"
          />
        </div>

        {/* Menú desktop */}
        <div className="hidden xl:flex items-center gap-10">
          <nav className="flex gap-8 text-md font-medium text-[var(--color-primary)]">
            <a
              href="/#sobre"
              onClick={(e) => {
                e.preventDefault();
                goToSection("sobre");
              }}
              className="relative text-[var(--color-primary)] after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-full after:bg-[var(--color-accent)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {t("header.about")}
            </a>
            <a
              href="/#servicios"
              onClick={(e) => {
                e.preventDefault();
                goToSection("servicios");
              }}
              className="relative text-[var(--color-primary)] after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-full after:bg-[var(--color-accent)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {t("header.services")}
            </a>
            <a
              href="/#contacto"
              onClick={(e) => {
                e.preventDefault();
                goToSection("contacto");
              }}
              className="relative text-[var(--color-primary)] after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-full after:bg-[var(--color-accent)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
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

        {/* Idioma + botón hamburguesa (mobile) */}
        <div className="xl:hidden flex items-center gap-3">
          <div className="z-[60]">
            <LanguageSwitcher />
          </div>
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
          className="xl:hidden fixed top-24 left-0 right-0 h-[calc(100dvh-6rem)] bg-[var(--color-base)] px-6 py-6 shadow-lg border-t border-gray-200 z-40 flex flex-col items-center justify-center gap-6 overflow-y-auto"
        >
          {/* Navegación */}
          <section className="flex flex-col gap-3">
            <nav className="flex flex-col items-center text-center text-md font-medium text-[var(--color-primary)]">
              <a
                className="py-3 border-b border-gray-200 w-full max-w-xs"
                href="/#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("sobre");
                }}
              >
                {t("header.about")}
              </a>
              <a
                className="py-3 border-b border-gray-200 w-full max-w-xs"
                href="/#servicios"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("servicios");
                }}
              >
                {t("header.services")}
              </a>
              <a
                className="py-3 w-full max-w-xs"
                href="/#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("contacto");
                }}
              >
                {t("header.contact")}
              </a>
            </nav>
          </section>

          {/* Separador entre navegación y legal */}
          <div className="border-t border-gray-300 my-2 w-full"></div>

          {/* Legal */}
          <section className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wide text-[var(--color-primary)] text-center">
              Legal
            </p>
            <ul className="flex flex-col items-center text-center text-md font-medium text-[var(--color-primary)]">
              <li className="py-3 border-b border-gray-200 w-full max-w-xs">
                <a
                  className="block w-full"
                  href="/aviso-legal"
                  onClick={toggleMenu}
                >
                  Aviso Legal
                </a>
              </li>
              <li className="py-3 border-b border-gray-200 w-full max-w-xs">
                <a
                  className="block w-full"
                  href="/politica-cookies"
                  onClick={toggleMenu}
                >
                  Política de Cookies
                </a>
              </li>
              <li className="py-3 w-full max-w-xs">
                <a
                  className="block w-full"
                  href="/politica-privacidad"
                  onClick={toggleMenu}
                >
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </section>

          {/* Detalles eliminados según requerimiento */}
        </div>
      )}
    </header>
  );
};

export default Header;
