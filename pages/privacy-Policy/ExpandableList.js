"use client";
import Image from "next/image";
import React, { useState } from "react";

function ExpandableList({ items }) {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className="bg-gradient-to-b from-[#343646] to-[#181A28] mb-4 rounded-lg  transition ease-in-out duration-300"
        >
          {index !== 0 && (
            <>
              <div
                onClick={() => toggleItem(index)}
                className={`md:text-4xl text-lg md:px-8 flex gap-3 items-center p-6 cursor-pointer ${
                  expandedItems[index] ? "text-blue-400" : "text-white"
                }`}
              >
                <span className="expand-icon">
                  {expandedItems[index] ? (
                    <Image
                      className="hidden md:block"
                      src="/RectangleBottom.svg"
                      alt="arrow.js Logo"
                      width={20}
                      height={20}
                      priority
                    />
                  ) : (
                    <Image
                      className="hidden md:block"
                      src="/RectangleRight.svg"
                      alt="arrow.js Logo"
                      width={12}
                      height={12}
                      priority
                    />
                  )}
                </span>
                {item.title}
              </div>
              <div
                className={`${
                  expandedItems[index] ? "block" : "hidden"
                } pb-6 md:px-16 px-8 font-light md:text-xl text-sm transition-all ease-in-out duration-300`}
              >
                <p>{item.content}</p>
                {item.listItems && (
                  <ul className="list-disc pl-8">
                    {item.listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ExpandableList;