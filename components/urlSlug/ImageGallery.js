import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import CustomPopup from "../slug/CustomPopup";

const ImageComponent = (props, onImageClick) => {
  // if (props.item.type === "image") return <img {...props.imageProps} />;
  // else if (props.item.type === "video")
  return (
    <>
      <div
        {...props.imageProps}
        className="relative h-full w-full md:px-12 px-10 bg-white"
      >
        <img
          src={props.imageProps.src}
          onClick={() => onImageClick(props.item)}
          className="h-full w-full object-cover"
          style={{ height: "100%", width: "100%" }}
        />
        {props.item.type === "video" && (
          <button
            class="w-12 h-12 absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black focus:outline-none"
            // onClick={}
            title="Play"
          >
            <img
              src="/playButton.svg"
              className="mx-auto rounded-full bg-white"
            />
          </button>
        )}
      </div>
    </>
  );
};

export const ImageGallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const galleryImages = images.map((x, index) => {
    const [originalWidth, originalHeight] = new URL(x.src).pathname
      .split("/")
      .filter((p) => p)
      .pop()
      .split(".")
      .slice(0, 1)
      .join("")
      .split("-")
      .pop()
      .split("x")
      .map((px) => parseInt(px));
    return {
      ...x,
      width: originalWidth,
      height: originalHeight,
    };
  });

  const [selectedItem, setSelectedItem] = useState();

  const onImageClick = (item) => {
    console.log(item);
    let img = item;
    if (item.type === "image") {
      const width = img.scaledWidth;
      const height = img.scaledHeight;
      let mode;
      if (height > width) {
        mode = "port";
      } else if (width > height) {
        mode = "land";
      }
      img = { ...img, imageMode: mode, image: img.src };
    }
    setSelectedItem(img);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="gallery-container">
      <div className="block md:hidden">
        <Gallery
          images={galleryImages}
          rowHeight={300}
          thumbnailImageComponent={(p) => ImageComponent(p, onImageClick)}
        />
      </div>
      <div className="hidden md:block lg:hidden">
        <Gallery
          images={galleryImages}
          rowHeight={380}
          thumbnailImageComponent={(p) => ImageComponent(p, onImageClick)}
        />
      </div>
      <div className="hidden lg:block">
        <Gallery
          images={galleryImages}
          rowHeight={500}
          margin={10}
          thumbnailImageComponent={(p) => ImageComponent(p, onImageClick)}
        />
      </div>
      {open && <CustomPopup onClose={onClose} selectedItem={selectedItem} />}
    </div>
  );
};
