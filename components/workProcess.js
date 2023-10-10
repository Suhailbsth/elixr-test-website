"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
function scrollRight(event) {
  event.preventDefault();
  const container = document.getElementById("work-process");
  container.scrollTo({
    left: container.scrollLeft + 400, // Adjust the scrolling amount as needed
    behavior: "smooth", // Add smooth scrolling behavior
  });
}
function scrollLeft(event) {
  event.preventDefault();
  const container = document.getElementById("work-process");
  container.scrollTo({
    left: container.scrollLeft - 400, // Adjust the scrolling amount as needed
    behavior: "smooth", // Add smooth scrolling behavior
  });
}
function WorkProcess({ data }) {
  const [hovered, setHover] = useState(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  // Function to check scroll position and toggle the left button visibility
  function checkScrollPosition() {
    const container = document.getElementById("work-process");
    setShowLeftButton(container.scrollLeft > 0);
    setShowRightButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  }

  // Attach a scroll event listener to check scroll position
  useEffect(() => {
    const container = document.getElementById("work-process");
    container.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);
    checkScrollPosition(); // Call it once to initialize the state
    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  const handleHover = (index) => {
    setHover(index);
  };

  const handleLeave = (index) => {
    setHover(null);
  };
  const logos = ["/w1.svg", "/w2.svg", "/w1.svg", "/w3.svg", "/w5.svg"];
  const combinedData = data.workProcess.map((item, index) => ({
    ...item,
    image: logos[index], // Assuming each data item corresponds to a logo
  }));
  return (
    <div className="md:p-8 p-4 pt- mt-6 w-full flex flex-col justify-center items-center">
      <div>
        <div className="text-cyan-600 md:text-center font-semibold text-lg">
          {data.title?.toUpperCase()}
        </div>
        <div className="md:text-5xl text-3xl w-fit md:max-w-[1080px] text-left md:text-center">
          {data.subTitle?.toUpperCase()}
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        {" "}
        <button
          onClick={(event) => scrollLeft(event)}
          className={`cursor-pointer z-50 p-2 ${
            showLeftButton ? "" : "hidden"
          }`}
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
        <div
          id="work-process"
          className="flex justify-start  overflow-x-scroll pt-14 pb-10 hide-scroll-bar"
        >
          <div className="flex flex-nowrap lg:ml-14 md:ml-4 ">
            {combinedData?.map((card, index) =>
              hovered !== index ? (
                <div
                  onMouseEnter={() => handleHover(index)}
                  className="cursor-pointer transition-all min-h-[400px] duration-500 delay-50 ease-in-out inline-block px-3"
                  key={index}
                >
                  <div
                    className={`md:w-[320px] w-72 h-80 md:h-[400px] relative   overflow-hidden rounded-xl shadow-md transition-all duration-300 ease-in-out ${
                      card.hovered ? "bg-black" : "hover:shadow-xl"
                    }`}
                  >
                    <div className="bg-[#171927] p-4 w-full h-1/5 md:h-1/2">
                      <div className="font-semibold hidden md:block w-28">
                        {card.title}
                      </div>
                    </div>
                    <div className="bg-gray-500 rounded-full absolute md:top-1/2 left-1/4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6">
                      <Image
                        className="relative self-end"
                        src={card.image}
                        alt="Crown.js Logo"
                        width={40}
                        height={40}
                        priority
                      />
                      {card.hover && "hovered"}
                    </div>
                    <div
                      className={`shadow-md md:px-4 px-8 w-full md:flex md:items-end grid p-4 h-4/5 md:h-1/2 bg-gradient-to-l from-[#171927] to-[#343646] `}
                    >
                      <div className="font-semibold text-xl md:hidden mt-14 block w-36">
                        {card.title}
                      </div>
                      <div className="font-gilroy md:hidden block font-normal text-md ">
                        {card.description}
                      </div>
                      <div className="font-semibold hidden md:block">
                        {" "}
                        0{index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  onMouseLeave={() => handleLeave(index)}
                  className="cursor-pointer transition-all duration-500 delay-50 ease-in-out z-40 -mt-8 inline-block px-3"
                  key={index}
                >
                  <div className="w-[320px] h-[400px] relative bg-gradient-to-b from-blue-400 to-blue-700 overflow-hidden rounded-lg shadow-md transition-all duration-500 ease-in-out">
                    <div className="flex flex-col h-full">
                      <div className="flex gap-6 px-6 pt-6 h-1/2 justify-center items-center flex-col">
                        <div className="font-gilroy font-normal text-3xl  text-center">
                          {card.title}
                        </div>
                        <div className="font-gilroy  font-normal text-md  text-center">
                          {card.description}
                        </div>
                      </div>
                      <div className="font-gilroy flex justify-center items-end p-4 h-1/2 font-normal text-md ">
                        <span> 0{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <button
          onClick={(event) => scrollRight(event)}
          className={`cursor-pointer z-50 p-2 ${
            showRightButton ? "" : "opacity-0"
          }`}
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
      </div>
    </div>
  );
}

export default WorkProcess;
