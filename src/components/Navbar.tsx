import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, UserCircle2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Search className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ServiçosJá</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Início
            </Link>
            <Link
              to="/register"
              className={`${
                isActive('/register') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Cadastro
            </Link>
            <Link
              to="/client-info"
              className={`${
                isActive('/client-info') ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
            >
              Para Clientes
            </Link>
            <Link
              to="/login"
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2"
            >
              <UserCircle2 className="h-4 w-4" />
              <span>Entrar</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              } block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors`}
            >
              Início
            </Link>
            <Link
              to="/register"
              className={`${
                isActive('/register') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              } block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors`}
            >
              Cadastro
            </Link>
            <Link
              to="/client-info"
              className={`${
                isActive('/client-info') ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              } block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors`}
            >
              Para Clientes
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Entrar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;