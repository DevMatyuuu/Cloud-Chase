import React from 'react';
import { FaFacebook, FaTwitter, FaDiscord } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600 py-10 text-center text-white">
      <div className="flex justify-center gap-7 mb-6">
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
      <div className="flex justify-center gap-5 mb-5">
        <div><a href="">About us</a></div>
        <div><a href="">Contact us</a></div>
      </div>
      <div className="mb-5">Copyright &copy; Cloud Chase 2023. All rights reserved.</div>
    </div>
  );
}

export default Footer;
