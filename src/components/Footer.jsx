import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            Welcome to our online learning platform. We offer a range of courses to help you improve your skills and advance your career.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="text-gray-400">
            <li className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" /> 123 Learning St, Knowledge City
            </li>
            <li className="flex items-center mb-2">
              <FaPhone className="mr-2" /> +123 456 7890
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" /> info@learningplatform.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-gray-400">
            <li className="mb-2 hover:text-white">
              <a href="#courses">Courses</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#about">About Us</a>
            </li>
            <li className="mb-2 hover:text-white">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:text-white">
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
          <FaLinkedin />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-8">
        <p>&copy; {new Date().getFullYear()} Learning Platform. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
