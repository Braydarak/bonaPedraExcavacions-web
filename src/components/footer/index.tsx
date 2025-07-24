import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "/logo_BonaPedra_white.avif";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#6A5E4E] text-white px-6 py-12">
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
          <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide">
            {t("footer.sections")}
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#sobre" className="hover:text-white transition">
                {t("header.about")}
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-white transition">
                {t("header.services")}
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white transition">
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
          <ul className="space-y-3 text-sm text-gray-300">
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
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Bona Pedra Excavacions.{" "}
        {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
