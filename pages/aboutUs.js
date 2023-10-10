import React from "react";
import Image from "next/image";
import { sanityClient } from "../components/lib/sanity";

export async function getStaticProps() {
  const query = `*[_type == 'aboutUs'][0] {
    title,
    mainSection {
       details[] {
         title,
         description
       },
         description
     },
    aboutSection {
       topRightSection {
         title,
         description
       },
       bottomLeftSection {
         title,
         description
       },
       bottomRightSection {
         title,
         description
       }
     },
   valuesSection {
       title,
       description,
       desktopView[] {
         title,
         description
       },
       mobileView[] {
         title,
         description
       }
     },
    teamSection {
       title,
       subTitle1,
       subTitle2,
       team[] {
         "image":image.asset->url,
         name,
         position
       }
  }
 }
  `;

  const data = await sanityClient.fetch(query);
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

export default function About({ data }) {
  return (
    <main className="flex min-h-screen flex-col items-center text-white overflow-x-hidden">
      {/* SECTION 1 */}
      <div className="pl-4 pt-4 lg:pl-24 pr-4 lg:pr-24 pb-0 lg:p-8 flex w-full h-full flex-col relative overflow-hidden">
        <div className="text-3xl md:text-5xl text-left">
          {data.title?.toUpperCase()}
        </div>
        <div className=" pt-4 md:pt-8">
          <div className="flex flex-col gap-2">
            <div
              className="relative rounded-md"
              style={{ maxHeight: "67vh", overflow: "hidden" }}
            >
              <Image
                className="relative rounded-md h-72 object-cover"
                src="/aboutUsBanner.jpg"
                alt="aboutUs"
                width={1715}
                height={922}
                quality={100}
                layout="responsive"
                priority
              />
            </div>
          </div>
          <Image
            className="absolute h-80 bottom-0 left-[-550px] opacity-70"
            src="/backdrop.png"
            alt="backdrop"
            width={700}
            height={600}
            priority
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="pl-4 lg:pl-24 pr-4 lg:pr-24 p-4 pt-0 lg:p-8 flex w-full h-full flex-col relative overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col lg:w-1/2 sm:w-full gap-2">
            <Image
              className="relative rounded-md"
              src="/aboutUsGroup.png"
              alt="aboutUsGroup"
              width={700}
              quality={100}
              height={503}
              layout="responsive"
              priority
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 lg:p-24 lg:pt-0 pt-0 pl-0 gap-2 ">
            <div className="flex mt-2 text-xl lg:text-2xl justify-center items-center md:pr-8 md:mt-1">
              {data.mainSection.description}
            </div>
            <label className="text-lg text-cyan-500 pt-5">
              {data.aboutSection.topRightSection.title?.toUpperCase()}
            </label>
            <label className="items-center">
              {data.aboutSection.topRightSection.description}
            </label>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:pt-10 md:gap-10">
          <Image
            className="absolute h-80 bottom-0 right-[-400px] opacity-40"
            src="/backdrop.png"
            alt="backdrop"
            width={700}
            height={457}
            priority
          />
          <Image
            className="absolute right-[-20vw] -left-72 -bottom-44 opacity-60"
            src="/backdrop.png"
            alt="backDrop"
            width={450}
            height={457}
            priority
          />
          <div className="lg:flex flex-col grid lg:w-1/2 pt-10 lg:pt-24  lg:pl-0 gap-2 lg:mr-10">
            <div className="flex lg:flex-row flex-col gap-2 justify-center items-center lg:items-start lg:justify-start">
              <div className="justify-center">
                <Image
                  className="relative"
                  src="/OurVisionLogo.svg"
                  alt="OurVisionLogo"
                  quality={100}
                  width={65}
                  height={65}
                  priority
                />
              </div>
              <label className="text-lg text-cyan-500 flex gap-2 mt-2">
                {data.aboutSection.bottomLeftSection.title?.toUpperCase()}
              </label>
            </div>
            <label className="items-center text-center md:text-start pt-2 lg:w-[490px]">
              {data.aboutSection.bottomLeftSection.description}
            </label>
          </div>
          <div className="lg:hidden">
            <hr className="mt-12 border-t border-gray-600 lg:hidden" />
          </div>
          <div className="lg:flex flex-col grid lg:w-1/2 pt-10 lg:pt-24  lg:pl-0 gap-2">
            <div className="flex lg:flex-row flex-col gap-2 justify-center items-center lg:items-start lg:justify-start">
              <div className="justify-center">
                <Image
                  className="relative"
                  src="/OurMisionLogo.svg"
                  alt="OurMisionLogo"
                  quality={100}
                  width={65}
                  height={65}
                  priority
                />
              </div>
              <label className="text-lg text-cyan-500 flex gap-2 mt-2">
                {data.aboutSection.bottomRightSection.title?.toUpperCase()}
              </label>
            </div>
            <label className="items-center text-center md:text-start pt-2 ">
              {data.aboutSection.bottomRightSection.description}
            </label>
          </div>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="pl-4 lg:pl-24 pr-4 lg:pr-24 pt-10 lg:pt-24 p-4 lg:p-8 flex w-full h-full flex-col relative overflow-hidden gap-4">
        <Image
          className="absolute md:right-[-20vw] -top-52 -left-72 opacity-60"
          src="/backdrop.png"
          alt="backDrop"
          width={450}
          height={457}
          priority
        />
        <div className="flex md:justify-center md:items-center">
          <label className="text-cyan-500 text-sm lg:text-base">
            {data.valuesSection.title?.toUpperCase()}
          </label>
        </div>
        <div className=" flex md:justify-center md:items-center">
          <label className="text-3xl lg:text-4xl">
            {data.valuesSection.description?.toUpperCase()}
          </label>
        </div>
        <div className="md:grid grid-cols-3 gap-10 pt-10 hidden">
          {data.valuesSection.desktopView.map((index) => (
            <div className="flex flex-col gap-2 " key={index.title}>
              <div className="flex gap-2">
                <span className="text-cyan-500 text-xl lg:text-2xl">|</span>
                <div className="flex flex-col gap-2">
                  <label className="text-xl lg:text-2xl">
                    {index.title?.toUpperCase()}
                  </label>
                  <label className="text-xs lg:text-base">
                    {index.description}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-10 pt-4 md:hidden">
          {data.valuesSection.mobileView.map((index) => (
            <div className="flex flex-col gap-2" key={index.title}>
              <div className="flex gap-2">
                <span className="text-cyan-500 text-2xl">|</span>
                <div className="flex flex-col gap-2">
                  <label className="text-xl lg:text-2xl">
                    {index.title?.toUpperCase()}
                  </label>
                  <label>{index.description}</label>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 4 */}
        <div className="flex justify-center items-center pt-10 lg:pt-24 pb-10">
          <div className="flex flex-col justify-center items-center gap-2 lg:gap-6">
            <Image
              className="absolute h-80 top-[500px] right-[-450px] opacity-40"
              src="/backdrop.png"
              alt="backdrop"
              width={700}
              height={457}
              priority
            />
            <Image
              className="absolute h-80 top-[700px] left-[-550px] opacity-70"
              src="/backdrop.png"
              alt="backdrop"
              width={700}
              height={600}
              priority
            />
            <label className="text-cyan-500 text-sm lg:text-base">
              {data.teamSection.title?.toUpperCase()}
            </label>
            <div className="flex flex-col justify-center items-center gap-0 lg:gap-2">
              <label className="text-xl lg:text-4xl">
                {data.teamSection.subTitle1?.toUpperCase()}
              </label>
              <label className="text-xl lg:text-4xl">
                {data.teamSection.subTitle2?.toUpperCase()}
              </label>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20 pt-2 lg:pt-10">
              {data.teamSection.team.map((card, index) => (
                <div>
                  <div
                    key={index}
                    className="relative w-40 lg:w-full h-40 lg:h-60 rounded-lg overflow-hidden justify-center items-center"
                  >
                    <div class="bg-white h-full w-full absolute top-0 left-0"></div>
                    <div class="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-bl from-teal-200 via-white to-white"></div>
                    <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-rose-200 via-white to-white"></div>
                    <Image
                      className="relative rounded-lg object-cover"
                      src={card.image ? card.image : "/user.png"}
                      alt={card.name}
                      quality={100}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                  <div className="flex items-center justify-center mt-2 text-sm lg:text-lg">
                    {card.name}
                  </div>
                  <div className="flex items-center justify-center mt-2 text-xs lg:text-sm font-light">
                    {card.position}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
