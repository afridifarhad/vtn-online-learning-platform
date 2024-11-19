import React from "react";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaBookReader, FaHome, FaUsers } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";

function Sidebar({ sidebarToggle }) {
  return (
    <div
      className={`${
        sidebarToggle ? "w-20" : "w-64"
      } bg-gray-900 fixed  h-full px-4 py-2 transition-width duration-300 
      
      `}
    >
      <ul className="mt-3 text-white">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/" className="flex items-center px-3 font-semibold">
            <FaHome className="inline-block w-6 h-6 mr-2" />
            {!sidebarToggle && <span>Home</span>}
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/about" className="flex items-center px-3 font-semibold">
            <FaUsersRectangle className="inline-block w-6 h-6 mr-2" />
            {!sidebarToggle && <span>About</span>}
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/courses" className="flex items-center px-3 font-semibold">
            <FaBookReader className="inline-block w-6 h-6 mr-2" />
            {!sidebarToggle && <span>Courses</span>}
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/staff" className="flex items-center px-3 font-semibold">
            <FaUsers className="inline-block w-6 h-6 mr-2" />
            {!sidebarToggle && <span>Staff</span>}
          </Link>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <Link to="/contact" className="flex items-center px-3 font-semibold">
            <IoIosContact className="inline-block w-6 h-6 mr-2" />
            {!sidebarToggle && <span>Contact</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
