// pages/services/[slug].js
import { useRouter } from "next/router";
import { sanityClient } from "../../components/lib/sanity";
import TabContainer from "../../components/slug/TabContainer";

const ServicePage = ({ data, params }) => {
  const router = useRouter();
  if (router.isFallback) {
    // Optional: Show a loading indicator
    return <div>Loading...</div>;
  }

  return (
    <div className="md:p-20 p-3 pt-6">
      <h2 className="md:text-5xl text-3xl font-primary text-white">
        {data?.title}
      </h2>
      <TabContainer data={data} params={params} />
    </div>
  );
};

export default ServicePage;

// This function will generate the paths for all services
export async function getStaticPaths() {
  // Fetch a list of service slugs (e.g., service titles or IDs) from Sanity
  const serviceSlugs = await fetchServiceSlugs(); // Implement this function
  // Generate paths based on the service slugs
  const paths = serviceSlugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true, // Set to true if you want to support dynamically generated pages
  };
}

// This function will fetch data for a specific service
export async function getStaticProps({ params }) {
  // Fetch service data for the given slug from Sanity
  const serviceData = await fetchServiceData(params.slug); // Implement this function

  return {
    props: {
      data: serviceData,
      params,
    },
    revalidate: 1, // Optional: Set revalidation interval in seconds
  };
}

// Define and export the fetchServiceSlugs function
export async function fetchServiceSlugs() {
  // Query Sanity to fetch the slugs of services
  const query = `*[_type == 'selectedService'] {
         'slug': slug.current
      }`;

  const slugsData = await sanityClient.fetch(query);
  const slugs = slugsData.map((data) => data.slug);
  return slugs;
}

// Define and export the fetchServiceData function
export async function fetchServiceData(slug) {
  console.log(slug,"slug")
  // Query Sanity to fetch data for the specific selectedService using the slug
  const query = `*[_type == 'selectedService' && slug.current == $slug][0] {
           _id,
            title,
            tabMenus[] {
                id,
                title,
            },
            tabItems[] {
                name,
                "image":image.asset->url,
                category,
                imageMode,
            type,
            url,
        }
    }`;

  const params = { slug }; // Define the parameters for the query
  const serviceData = await sanityClient.fetch(query, params);
  console.log(serviceData)
  return serviceData;
}
