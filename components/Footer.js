import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer({ data }) {
  return (
    <div>
      <div className="font-gilroy md:grid bg-[#0E0F1D] hidden text-gray-600 grid-cols-5 pt-10 pb-3 w-full px-8">
        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <div className="col-span-2">Mail us</div>
            <div className="col-span-2">
              <a href={`mailto:${data?.contactEmail}`} className="text-white">
                {data?.contactEmail}
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <div>Even better call us</div>
            <div className="space-x-2  text-white">
              {data?.phoneNumbers.map((number, index) => (
                <span key={index}>{number}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="text-end w-1/4">Quick links</div>

          <div className="gap-y-4 mt-2 grid grid-cols-2 justify-between w-1/2">
            {data?.quickLinks.map((item, index) => (
              <Link
                href={item.link}
                className="hover:text-white w-fit"
                key={index}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {/* <div>
            <div className="">Stay Informed</div>
            <div className="mt-1">
              <div className="flex gap-1 items-center   rounded-3xl">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow py-2 px-4 w-20 rounded-l-3xl border-r border-gray-300 focus:outline-none"
                />
                <button className="py-2 px-4 rounded-r-3xl bg-[#3e62a9] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div> */}
          <div className="">
            <div>Let's be friends</div>
            <div className="flex items-center mt-2 space-x-4 text-white">
              {data?.links.map((item, index) => (
                <a href={item.link} key={index}>
                  <Image
                    className="relative"
                    src={item.icon}
                    alt={item.name}
                    width={22}
                    height={22}
                    priority
                  />
                </a>
              ))}
            </div>
          </div>{" "}
        </div>
        <div className="mt-8 col-span-5">
          <div className="flex border-t pt-4 justify-between border-gray-600 w-full">
            <div className="flex items-center gap-4">
              <div>
                Copyright <span>&copy;</span> {new Date().getFullYear()} elixer
                studios
              </div>

              <div className="border-l h-3 border-gray-600"></div>

              <Link className="hover:text-white" href="/privacyPolicy">
                {data?.privacy.label}
              </Link>
            </div>
            <div>{data?.designedByText}</div>
          </div>
        </div>
      </div>
      <div className="font-gilroy md:hidden bg-[#0E0F1D] block text-gray-600 pt-10 pb-3 w-full px-8">
        <div className="space-y-2">
          <div>Let's be friends</div>
          <div className="flex items-center space-x-4 text-white">
            {data?.links.map((item, index) => (
              <a href={item.link} key={index}>
                <Image
                  className="relative"
                  src={item.icon}
                  alt="icon"
                  width={24}
                  height={24}
                  priority
                />
              </a>
            ))}

            {/* Add more icons here */}
          </div>
          {/* <div className="mt-4">Stay Informed</div>
          <div className="flex gap-1 items-center rounded-3xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow py-2 px-4 w-64 rounded-l-3xl border-r border-gray-300 focus:outline-none"
            />
            <button className="py-2 px-4 rounded-r-3xl bg-blue-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div> */}
        </div>
        <div className="mt-4">Quick links</div>

        <div className="col-span-2 mt-2 gap-2 grid grid-cols-2 ">
          {data?.quickLinks.map((item, index) => (
            <Link href={item.link} key={index} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="col-span-2 mt-4">Mail us</div>
        <div className="text-white col-span-2">{data?.contactEmail}</div>
        <div className=""></div>
        <div className=" mt-4">
          <div>Even better call us</div>
          <div className="space-x-4  text-white">
            {data?.phoneNumbers.map((number, index) => (
              <span key={index}>{number}</span>
            ))}
          </div>
        </div>
        <div className="mt-8 col-span-5">
          <div className="flex flex-col items-center text-center border-t pt-4 justify-between border-gray-600 w-full">
            <div className="flex gap-2">
              <Link href="/privacyPolicy" className="">
                {data?.privacy.label}
              </Link>
            </div>
            <div className="items-center gap-4">
              <div>
                Copyright <span>&copy;</span> {new Date().getFullYear()} elixer
                studios
              </div>
            </div>
            <div>{data?.designedByText}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
