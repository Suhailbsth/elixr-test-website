"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import CustomPopup from "../slug/CustomPopup";

const RelatedWorks = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    const container = sectionRef.current;
    if (container) {
      container.scrollBy({ left: 200, behavior: "smooth" }); // Adjust the scroll amount (200 pixels in this example)
    }
  };

  const onButtonClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex items-center gap-4">
      <div
        className="flex overflow-x-scroll md:pb-10 pb-1 hide-scroll-bar"
        ref={sectionRef}
      >
        <div className="flex flex-nowrap gap-5 mt-6">
          {data?.map((ti, index) => (
            <div className="flex flex-col gap-3" key={index}>
              {ti.image ? (
                <Image
                  src={ti.image}
                  width={320}
                  alt={`Image ${index}`}
                  height={317}
                  quality={100}
                  className="md:w-130 w-64 md:h-64 h-40 max-w-7xl object-cover overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                />
              ) : (
                <div className="md:w-130 w-64 md:h-64 h-40 max-w-7xl object-cover overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="gray"
                    class="w-full h-full"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
              )}
              {ti.type === "image" || ti.type === "video" ? (
                <button
                  onClick={() => onButtonClick(ti)}
                  type="button"
                  className="text-lg flex gap-4 items-center font-medium"
                >
                  {ti.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </button>
              ) : ti.type === "elixrUrl" ? (
                <Link
                  href={`/services/selectedService/${ti.url}`}
                  className="text-lg flex gap-4 items-center font-medium"
                >
                  {ti.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              ) : null}
            </div>
          ))}
        </div>

        {open && <CustomPopup onClose={onClose} selectedItem={selectedItem} />}
      </div>
      <div>
        <button onClick={scrollToSection}>
          <Image
            className="hidden md:block"
            src="/RectangleRight.svg"
            alt="arrow.js Logo"
            width={22}
            height={22}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default RelatedWorks;
