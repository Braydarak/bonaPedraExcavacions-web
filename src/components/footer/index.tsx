import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "/logo_BonaPedra_white.avif";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-base)] px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + descripción */}
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="Bona Pedra logo" className="w-50 mb-5" />
          <p className="text-sm pl-10 pr-10 text-gray-300">
            {t("footer.description")}
          </p>
        </div>

        {/* Navegación */}
        <div className="md:block hidden">
          <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide ">
            {t("footer.sections")}
          </h4>
          <ul className="space-y-2 text-[#c3bfb7] text-sm">
            <li>
              <a href="#sobre" className="hover:text-[var(--color-base)] transition">
                {t("header.about")}
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-[var(--color-base)] transition">
                {t("header.services")}
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-[var(--color-base)] transition">
                {t("header.contact")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide">
            {t("footer.contact")}
          </h4>
          <ul className="space-y-3 text-sm text-[#c3bfb7]">
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
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Mallorca, España
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#877e70] mt-12 pt-6 text-center text-xs text-[#c3bfb7]">
        &copy; {new Date().getFullYear()} Bona Pedra Excavacions.{" "}
        {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
