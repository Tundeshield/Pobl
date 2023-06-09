import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src="/pobl-logo.png" className="h-8 mr-3" alt="pobl-logo" />
        </Link>
        <div className="flex md:order-2">
          <Link to="https://github.com/Tundeshield/Pobl" target="_blank">
            <Button>Github Link</Button>
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "text-gray-900 block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-blue-500"
                }
                aria-current="page"
              >
                Create Starter Requests
              </NavLink>
            </li>
            <li>
              <NavLink
                to="all-requests"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "text-gray-900 block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-blue-500"
                }
              >
                Requests
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
