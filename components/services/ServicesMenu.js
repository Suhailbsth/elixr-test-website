"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ServicesMenu = ({ data }) => {
  const [hoveredItem, setHoveredItem] = useState();

  const onMouseOver = (item) => {
    setHoveredItem(item.name);
  };

  const onDropDownClick = (item) => {
    if (hoveredItem === item.name) setHoveredItem(null);
    else setHoveredItem(item.name);
  };
  return (
    <div className="w-full">
      {data &&
        data.menu?.options.map((o, index) => (
          <div
            className={`group text-white relative w-full flex md:flex-row flex-col justify-between transition-all ease-in-out duration-300 md:text-3xl text-2xl md:py-12 py-7 md:pr-16 pr-5 ${
              hoveredItem === o.name
                ? "min-h-[240px] border-y border-b-white border-t-slate-600"
                : " md:border-y border-b border-slate-600"
            }`}
            key={index}
            onMouseOver={() => onMouseOver(o)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex w-full md:gap-10 gap-0 justify-between md:justify-start">
              <div className="flex md:gap-10 gap-4 z-50">
                <span className="text-white opacity-40">0{index + 1}.</span>
                <Link href={`/services/${o.slug.current}`}>{o.name}</Link>
              </div>
              <div className="hidden md:flex">
                <Image
                  src={o.image}
                  width={300}
                  height={300}
                  quality={100}
                  alt={o.name}
                  className={` transition-all ease-in-out group-hover:scale-x-100 h-0 scale-x-0 duration-300 group-hover:h-56 w-52 object-cover -rotate-6 ${
                    hoveredItem === o.name ? "static" : "block"
                  }`}
                />
              </div>
              <button
                type="button"
                className="md:hidden flex mt-2"
                onClick={() => onDropDownClick(o)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 ${
                    hoveredItem === o.name ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            {hoveredItem === o.name ? (
              <>
                <Image
                  src={o.image}
                  width={300}
                  height={300}
                  quality={100}
                  alt={o.name}
                  className={`w-full h-72 object-cover my-4 ${
                    hoveredItem === o.name ? "md:hidden" : "hidden"
                  }`}
                />
                <div className="flex flex-col transition-all ease-in-out duration-200 font-secondary md:w-2/5 w-full gap-2">
                  <span className="text-white text-sm">
                    {o.descriptionTitle}
                  </span>
                  <span className="text-white text-sm opacity-70 leading-6">
                    {o.description}
                  </span>
                </div>
              </>
            ) : null}
          </div>
        ))}
    </div>
  );
};

export default ServicesMenu;
