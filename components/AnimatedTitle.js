// "use client";
// import React, { useState, useEffect } from "react";

// function AnimatedTitle({ titles }) {
//   const [titleIndex, setTitleIndex] = useState(0);
//   const [currentTitle, setCurrentTitle] = useState(titles[0]);
//   const [showSecondText, setShowSecondText] = useState(false);

//   useEffect(() => {
//     const animationTimeout = setTimeout(() => {
//       setShowSecondText(true);
//     }, 2000); // Adjust the delay before sliding up the second text as needed

//     const nextTitleTimeout = setTimeout(() => {
//       const nextIndex = (titleIndex + 1) % titles.length;
//       setCurrentTitle(titles[nextIndex]);
//       setTitleIndex(nextIndex);
//       setShowSecondText(false);
//     }, 2500); // Adjust the delay between titles as needed

//     return () => {
//       clearTimeout(animationTimeout);
//       clearTimeout(nextTitleTimeout);
//     };
//   }, [titleIndex, titles]);

//   return (
//     <div className="w-full mt-[45vh]">
//       <div className="md:text-[3.3vw] text-3xl">
//         {currentTitle.split(" ")[0].charAt(0) +
//           currentTitle.split(" ")[0].slice(1).toUpperCase()}
//       </div>
//       <div
//         className={`md:text-[10vw] h-24 text-[52px] md:leading-[8vw] transition-transform duration-500 transform ${
//           showSecondText ? "translate-y-36" : "translate-y-0"
//         }`}
//       >
//         {currentTitle.split(" ").slice(1).join(" ")}
//       </div>
//     </div>
//   );
// }

// export default AnimatedTitle;
"use client";
import React, { useState, useEffect } from "react";
// import "./styles/AnimatedTitle.css"; // Import a CSS file for styling

function AnimatedTitle({ titles }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    const titleParts = titles[titleIndex].split(" ");
    const firstPart = titleParts[0];
    const secondPart = titleParts.slice(1).join(" ");

    let currentIndex = 0;

    const typingAnimation = setInterval(() => {
      if (currentIndex <= secondPart.length) {
        setCurrentTitle(
          firstPart + " " + secondPart.substring(0, currentIndex)
        );
        currentIndex++;
      } else {
        clearInterval(typingAnimation);

        // Wait for a moment before moving to the next title
        setTimeout(() => {
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 2000); // Adjust the delay as needed
      }
    }, 200); // Adjust the typing speed as needed (slower speed)

    return () => {
      clearInterval(typingAnimation);
    };
  }, [titleIndex, titles]);
  return (
    <div className="w-full mt-[55vh]">
      <div className="md:text-[3.3vw] text-3xl">
        {currentTitle.split(" ")[0].charAt(0) +
          currentTitle.split(" ")[0].slice(1).toUpperCase()}
      </div>
      <div className="md:text-[10vw] h-[15vh] text-[52px] md:leading-[12vw] letter-container">
        {/* Apply the fade-in and fade-out class for each letter */}
        {currentTitle
          .split(" ")
          .slice(1)
          .join(" ")
          .split("")
          .map((letter, index) => (
            <span
              key={index}
              className={`letter ${
                index === currentTitle.length - 1 ? "fade-out" : "fade-in "
              }`}
            >
              {letter}
            </span>
          ))}
      </div>
    </div>
  );
}

export default AnimatedTitle;
