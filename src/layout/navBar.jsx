

import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-bg">
      <div className="max-w-360 mx-auto px-6 lg:px-20  py-8 flex items-center justify-between">

        {/* Logo */}
        <img
          src="/layout/navBar logo/logo1.svg"
          alt="Jadoo Logo"
          className="w-28"
        />

        {/* Menu */}
        <ul className="hidden md:flex items-center lg:gap-10 md:gap-6 gap-3 text-text font-medium">
          <li className="cursor-pointer hover:text-accent transition">
            Destinations
          </li>

          <li className="cursor-pointer hover:text-accent transition">
            Hotels
          </li>

          <li className="cursor-pointer hover:text-accent transition">
            Flights
          </li>

          <li className="cursor-pointer hover:text-accent transition">
            Bookings
          </li>
        </ul>

        {/* Right */}
        <div className="hidden md:flex items-center gap-6">

          <button className="text-text hover:text-accent">
            Login
          </button>

          <button className="border border-text px-5 py-2 rounded-md hover:bg-primary hover:text-white duration-300">
            Sign up
          </button>

          <select className="outline-none bg-transparent text-text">
            <option>EN</option>
            <option>FR</option>
          </select>

        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl">
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;