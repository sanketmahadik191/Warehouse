import React, { useState } from 'react';
import logo from  '../assets/logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-800 p-4">
      <div className="mx-auto flex items-center justify-center">
        <div className="flex items-center px-8 py-4 bg-white rounded-2xl">
          <img
            src={logo}
            alt="Warehouse Logo"
            className="h-6 w-30 mr-2 "
          />
        </div>
    
      </div>
    </nav>
  );
};

export default Navbar;
