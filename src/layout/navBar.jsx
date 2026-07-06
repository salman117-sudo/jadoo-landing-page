import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-bg relative">
      <div className="max-w-360 mx-auto px-6 lg:px-20 py-8 flex items-center justify-between">

        {/* Logo */}
        <img
          src="/layout/navBar logo/logo1.svg"
          alt="Jadoo Logo"
          className="w-28"
        />

        {/* Menu */}
        <ul className="hidden md:flex items-center lg:gap-10 md:gap-6 gap-3 text-text font-medium">
          <li className="cursor-pointer hover:text-accent transition">Destinations</li>
          <li className="cursor-pointer hover:text-accent transition">Hotels</li>
          <li className="cursor-pointer hover:text-accent transition">Flights</li>
          <li className="cursor-pointer hover:text-accent transition">Bookings</li>
        </ul>

        {/* Right */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-text hover:text-accent">Login</button>
          <button className="border border-text px-5 py-2 rounded-md hover:bg-primary hover:text-white duration-300">
            Sign up
          </button>
          <select className="outline-none bg-transparent text-text">
            <option>EN</option>
            <option>FR</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg shadow-lg px-6 py-6 flex flex-col gap-5 z-50">
          <ul className="flex flex-col gap-4 text-text font-medium">
            <li className="cursor-pointer hover:text-accent transition">Destinations</li>
            <li className="cursor-pointer hover:text-accent transition">Hotels</li>
            <li className="cursor-pointer hover:text-accent transition">Flights</li>
            <li className="cursor-pointer hover:text-accent transition">Bookings</li>
          </ul>

          <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
            <button className="text-text hover:text-accent text-left">Login</button>
            <button className="border border-text px-5 py-2 rounded-md hover:bg-primary hover:text-white duration-300">
              Sign up
            </button>
            <select className="outline-none bg-transparent text-text w-fit">
              <option>EN</option>
              <option>FR</option>
            </select>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;