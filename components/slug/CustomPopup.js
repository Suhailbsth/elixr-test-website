import Image from "next/image";
import React, { useRef, useState } from "react";
import VideoPlayer from "../VideoPlayer";

const CustomPopup = ({ onClose, selectedItem }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-neutral-900 bg-opacity-80">
      <div className="relative">
        {selectedItem.type === "image" || selectedItem.type === "behanceUrl" ? (
          <Image
            className={` object-cover ${
              selectedItem.imageMode && selectedItem.imageMode === "port"
                ? "aspect-3/4 w-[25vw]"
                : "aspect-5/3 w-[60vw]"
            }`}
            src={selectedItem.image}
            alt="image"
            width={320}
            height={317}
            quality={100}
            priority
          />
        ) : selectedItem.type === "video" ? (
          <div className="aspect-5/3">
            <VideoPlayer videoId={selectedItem.url} />
          </div>
        ) : null}
        <button
          type="button"
          className="absolute z-50 h-6 w-6 -top-2 -right-2 rounded-full bg-blue-600 "
          onClick={() => onClose()}
        >
          <img src="/closeButton.svg" />
        </button>
      </div>
    </div>
  );
};

export default CustomPopup;
