import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="bg-gray-800 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" class="hover:underline">
              Pobl™
            </Link>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                Create Starter Requests
              </Link>
            </li>
            <li>
              <Link
                to="/starter-requests"
                className="mr-4 hover:underline md:mr-6"
              >
                Requests
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
