import "@/styles/globals.css";
import Layout from "../components/Layout";
import { sanityClient } from "../components/lib/sanity";


export default function App({ Component, pageProps, data }) {
  return (
    <Layout data={data}>
      <Component {...pageProps} />
    </Layout>
  );
}

App.getInitialProps = async () => {
  // Fetch data from Sanity using the client
  const query = `*[_type == "footer"][0]{
    contactEmail,
    phoneNumbers,
    'links': links[]{ // Use single quotes to access the 'links' field
        'icon': icon.asset->url,
        name,
      link
    },
    quickLinks,
    privacy,
    terms,
    designedByText
}`;
  const data = await sanityClient.fetch(query);
  return { data: data };
};
