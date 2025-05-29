import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/events', label: 'Events' },
  { to: '/create', label: 'Create Event' },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">      
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-pink-100 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
            >
              👗 What2Wear
            </Link>
            <nav className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    location.pathname === link.to
                      ? 'bg-pink-600 text-white shadow-md shadow-pink-200'
                      : 'text-gray-600 hover:bg-pink-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
};

export default Layout;
