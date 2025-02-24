import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = props => {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
      {/* Logo and About Section */}
      <div>
        <h2 className="text-2xl font-bold">Stock Market</h2>
        <p className="text-gray-400 mt-2">
          Empowering innovation with seamless digital solutions.
        </p>
      </div>

      {/* Navigation Links */}
      <div>
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="mt-2 space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div>
        <h3 className="text-lg font-semibold">Follow Us</h3>
        <div className="flex justify-center sm:justify-start space-x-4 mt-2">
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
    </div>
  </footer>
  )
}


export default Footer
