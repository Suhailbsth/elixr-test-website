import Image from "next/image";
import { sanityClient } from "../components/lib/sanity";
import Link from "next/link";
import AnimatedTitle from "../components/AnimatedTitle";
import {
  ServiceScrollLeft,
  ServiceScrollRight,
} from "../components/ServiceScrollButtons";
import VideoPlayer from "../components/VideoPlayer";
import WorkProcess from "../components/workProcess";
import GLTFModel from "@/components/GLTFModel";
import Marquee from "react-fast-marquee";
import { ThreeDCam } from "@/components/3DCam";
import { Canvas } from "react-three-fiber";

const companyData = [
  {
    image: "/c1.png",
  },
  {
    image: "/c2.png",
  },
  {
    image: "/c3.png",
  },
  // {
  //   image: "/c4.png",
  // },
  // {
  //   image: "/c5.png",
  // },
  // {
  //   image: "/c1.png",
  // },
  // {
  //   image: "/c2.png",
  // },
  // {
  //   image: "/c3.png",
  // },
  // {
  //   image: "/c4.png",
  // },
  // {
  //   image: "/c5.png",
  // },
];

export async function getStaticProps() {
  // Fetch data from Sanity using the client
  const query = `*[_type == "home"][0]{
    title,
    description,
    mainSection {
      titles[]
    },
    detailSection {
        title,
        subTitle1,
        subTitle2,
        subTitle3,
        subTitle4
    },
    serviceSection {
        title,
    },
    aboutSection {
        title,
        cardData {
            title1,
            description1,
            title2,
            description2,
            title3,
            description3
        },
        videoElement {
            title,
            subTitle1,
            subTitle2,
            videoUrls[],
            button {
              label,
              link
            }
        }
    },
    workProcessSection {
        title,
        subTitle,
        workProcess[] {
            title,
            description
        }
    },
    contactSection {
        title,
        description
    }
  }`;
  const sanityData = await sanityClient.fetch(query);
  const serviceQuery = `*[_type == 'services'][0] {
    menu{
     options[] {
       name,
       image,
       slug
     }
   }
 }`;

  const serviceData = await sanityClient.fetch(serviceQuery);
  return {
    props: {
      data: sanityData,
      serviceData,
    },
  };
}

