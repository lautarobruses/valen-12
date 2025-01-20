import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className='bg-[rgb(23,23,23)] py-4 px-6 fixed w-full top-0 z-50'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <a href='/' className='text-[rgb(0,168,73)] text-xl font-bold'>
              Valen token
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-6'>
            <button className='px-4 py-2 bg-[rgb(0,168,73)] text-white rounded-md hover:bg-[rgb(0,168,73)]/80'>
              Valen Channel
            </button>
            <a href='#' className='text-gray-400 hover:text-[rgb(0,168,73)]'>
              Marketplace
            </a>
            <a href='#' className='text-gray-400 hover:text-[rgb(0,168,73)]'>
              Propósito
            </a>
            <a href='#' className='text-gray-400 hover:text-[rgb(0,168,73)]'>
              Cómo funciona
            </a>
            <a href='#' className='text-gray-400 hover:text-[rgb(0,168,73)]'>
              Noticias
            </a>
            <a href='#' className='text-gray-400 hover:text-[rgb(0,168,73)]'>
              Contacto
            </a>
            <a href='#' className='text-gray-400 hover:text-[rgb(0,168,73)]'>
              FAQs
            </a>
          </div>

          {/* Right Side Controls */}
          <div className='flex items-center space-x-4'>
            <select className='bg-transparent text-gray-400 text-sm'>
              <option value='es'>ES</option>
              <option value='en'>EN</option>
            </select>

            <div className='hidden md:flex items-center space-x-4'>
              <button
                className='border-2 border-[rgb(0,168,73)] 
              text-[rgb(0,168,73)] 
              bg-[rgb(23,23,23)] 
              px-4 py-2 
              rounded-md 
              hover:bg-[rgb(0,168,73)] 
              hover:text-white 
              transition-colors'
              >
                Ingresar
              </button>
              <button className='px-4 py-2 bg-[#004d21] text-white rounded-md hover:bg-[#004d21]/80'>
                Registrate
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className='md:hidden text-gray-600'
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className='w-6 h-6' />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
