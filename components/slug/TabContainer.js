"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomPopup from "./CustomPopup";
import { Masonry } from "@mui/lab";

const TabContainer = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(data.tabMenus[0]);
  const [selectedItem, setSelectedItem] = useState();
  const [open, setOpen] = useState(false);
  const popupTypes = ["image", "video", "behanceUrl"];

  const onImageClick = (item) => {
    setSelectedItem(item);
    // if (item.type === "behanceUrl") {
    //   // Replace 'https://www.behance.net/' with the URL you want to display
    //   const url = item.url;
    //   window.open(url, "_blank", "width=800,height=600");
    // } else {
    setOpen(true);
    // }
  };

  const onClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };
  return (
    <>
      <div className="text-sm text-center text-gray-500 md:mt-12 mt-5 font-primary font-semibold">
        <ul className="flex flex-wrap justify-between md:justify-start -mb-px">
          {data?.tabMenus.map((tm, index) => (
            <li className="md:mr-2 mr-1 md:text-base text-xs" key={index}>
              <button
                href="#"
                className={`inline-block md:p-4 p-2 rounded-t-lg ${
                  selectedTab.title === tm.title
                    ? "border-b-4 border-cyan-500 text-white"
                    : "border-b-2 border-transparent"
                }`}
                onClick={() => setSelectedTab(tm)}
              >
                {tm.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:mt-20 mt-10">
        <Masonry columns={2} spacing={5}>
          {data &&
            data.tabItems &&
            data.tabItems
              .filter(
                (fti) =>
                  selectedTab.id === "all" || fti.category === selectedTab.id
              )
              ?.map((ti, index) => (
                <div key={index}>
                  {popupTypes.includes(ti.type) ? (
                    <button
                      className={`flex flex-shrink-0 flex-grow-0 ${
                        ti.imageMode === "port"
                          ? "aspect-3/4 md:w-140"
                          : "aspect-5/3 md:h-80 sm:h-64"
                      }  flex-col md:gap-2 gap-1 ${
                        index !== 0 ? "lg:mt-24" : ""
                      }`}
                      key={index}
                      type="button"
                      onClick={() => onImageClick(ti)}
                    >
                      {ti.image ? (
                        <Image
                          className="h-5/6 w-full object-cover rounded-sm"
                          src={ti.image}
                          alt="image"
                          width={500}
                          height={320}
                          priority
                        />
                      ) : (
                        <div className="h-5/6 w-full object-cover overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
                      <div className="h-1/6 flex flex-col items-start text-start md:text-lg text-xs">
                        <span className="md:text-lg sm:text-xs font-medium text-white ">
                          {ti.name}
                        </span>
                        <span className="text-white md:text-base text-[10px]">
                          <span className="text-cyan-500">|</span>&nbsp;
                          {
                            data.tabMenus.find((tm) => tm.id === ti.category)
                              ?.title
                          }
                        </span>
                      </div>
                    </button>
                  ) : ti.type === "elixrUrl" ? (
                    <Link
                      href={`selectedService/${ti.url}`}
                      className={`flex flex-shrink-0 ${
                        ti.imageMode === "port"
                          ? "aspect-3/4 md:w-140"
                          : "aspect-5/3 md:h-80 sm:h-64"
                      } flex-grow-0 flex-col gap-2 ${
                        index !== 0 ? "lg:mt-24" : ""
                      }`}
                    >
                      <Image
                        className="h-5/6 w-full object-cover rounded-sm"
                        src={ti.image}
                        alt="image"
                        width={500}
                        height={320}
                        objectFit="cover"
                        priority
                      />
                      <div className="h-1/6 flex flex-col items-start md:text-lg text-xs">
                        <span className=" font-medium text-white">
                          {ti.name}
                        </span>
                        <span className="text-white md:text-base text-[10px]">
                          <span className="text-cyan-500">|</span>&nbsp;
                          {
                            data.tabMenus.find((tm) => tm.id === ti.category)
                              ?.title
                          }
                        </span>
                      </div>
                    </Link>
                  ) : null}
                </div>
              ))}
        </Masonry>
        {open && <CustomPopup onClose={onClose} selectedItem={selectedItem} />}
      </div>
    </>
  );
};

export default TabContainer;
