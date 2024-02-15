import React, { useState } from 'react';
import Logo from "../assets/NdhLogo.png";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row sm:flex-row md:flex-row justify-around items-center text-white">
      <div className="w-40">
        <Link to="/">
          <img src={Logo} alt="" className="w-full" />
        </Link>
      </div>

      <div className={`flex space-x-2 ${showMenu ? 'flex-col items-center' : ''}`}>
        {showMenu ? (
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Close menu"
          >
            <AiOutlineClose />
          </button>
        ) : (
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Open menu"
          >
            <AiOutlineMenu />
          </button>
        )}

        {showMenu && (
          <div className="flex flex-col space-y-2">
            <Link
              to="/checkin"
              className="flex items-center justify-center p-2 px-6 pb-2 bg-blue text-white font-semibold rounded-full shadow-lg hover:shadow-green-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100 scale-75 md:mr-0 sm:scale-100"
              onClick={toggleMenu}
            >
              Check In
            </Link>
            <Link
              to="/findaperson"
              className="flex items-center justify-center p-2 px-6 pb-2 bg-blue text-white font-semibold rounded-full shadow-lg hover:shadow-green-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100 scale-75 -mr-6 md:mr-0 sm:scale-100"
              onClick={toggleMenu}
            >
              Find Person
            </Link>
            <Link
              to="/disasterstatus"
              className="flex items-center justify-center p-2 px-6 pb-2 bg-blue text-white font-semibold rounded-full shadow-lg hover:shadow-green-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100 scale-75 -mr-6 md:mr-0 sm:scale-100"
              onClick={toggleMenu}
            >
              Disaster Status
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
