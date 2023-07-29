import React from 'react';
import { FaFacebook, FaTwitter, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600 py-7 text-center text-white">
      <div className="flex justify-center gap-7 md:mb-10 mb-3">
        <div>
          <a href=""><FaFacebook /></a>
        </div>
        <div>
          <a href=""><FaTwitter /></a>
        </div>
        <div>
          <a href=""><FaDiscord /></a>
        </div>
      </div>
      <div className="">Copyright &copy; Cloud Chase 2023. All rights reserved.</div>
    </div>
  );
}

export default Footer;
