"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/User/Home" },
    { name: "Shop", path: "/User/Shop" },
    { name: "Sale", path: "/User/Sale" },
    { name: "Features", path: "/User/Features" },
    { name: "Blog", path: "/User/Blog" },
    { name: "About", path: "/User/About" },
    { name: "Contact", path: "/User/Contact" },
  ];

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        Fashe<span>.</span>
      </div>

      {/* Menu */}
      <nav className={`nav ${open ? "open" : ""}`}>
        {menus.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className={`nav-link ${
              pathname === menu.path ? "active" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            {menu.name}
          </Link>
        ))}
      </nav>

      {/* Icons */}
      <div className="icons">
        <span className="icon">👤</span>
        <span className="icon cart">
          👜
          <span className="badge">0</span>
        </span>

        {/* Hamburger Icon (ONLY MOBILE) */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
