"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
function scrollLeft(event) {
  event.preventDefault();
  const container = document.getElementById("scroll-container");
  container.scrollTo({
    left: container.scrollLeft - 500, // Adjust the scrolling amount as needed
    behavior: "smooth", // Add smooth scrolling behavior
  });
}

function scrollRight(event) {
  event.preventDefault();
  const container = document.getElementById("scroll-container");
  container.scrollTo({
    left: container.scrollLeft + 500, // Adjust the scrolling amount as needed
    behavior: "smooth", // Add smooth scrolling behavior
  });
}

export const ServiceScrollLeft = () => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  // Function to check scroll position and toggle the left button visibility
  function checkScrollPosition() {
    const container = document.getElementById("scroll-container");
    setShowLeftButton(container.scrollLeft > 0);
  }
  // Attach a scroll event listener to check scroll position
  useEffect(() => {
    const container = document.getElementById("scroll-container");
    container.addEventListener("scroll", checkScrollPosition);
    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);
  // JavaScript functions to handle scrolling
  return (
    <button
      onClick={(event) => scrollLeft(event)}
      className={`cursor-pointer z-50 p-2 ${showLeftButton ? "" : "hidden"}`}
    >
      <Image
        className="hidden -mt-10 rotate-180 md:block"
        src="/RectangleRight.svg"
        alt="arrow.js Logo"
        width={22}
        height={22}
        priority
      />
    </button>
  );
};

export const ServiceScrollRight = () => {
  // JavaScript functions to handle scrolling
  return (
    <button
      onClick={(event) => scrollRight(event)}
      className="cursor-pointer -mt-10 z-50 p-2"
    >
      <Image
        className="hidden md:block"
        src="/RectangleRight.svg"
        alt="arrow.js Logo"
        width={22}
        height={22}
        priority
      />
    </button>
  );
};
