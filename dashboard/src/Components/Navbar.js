import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();

  return (
    <>
      <nav className="w-full h-20 bg-gray-900 fixed top-0 left-0 z-50 flex px-4 md:px-10 items-center duration-500 ease-in-out">
        <button onClick={() => navigate("/")}>
          <div className="text-3xl font-bold font-serif text-white w-56 transform hover:scale-125 transition duration-500 ease-in-out hover:cursor-pointer rounded-lg hover:shadow-gray-900 hover:shadow-lg">
            CLUB ELITE
          </div>
        </button>

        <div className="flex justify-between w-full text-white">
          <ul className="md:flex hidden text-xl pt-1">
            <li className="ml-10">
              <button
                className="hover:font-bold p-3 rounded-3xl transform hover:scale-95 transition duration-300 ease-in-out bg-transparent focus:ring-2 focus:ring-gray-500 hover:shadow-lg hover:shadow-gray-500"
                onClick={() =>
                  (window.location.href =
                    "https://sahas2711-clubrecommandation-app-nx54uh.streamlit.app")
                }
              >
                Find Clubs
              </button>
            </li>
            <li className="mx-2">
              <button
                onClick={() => navigate("/club")}
                className="hover:font-bold p-3 rounded-3xl transform hover:scale-95 transition duration-300 ease-in-out bg-transparent focus:ring-2 focus:ring-gray-500 hover:shadow-lg hover:shadow-gray-500"
              >
                <a href="">Clubs</a>
              </button>
            </li>
            <li className="mx-2">
              <button
                onClick={() => navigate("/skills")}
                className="hover:font-bold p-3 rounded-3xl transform hover:scale-95 transition duration-300 ease-in-out bg-transparent focus:ring-2 focus:ring-gray-500 hover:shadow-lg hover:shadow-gray-500"
              >
                <a href="">Skills</a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

// Default title if none is provided
Navbar.defaultProps = {
  title: "Set title...",
};
