import Footer from "./Footer";
import NavBar from "./navBar";

export const metadata = {
  title: "Elixr Studios: Leading Digital Marketing Agency in Trivandrum",
  description:
    "Elixr Studios: Your premier Digital Marketing and Branding Agency specializing in VFX, Photography, and SEO. Elevate your presence with our expert services.",
};

export default function Layout({ children, data }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer data={data} />
    </>
  );
}
