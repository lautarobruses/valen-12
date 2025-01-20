import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[rgb(23,23,23)] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tagline */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold leading-tight">
              Forma parte de la comunidad de tu deportista favorito.
            </h3>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">INFORMACIÓN GENERAL</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[rgb(0,168,73)]">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(0,168,73)]">
                  Propósito
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(0,168,73)]">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(0,168,73)]">
                  Noticias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(0,168,73)]">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(0,168,73)]">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">LEGALES</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[rgb(0,168,73)]">
                  Acuerdo de compra de token
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(0,168,73)]">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(0,168,73)]">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-bold mb-4">COMUNIDAD</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-[rgb(0,168,73)]"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-[rgb(0,168,73)]"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-[rgb(0,168,73)]"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-[rgb(0,168,73)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © 2025 ValenToken | Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
