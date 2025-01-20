import PropTypes from "prop-types";

import { X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgb(23,23,23)] z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center">
          <a href="/" className="text-[rgb(0,168,73)] text-xl font-bold">
            Valen token
          </a>
        </div>
        <div className="flex items-center gap-4">
          <select className="bg-transparent text-gray-400 text-sm">
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
          <button onClick={onClose} className="text-gray-400 hover:text-[rgb(0,168,73)]">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <div className="space-y-4">
          <div className="inline-flex items-center">
            <a
              href="#"
              className="px-4 py-2 bg-[rgb(0,168,73)] text-white rounded-md hover:bg-[rgb(0,168,73)]/80"
            >
              Valen Channel
            </a>
          </div>

          <a href="#" className="block text-gray-400 hover:text-[rgb(0,168,73)]">
            Marketplace
          </a>
          <a href="#" className="block text-gray-400 hover:text-[rgb(0,168,73)]">
            Propósito
          </a>
          <a href="#" className="block text-gray-400 hover:text-[rgb(0,168,73)]">
            Cómo funciona
          </a>
          <a href="#" className="block text-gray-400 hover:text-[rgb(0,168,73)]">
            Noticias
          </a>
          <a href="#" className="block text-gray-400 hover:text-[rgb(0,168,73)]">
            Contacto
          </a>
          <a href="#" className="block text-gray-400 hover:text-[rgb(0,168,73)]">
            FAQs
          </a>
        </div>

        {/* User Actions */}
        <div className="mt-8 space-y-4">
          <p className="text-sm text-gray-400">¿Ya eres usuario?</p>
          <button className="w-full px-4 py-2 border-2 border-[rgb(0,168,73)] text-[rgb(0,168,73)] rounded-md hover:bg-[rgb(0,168,73)] hover:text-white">
            Ingresar
          </button>
          <p className="text-sm text-gray-400">¿No tienes cuenta?</p>
          <button className="w-full px-4 py-2 bg-[#004d21] text-white rounded-md hover:bg-[#004d21]/80">
            Regístrate
          </button>
        </div>
      </nav>
    </div>
  );
};

// Validación de PropTypes
MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
