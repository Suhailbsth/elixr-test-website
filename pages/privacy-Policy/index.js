import { sanityClient } from "../../components/lib/sanity";
import React from "react";
import ExpandableList from "./ExpandableList";
import Image from "next/image";

export async function getStaticProps() {
  // Fetch data from Sanity using the client
  const query = `*[_type == 'privacyPolicy'][0] {
        title,
        content[]{
          title,
          content,
          listItems
        }
      }`;

  const data = await sanityClient.fetch(query);
  return {
    props: {
      data,
    },
  };
}

const PrivacyPolicy = ({ data }) => {
  return (
    <div className="overflow-x-hidden relative font-sans min-h-screen p-8">
      <Image
        className="absolute opacity-50 -z-10 -top-24 md:right-[-22vw] -right-60"
        src="/backdrop.png"
        alt="backDrop"
        width={800}
        height={657}
        priority
      />
      <div className="space-y-8 text-white p-10 md:px-14 px-2 mx-auto max-w-screen-lg">
        <div>
          <h1 className="md:text-5xl text-3xl gap-2 flex mb-4">
            <Image
              className=""
              src="/privacyIcon.png"
              alt="privacy.png"
              width={50}
              height={50}
              layout="inherit"
              objectFit="contain"
            />
            {data.content[0].title}
          </h1>
          <div>
            <p className="font-light md:text-xl text-sm">
              {data.content[0].content}
            </p>
          </div>
        </div>
        <ExpandableList items={data.content} />
      </div>
      <Image
        className="absolute opacity-50 -z-10 -bottom-0 md:left-[-30vw] -left-60"
        src="/backdrop.png"
        alt="backDrop"
        width={800}
        height={657}
        priority
      />
    </div>
  );
};

export default PrivacyPolicy;