export default function Home({ data, serviceData }) {
  return (
    <main className="flex text-white min-h-screen flex-col items-center  ">
      <div className="px-8 flex w-full min-h-screen flex-col pb-28 md:py-10 md:pb-10 items-center relative overflow-hidden">
        {/* <Image
          className="absolute transform md:w-[35vw] scale-x-[-1]"
          src="/camera.png"
          alt="camera.png"
          width={500}
          height={457}
          layout="inherit" // Set the layout mode to "responsive"
          objectFit="contain"
          priority
        /> */}
        <Canvas
          style={{ position: "absolute", top: "0" }}
          className="absolute pr-16"
        >
          <ThreeDCam />
        </Canvas>
        <AnimatedTitle titles={data.mainSection.titles} />
        <div className="h-[5vw] z-50 w-[5vw] animate-bounce rounded-full justify-center items-center border border-dashed opacity-50 border-white md:flex hidden absolute bottom-[10vw] right-64 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
        <Image
          className="absolute md:right-[-20vw] -right-72"
          src="/backdrop.png"
          alt="backDrop"
          width={500}
          height={457}
          priority
        />
      </div>

      <div className="p-8 flex w-full flex-col pt-0 md:pt-20 relative items-center overflow-hidden">
        <div className="w-full md:flex justify-between">
          <Link
            href="/contactUs"
            className="rounded-3xl md:hidden py-1 border border-white text-2xl w-72 mb-14 mt-6 flex text-center items-center justify-center"
          >
            Contact Us
          </Link>
          <div className="md:pl-4">
            <div className="md:text-[3.5vw] md:w-3/5 md:leading-[7vh] text-3xl ">
              {data.title?.toUpperCase()}
            </div>
            <div className="flex flex-col justify-end">
              <div className="md:w-[19vw] w-72 md:text-[1.1vw] font-light">
                {data.description}
              </div>
              <Link
                href="/about"
                className="rounded-3xl z-40 hidden py-1 mt-2 border border-white text-[1.4vw] w-[19vw] md:flex text-center items-center justify-center"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <div className="flex flex-col">
              <Image
                className="relative self-end"
                src="/movie.png"
                alt="movie Image"
                width={440}
                height={57}
                quality={100}
                priority
                layout="inherit" // Set the layout mode to "responsive"
                objectFit="contain"
              />
            </div>
            <Link
              href="/about"
              className="rounded-3xl py-1 mt-4 border border-white text-2xl w-72 md:hidden flex text-center items-center justify-center"
            >
              About Us
            </Link>
          </div>
        </div>
        <Image
          className="absolute h-80 bottom-0 left-[-380px]"
          src="/backdrop.png"
          alt="backdrop"
          width={700}
          height={457}
          priority
        />
      </div>
      <div className="p-6 flex w-full flex-col  relative overflow-hidden">
        <div className="flex  flex-col p-auto">
          <div className="flex py-5 items-center gap-3 w-full justify-center md:ml-10 md:justify-between font-normal text-lg md:text-[1.3vw]">
            <div className="min-w-max">
              {data.serviceSection.title?.toUpperCase()}
            </div>
          </div>
          <div className="flex">
            <ServiceScrollLeft />
            <div
              className="md:flex md:overflow-x-scroll pb-10 hide-scroll-bar"
              // ref={scrollRef}
              id="scroll-container"
            >
              <div className="md:flex grid grid-cols-2 md:gap-0 gap-4 flex-nowrap ">
                {serviceData.menu?.options.map((i, index) => (
                  <Link
                    href={`/services/${i.slug.current}`}
                    className="inline-block md:px-3"
                  >
                    <div
                      className={`md:w-[38.1vw] hover:shadow-xl md:h-[19.2vw] w-36 h-36 overflow-hidden rounded-lg shadow-md bg-gray-200 transition-all duration-300 ease-in-out`}
                      style={{
                        backgroundImage: `url(${i.image})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="flex py-2 cursor-pointer hover:pl-2 md:text-[1vw] transition-all items-center gap-10">
                      <div className="">{i.name}</div>
                      <Image
                        className="hidden md:block"
                        src="/arrowRight.svg"
                        alt="arrow.js Logo"
                        quality={100}
                        width={16}
                        height={10}
                        priority
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <ServiceScrollRight />
          </div>
        </div>
        <Image
          className="absolute h-80 mt-40 right-[-350px]"
          src="/backdrop.png"
          alt="backDrop"
          width={500}
          height={457}
          priority
        />
      </div>
      <div className="p-8 flex justify-center text-center md:text-left mt-6 w-full flex-col space-y-8 relative overflow-hidden">
        <div className="text-3xl md:text-[2.3vw]">
          {data.aboutSection.title?.toUpperCase()}
        </div>
        <div className="grid md:grid-cols-3">
          <div
            className={`group transition-all flex md:block flex-col items-center md:border-r border-b md:border-b-0 space-y-4 border-gray-600 p-10 md:p-20`}
          >
            <div className="relative md:self-end md:w-[2.62vw] w-12 h-12 md:h-[3.63vw]">
              <Image
                src="/Heart.svg"
                alt="svgLogo"
                layout="fill"
                quality={100}
                objectFit="contain" // You can adjust this based on your design needs
                priority
              />
            </div>
            <div className="md:text-[1.3vw] text-xl">
              {data.aboutSection.cardData.title1}
            </div>

            <div className="flex gap-2 -ml-2 group-hover:ml-0 items-start md:text-[1.05vw] text-base">
              <Image
                className="scale-x-0  pt-1 transition-all w-0 group-hover:w-4 ease-in-out duration-300 group-hover:scale-x-100 "
                src="/arrowRight.svg"
                alt="arrow.js Logo"
                width={16}
                height={10}
                priority
              />
              {data.aboutSection.cardData.description1}
            </div>
          </div>
          <div
            className={`group flex md:block flex-col items-center md:border-r border-b md:border-b-0 space-y-4 border-gray-600 p-10 md:p-20`}
          >
            <div className="relative md:self-end md:w-[2.62vw] w-12 h-12 md:h-[3.63vw]">
              <Image
                src="/Crown.svg"
                alt="svgLogo"
                layout="fill"
                objectFit="contain" // You can adjust this based on your design needs
                priority
              />
            </div>
            <div className="md:text-[1.3vw] text-xl">
              {data.aboutSection.cardData.title2}
            </div>
            <div className="flex gap-2 -ml-2 group-hover:ml-0 items-start md:text-[1.05vw] text-base">
              <Image
                className="scale-x-0  pt-1 transition-all w-0 group-hover:w-4 ease-in-out duration-300 group-hover:scale-x-100 "
                src="/arrowRight.svg"
                alt="arrow.js Logo"
                width={16}
                height={10}
                priority
              />
              {data.aboutSection.cardData.description2}
            </div>
          </div>
          <div
            className={`group flex md:block flex-col items-center space-y-4 border-gray-600 p-10 md:p-20`}
          >
            <div className="relative md:self-end md:w-[2.62vw] w-12 h-12 md:h-[3.63vw]">
              <Image
                src="/Heart.svg"
                alt="svgLogo"
                layout="fill"
                objectFit="contain" // You can adjust this based on your design needs
                priority
              />
            </div>
            <div className="md:text-[1.3vw] text-xl">
              {data.aboutSection.cardData.title3}
            </div>
            <div className="flex gap-2 -ml-2 group-hover:ml-0 items-start md:text-[1.05vw] text-base">
              <Image
                className="scale-x-0  pt-1 transition-all w-0 group-hover:w-4 ease-in-out duration-300 group-hover:scale-x-100 "
                src="/arrowRight.svg"
                alt="arrow.js Logo"
                width={16}
                height={10}
                priority
              />
              {data.aboutSection.cardData.description3}
            </div>
          </div>
        </div>
        <Image
          className="absolute h-80 -top-10 left-[-280px]"
          src="/backdrop.png"
          alt="backDrop"
          width={500}
          height={457}
          priority
        />
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="md:text-[0.8vw] text-xs text-center">
              {data.aboutSection.videoElement.subTitle1} .{" "}
              {data.aboutSection.videoElement.subTitle2}
            </div>
            <div className="md:text-[2vw] text-lg text-center">
              {data.aboutSection.videoElement.title?.toUpperCase()}
            </div>
            <div className="text-3xl my-2 items-center">
              {/* <Carousel
                cards={cards}
                height="400px"
                width="100%"
                offset={2}
                showArrows={true}
              /> */}
              <VideoPlayer
                videoId={data.aboutSection.videoElement.videoUrls[0]}
              />
            </div>
            <a
              href={data.aboutSection.videoElement.button.link}
              className="rounded-3xl cursor-pointer self-center py-2 mt-2 border border-white text-2xl w-72 flex text-center items-center justify-center"
            >
              {data.aboutSection.videoElement.button.label}
            </a>
            <Image
              className="absolute h-80 mt-96 left-[-310px]"
              src="/backdrop.png"
              alt="backdrop"
              width={500}
              height={457}
              priority
            />
            <div className="w-11/12 inline-flex flex-nowrap mt-5 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <Marquee speed={100} autoFill>
                {companyData?.map((item, index) => (
                  <Image
                    className=" relative mx-8"
                    src={item.image}
                    alt={item.altText}
                    quality={100}
                    width={120}
                    height={70}
                    priority
                  />
                ))}
              </Marquee>
            </div>
            <Image
              className="absolute z-50 -bottom-10 right-[-360px]"
              src="/backdrop.png"
              alt="backDrop"
              width={500}
              height={457}
              layout="inherit" // Set the layout mode to "responsive"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
      <WorkProcess data={data.workProcessSection} />
      <div className="p-8 px-12 grid md:flex justify-center w-full bg-[#3e62a9] md:px-20">
        <div className="flex w-80 items-center md:justify-start justify-center">
          <Image
            className="self-end w-[10vw] h-[10vw]"
            src="/sms.png"
            alt="smsLogo"
            width={20}
            height={40}
            layout="responsive"
            objectFit="contain"
            quality={100}
            priority
          />
        </div>
        <div className="flex justify-center flex-col gap-4">
          <div className="text-4xl font-medium">
            {data.contactSection.title}
          </div>
          <div className="md:w-80">{data.contactSection.description}</div>
          <Link
            href="/contactUs"
            className="rounded-3xl py-3 md:py-1 mt-2 border border-white md:text-2xl w-72 flex text-center items-center justify-center hover:bg-blue-500 hover:text-white transform hover:scale-105 transition duration-300"
          >
            SEND A MESSAGE
          </Link>
        </div>
      </div>
    </main>
  );
}
