"use client";
import React from "react";
import Link from "next/link";
const menuItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Us",
    url: "/aboutUs",
  },
  {
    label: "Services",
    url: "/services",
  },
  {
    label: "Contact Us",
    url: "/contactUs",
  },
  // Add more menu items as needed
];

function DropdownMenu({ onClose }) {
  return (
    <div className="absolute top-12 right-6 z-20 bg-[#141528] shadow-md rounded-md">
      <div className="grid">
        {menuItems.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            onClick={onClose}
            className="menu-item rounded-md px-4 w-44 text-white hover:text-gray-50 py-4 transition duration-300 ease-in-out transform"
          >
            <i className={`fas fa-${item.icon}`} /> {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
