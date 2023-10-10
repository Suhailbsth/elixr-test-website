"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="sticky text-white z-[100] top-0 w-full">
      <div className="relative mx-auto flex px-2 justify-between sm:px-4 lg:px-8 py-1 sm:py-2">
        <div className="absolute inset-0 filter md:blur-lg md:bg-opacity-70 bg-[#0E0F1D] md:bg-none  md:backdrop-blur-sm"></div>
        <Link href="/">
          <Image
            className="relative self-end z-10"
            src="/logo.svg"
            alt="logo.js Logo"
            width={100}
            height={57}
            priority
          />
        </Link>
        <div className="flex gap-2">
          <div>
            <Image
              className="relative invert self-end z-10 cursor-pointer"
              src="/menu.svg"
              alt="menu.js Logo"
              width={45}
              height={45}
              onClick={toggleMenu}
              priority
            />
            {isMenuOpen && <DropdownMenu onClose={toggleMenu} />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
