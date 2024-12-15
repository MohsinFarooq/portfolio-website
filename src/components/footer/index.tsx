import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center w-full p-6 bg-dark-cards_200 rounded-t-3xl text-white h-auto">
      <div className="flex flex-col items-center gap-3">
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/mohsin-farooq-352a98215/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-700 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/MohsinFarooq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-700 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <aside>
          <p className="flex items-center text-center font-light text-sm">
            All rights reserved by &nbsp;
            <span className="text-green-400">Mohsin Farooq</span>
          </p>
        </aside>
      </div>
    </footer>
  );
}
