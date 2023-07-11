import React from "react";
import logo from "../images/logo.png";
import useUser from "../context/useUser";
import user from "../assets/user-logo.svg";
import { useNavigate, Link } from "react-router-dom";

const NavBar = () => {
  const { isLogged, logout } = useUser();
  const handleClick = async () => {
    logout();
  };

  return (
    <div className="bg-white">
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="w-full flex justify-between ">
              <div className="w-36">
                <img
                  src={logo}
                  alt="logoVeterinaria"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className="flex space-x-2 w-66 items-center">
                {isLogged ? (
                  <div className="flex space-x-2 w-66 items-center">
                    <div className=" border rounded-full  h-10 w-10 text-center">
                      <img
                        className="h-8 max-w-full ms-1 mt-1"
                        src={user}
                        alt="logouse"
                      />
                    </div>
                    <button className="hover:text-blue-700 hover:scale-95 hover:scale-x-{-1} hover:scale-y-{-1}">
                      <Link to="/home" onClick={handleClick}>
                        Logout
                      </Link>
                    </button>
                  </div>
                ) : (
                  <button className="hover:text-blue-700 hover:scale-95 hover:scale-x-{-1} hover:scale-y-{-1}">
                    <Link to="/login">Sign In</Link>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Seccion Menu */}
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-center">
            <div className="flex space-x-4">
              <ul className="inline mx-4">
                <li className="inline mx-8">
                  <button className="hover:underline hover:text-lime-600 mb-2">
                    <Link to="/home">Home</Link>
                  </button>
                </li>
                {isLogged ? (
                  <>
                    <li className="inline mx-2">
                      <Link
                        to="/showAppointment"
                        className="hover:underline hover:text-lime-600 mb-2"
                      >
                        My Appointments
                      </Link>
                    </li>
                    <li className="inline mx-2">
                      <Link
                        to="/createappointments"
                        className="hover:underline hover:text-lime-600 mb-2"
                      >
                        CreateAppointments
                      </Link>
                    </li>
                  </>
                ) : null}
                <li className="inline mx-8">
                  <Link to="/service" className="hover:underline hover:text-lime-600">
                    Service
                  </Link>
                </li>
                <li className="inline mx-8">
                <Link to="/about" className="hover:underline hover:text-lime-600">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
