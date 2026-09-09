import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center w-full p-6 bg-dark-cards_200 rounded-t-3xl text-white h-auto">
      <aside>
        <p className="flex items-center text-center font-light text-sm">
          &copy; {new Date().getFullYear()} &nbsp;
          <span className="text-green-400">Mohsin Farooq</span>
          &nbsp;&middot; All rights reserved
        </p>
      </aside>
    </footer>
  );
}
