import React, { useState } from "react";
import axios from "axios";
import { FaBars, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Navbar({ sidebarToggle, setSidebarToggle }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track login status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    contactNo: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        formData
      );
      setIsModalOpen(false); // Close form modal
      setIsSuccessModalOpen(true); // Show success modal
      setIsLoggedIn(true); // Set logged-in state to true
    } catch (error) {
      console.error("Error saving user data:", error);
      alert("Failed to save user data");
    }
  };

  return (
    <nav className=" bg-gray-900 px-4 py-3 flex justify-between items-center sticky z-50 top-0 ">
      {/* Left side */}
      <div className="flex items-center text-2xl">
        <FaBars
          className="text-white cursor-pointer mr-4"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <img
          className="w-12 h-12 ml-3 mr-2"
          src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-open-book-logo-png-image_12467719.png"
          alt=""
        />
        <span className="text-white  text-lg  lg:text-2xl  font-semibold">
          Online<span className="text-gray-300">Learning</span>
        </span>

        {/* Responsive search input */}
        <div className="relative w-full max-w-xs sm:max-w-sm  md:max-w-md lg:max-w-96 ml-64 hidden md:block sm:hidden">
          <IoSearch className="absolute mt-2 pl-2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-[38rem] pl-8 text-lg py-1 rounded-lg shadow outline-none max-w-md"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn ? ( // Show login button if not logged in
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={() => setIsModalOpen(true)} // Open modal on click
          >
            Login
          </button>
        ) : (
          // Show user icon if logged in
          <FaUser className="text-blue-600 text-lg" />
        )}
      </div>

      {/* Modal for login form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 mb-2 border rounded"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 mb-2 border rounded"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                className="w-full p-2 mb-2 border rounded"
                value={formData.age}
                onChange={handleInputChange}
                required
              />

              <input
                type="text"
                name="contactNo"
                placeholder="Contact Number"
                className="w-full p-2 mb-4 border rounded"
                value={formData.contactNo}
                onChange={handleInputChange}
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  onClick={() => setIsModalOpen(false)} // Close modal on cancel
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-xl font-semibold mb-4">Success!</h2>
            <p className="mb-4">User data saved successfully.</p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setIsSuccessModalOpen(false)} // Close success modal
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
