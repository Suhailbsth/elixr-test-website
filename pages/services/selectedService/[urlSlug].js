import RelatedWorks from "@/components/urlSlug/RelatedWorks";
import { sanityClient } from "@/components/lib/sanity";
import Image from "next/image";
import React from "react";
import { ImageGallery } from "@/components/urlSlug/ImageGallery";
import Link from "next/link";

export async function getStaticProps({ params }) {
  // Fetch service data for the given slug from Sanity
  const serviceData = await fetchServiceData(params.urlSlug); // Implement this function
  let relatedData = null;
  if (serviceData && serviceData.serviceSlug)
    relatedData = await fetchRelatedData(serviceData.serviceSlug);
  return {
    props: {
      data: serviceData,
      relatedData,
    },
    revalidate: 1, // Optional: Set revalidation interval in seconds
  };
}

// // Define and export the fetchServiceSlugs function
export async function fetchServiceSlugs() {
  const query = `*[_type == 'selectedUrlItem'] {
           'slug': slug.current
        }`;

  const slugsData = await sanityClient.fetch(query);
  const slugs = slugsData.map((data) => data.slug);
  return slugs;
}

export async function getStaticPaths() {
  const serviceSlugs = await fetchServiceSlugs(); // Implement this function
  const paths = serviceSlugs
    .filter((x) => x !== null)
    .map((urlSlug) => ({
      params: { urlSlug },
    }));

  console.log(paths, "paths");
  return {
    paths,
    fallback: true, // Set to true if you want to support dynamically generated pages
  };
}

export async function fetchRelatedData(slug) {
  // Query Sanity to fetch data for the specific selectedService using the slug
  if (slug) {
    const query = `*[_type == "selectedService" && slug.current == $slug][0]{
        tabItems[] {
          name,
          "image":image.asset->url,
          category,
          type,
          url,
          }
        }`;
    const params = { slug }; // Define the parameters for the query
    const data = await sanityClient.fetch(query, params);
    return data;
  }
  return null;
}
// Define and export the fetchServiceData function
export async function fetchServiceData(urlSlug) {
  // Query Sanity to fetch data for the specific selectedService using the slug
  const query = `*[_type == "selectedUrlItem" && slug.current == $slug][0]{
    urlTitle,
    title,
    service,
    slug,
    serviceSlug,
    itemDetails {
      category,
      client,
      handOver,
      description,
    },
    images[]{
      "src":imageUrl.asset->url,
      type,
      "url":videoUrl
    }  
  }`;

  const params = { slug: urlSlug }; // Define the parameters for the query
  const serviceData = await sanityClient.fetch(query, params);
  return serviceData;
}

function urlSlugPage({ data, relatedData }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = data && new Date(data.itemDetails.handOver);
  const formattedDate =
    date &&
    `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    console.log(relatedData,"relatedData")
  return (
    data && (
      <div className="md:px-20 px-3 font-primary">
        <h5 className="text-xs text-zinc-500 mt-5">
          <Link
            href={`/services`}
            className="hover:underline hover:text-blue-500"
          >
            Our Works
          </Link>
          &nbsp;/
          <Link
            href={`/services/${data.serviceSlug}`}
            className="hover:underline hover:text-blue-500"
          >
            &nbsp;{data?.service}
          </Link>
          &nbsp;/
          <span className="text-white">&nbsp;&nbsp;&nbsp;{data.urlTitle}</span>
        </h5>
        <div className="flex md:flex-row flex-col h-fit md:mt-20 mt-5 md:mb-16 mb-10 gap-6 md:gap-0">
          <div
            className="md:w-1/2 w-full flex text-4xl text-white "
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <div className="md:w-1/2 w-full flex flex-col gap-6 text-white">
            <div className="flex md:flex-row flex-col w-full md:gap-20 gap-3">
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500">Category</span>
                <span className="font-medium">{data.itemDetails.category}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500">Client</span>
                <span className="font-medium">{data.itemDetails.client}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-zinc-500">Hand Over</span>
                <span className="font-medium">{formattedDate}</span>
              </div>
            </div>
            <div className="w-full">{data.itemDetails.description}</div>
          </div>
        </div>
        <div className="mx-auto mb-10">
          {data.images && data.images.length > 0 && (
            <ImageGallery images={data.images} />
          )}
        </div>
        {/* <div className="flex flex-wrap gap-5 mb-10">
          {data.images &&
            data.images.length > 0 &&
            data.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={320}
                height={317}
                quality={100}
                alt={`Image ${index}`}
                className={`object-cover w-auto 
                $//{
                //   index === 0 || index === 3 ? "md:col-span-2" : "col-span-1"
                // }
                `}
              />
            ))}
        </div> */}
        <div className="mb-10 flex flex-col text-white">
          <h3 className="text-xl text-center md:text-left font-medium">
            Related {data.itemDetails.category} works
          </h3>
          {relatedData && (
            <RelatedWorks
              data={relatedData.tabItems.filter((x) => x.url !== data.slug.current)}
            />
          )}
        </div>
      </div>
    )
  );
}

export default urlSlugPage;
