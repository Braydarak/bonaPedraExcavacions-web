import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../../assets/logo_BonaPedra.avif";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#6A5E4E] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo o nombre */}
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="Bona Pedra logo" className="w-50 mb-5 invert" />{" "}
          <p className="text-sm pl-10 pr-10 text-gray-300">
            Excavaciones profesionales con maquinaria moderna y compromiso en
            cada proyecto.
          </p>
        </div>

        {/* Navegación */}
        <div className="md:block hidden">
          <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide">
            Secciones
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#sobre" className="hover:text-white transition">
                Quiénes somos
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-white transition">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-lg font-semibold mb-3 uppercase tracking-wide">
            Contacto
          </h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              +34 600 000 000
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              info@excavacionsbonapedra.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4" />
              Mallorca, España
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Bona Pedra Excavacions. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
