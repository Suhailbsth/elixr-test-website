import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import CustomPopup from "../slug/CustomPopup";
import Image from "next/image";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

function srcset(image, width, height) {
  return {
    src: `${image}?w=${width}&h=${height}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width}&h=${height}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageComponent = (props, onImageClick) => {
  // if (props.item.type === "image") return <img {...props.imageProps} />;
  // else if (props.item.type === "video")
  return (
    <>
      <div
        {...props.imageProps}
        className={`relative h-full w-full md:px-12 px-10 bg-white`}
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

export const ImageGallery = ({ images,cols }) => {
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
    const featured = index === 0 || index == 3 ? true : false;
    return {
      ...x,
      featured: featured,
      width: originalWidth,
      height: originalHeight,
    };
  });

  const [selectedItem, setSelectedItem] = useState();

  const onImageClick = (item) => {
    console.log(item);
    let img = item;
    if (item.type === "image") {
      const width = img.height;
      const height = img.width;
      let mode;
      if (height > width) {
        mode = "port";
      } else if (width > height) {
        mode = "land";
      }
      img = { ...img, imageMode: mode, image: img.src };
    }
    console.log(img);
    setSelectedItem(img);
    setOpen(true);
  };

  console.log(cols,images)

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="gallery-container">
      <ImageList
        sx={{
          width: "100%",
          height: "100%",
        }}
        cols={cols}
        // rowHeight={Math.max(...galleryImages.map((x) => x.height))}
        gap={10}
      >
        {galleryImages.map((item) => {
          const cols = item.colSpan;
          const rows = item.rowSpan;

          return (
            <ImageListItem key={item.src} cols={cols} rows={rows}>
              <img
                {...srcset(item.src, item.width, item.height, rows, cols)}
                alt={item.src}
                onClick={() => onImageClick(item)}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
      {/* <div className="block md:hidden">
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
      </div> */}
      {open && <CustomPopup onClose={onClose} selectedItem={selectedItem} />}
    </div>
  );
};
