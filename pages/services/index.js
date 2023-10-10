// pages/services/index.js

import Link from "next/link";
import { sanityClient } from "../../components/lib/sanity";
import Image from "next/image";
import ServicesMenu from "../../components/services/ServicesMenu";

export async function getStaticProps() {
  // Fetch data from Sanity using the client
  const query = `*[_type == 'services'][0] {
    title,
    subTitle,
     menu{
      subTitle,
      title,
      options[] {
        name,
        image,
        descriptionTitle,
        description,
        slug
      }
    }
  }`;

  const response = await sanityClient.fetch(query);
  // const services = response?.menu?.options;
  return {
    props: {
      data: response,
    },
  };
}

const staticData = {
  mainImage: "/serviceMainImg.png",
  subImage: "/serviceSubImg.png",
};

const ServicesListing = ({ data }) => {
  return (
    <div className="md:p-24 p-5 w-full">
      <div className="md:flex flex-col md:flex-row">
        <div className="relative md:min-w-[820px] h-fit md:px-36 gap-4 md:gap-0 flex flex-col">
          <span
            className="md:text-6xl text-3xl leading-10 text-white font-primary"
            dangerouslySetInnerHTML={{ __html: data?.title }}
          />
          <span
            className="md:self-start mt-5 md:text-md text-base text-neutral-300 md:text-white font-secondary"
            dangerouslySetInnerHTML={{ __html: data?.subTitle }}
          />
          <div className="flex gap-4 relative md:static w-full">
            <Image
              src={staticData?.subImage}
              alt="image"
              width={300}
              height={300}
              quality={100}
              className={`md:absolute rounded-lg self-end top-52 right-5 md:h-72 md:w-48 h-32 w-24 object-cover `}
            />
            <Image
              src={staticData?.mainImage}
              width={300}
              alt="image"
              height={200}
              quality={100}
              priority={true}
              className="w-96 md:hidden rounded-lg block md:h-130 h-72 z-20 object-cover"
            />
            <div className="h-16 w-16 animate-bounce rounded-full flex justify-center items-center border border-dashed opacity-50 border-white z-40 md:hidden absolute top-1/2 -right-8 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative w-2/5">
          <Image
            src={staticData?.mainImage}
            width={300}
            alt="image"
            height={200}
            quality={100}
            className="z-20 w-full hidden rounded-lg md:block h-130 object-cover"
          />
          <div className="h-14 w-14 animate-bounce rounded-full md:flex justify-center items-center border border-dashed opacity-50 border-white z-40 hidden absolute top-1/2 -right-8 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:mt-48 mt-20 flex flex-col md:items-center">
        <span className="text-cyan-500 text-lg pb-3">
          {data?.menu?.subTitle}
        </span>
        <span className="text-white md:text-6xl text-3xl md:pb-20 pb-10 w-64 md:w-fit">
          {data?.menu?.title}
        </span>
        <ServicesMenu data={data} />
      </div>
    </div>
  );
};

export default ServicesListing;
