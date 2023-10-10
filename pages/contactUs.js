import React from "react";
import Image from "next/image";
// import "./contact.css";
import { sanityClient } from "../components/lib/sanity";
import CustomSelect from "../components/contactUs/customDropDown";

export async function getStaticProps() {
  // Fetch data from Sanity using the client
  const query = `*[_type == 'contactUs'][0] {
        title,
      contactSection {
        description1,
        description2,
        mailTitle,
        mailId,
        phoneTitle,
        phoneNumber[],
      },
      addressSection{
        title,
        addressTitle,
        address,
        locationTitle,
        description{
          descriptionTitle,
          link,
        },
      },
    }`;
  const sanityData = await sanityClient.fetch(query);
  console.log("XXX", sanityData);
  return {
    props: {
      data: sanityData,
    },
  };
}

function ContactUs({ data }) {
  return (
    <main className="flex min-h-screen flex-col items-center md:p-10 p-5 text-white overflow-x-hidden">
      <div className="flex flex-col w-full">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center md:px-16 md:pb-10 md:gap-10">
          <div className="flex flex-col md:basis-1/2">
            <div className="text-base h-5 w-52 md:h-6 md:w-60 md:text-xl text-cyan-400">
              {data.title}
            </div>
            <div className="text-3xl md:text-6xl  pt-2.5 md:pt-5">
              {data.contactSection.description1.toUpperCase()}
            </div>
            <div className="text:lg md:text-xl pt-7 md:pt-14">
              {data.contactSection.description2}
            </div>
            <div className="hidden md:block">
              <div className="text-slate-500 pt-14 text-lg">
                {data.contactSection.mailTitle}
              </div>
              <a href="#" className="pt-3 underline">
                {data.contactSection.mailId}
              </a>
              <div className="text-slate-500 pt-12 text-lg">
                {data.contactSection.phoneTitle}
              </div>
              <div className="flex gap-2">
                {data.contactSection.phoneNumber.map((index) => (
                  <div key={index} className="pt-3 underline">
                    {index}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <form
            action="https://getform.io/f/959dedd3-fc8c-4cb3-b6e0-69b2401024a7"
            method="POST"
            className="flex md:basis-1/2 w-full flex-col "
          >
            <div className="flex gap-5 flex-col md:flex-row">
              <div className="basis-1/2 flex flex-col pt-14 md:pt-0">
                <div className="pb-2 text-sm">First Name</div>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="bg-slate-900 h-14 md:w-72 w-full md:h-14 pl-4 rounded-md outline-0 focus:outline-1 focus:outline-blue-950"
                  name="FirstName"
                  // value={formData.firstName}
                  // onChange={handleInputChange}
                />
              </div>
              <div className="basis-1/2 flex flex-col pt-8 md:pt-0">
                <div className="pb-2 text-sm">Last Name</div>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="text-sm bg-slate-900 w-full h-14 md:w-72 md:h-14 pl-4 rounded-md outline-0 focus:outline-1 focus:outline-blue-950"
                  name="LastName"
                  // value={formData.lastName}
                  // onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="basis-1/2 flex flex-col pt-8 md:pt-5">
                <div className="pb-2 text-sm">Email address</div>
                <input
                  type="email"
                  placeholder="Enter Email address"
                  className="text-sm bg-slate-900 w-full h-14 md:w-72 md:h-14 pl-4 rounded-md outline-0 focus:outline-1 focus:outline-blue-950"
                  name="Email"
                  // value={formData.email}
                  // onChange={handleInputChange}
                />
              </div>
              <div className="basis-1/2 flex flex-col pt-8 md:pt-5">
                <div className="pb-2 text-sm">Phone number</div>
                <input
                  type="tel"
                  placeholder="Enter Phone number"
                  className="text-sm bg-slate-900 w-full h-14 md:w-72 md:h-14 pl-4 rounded-md outline-0 focus:outline-1 focus:outline-blue-950"
                  name="PhoneNumber"
                  // value={formData.phoneNumber}
                  // onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col pt-8 md:pt-5">
              <div className="text-sm pb-2">Service</div>
              <CustomSelect
                name="SelectedService"
                options={[
                  {
                    label: "Corporate Film Production",
                    value: "Corporate Film Production",
                  },
                  { label: "Branding", value: "Branding" },
                  { label: "Photography", value: "Photography" },
                  { label: "Advertising", value: "Advertising" },
                  {
                    label: "Digital Media Marketing",
                    value: "Digital Media Marketing",
                  },
                ]}
              />
              {/* <select
                className="w-full h-14 md:h-14 md:w-[620px] bg-slate-900 pl-4 rounded-md outline-0 focus:outline-1 focus:outline-blue-950"
                name="SelectedService"
                // value={formData.selectedService}
                // onChange={handleInputChange}
              >
                <option className="option-style">
                  Corporate Film Production
                </option>
                <option className="option-style">Branding</option>
                <option className="option-style">Photography</option>
                <option className="option-style">Advertising</option>
                <option className="option-style">
                  Digital Media Marketing
                </option>
              </select> */}
            </div>
            <div className="flex flex-col pt-8 md:pt-5 pb-8 md:pb-12">
              <div className="text-sm pb-2">Message</div>
              <textarea
                placeholder="Type here..."
                className="bg-slate-900 w-full h-36 md:h-36 rounded-md outline-0 p-4 focus:outline-1 focus:outline-blue-950"
                style={{ resize: "none" }}
                name="Message"
                // value={formData.message}
                // onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="inline-block md:bg-blue-800 bg-transparent lg:border-none border  lg:w-40 w-full h-14 rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="block md:hidden">
          <div className="text-slate-500 pt-14 text-lg">
            {data.contactSection.mailTitle}
          </div>
          <a href="#" className="pt-3 underline">
            {data.contactSection.mailId}
          </a>
          <div className="text-slate-500 pt-12 text-lg">
            {data.contactSection.phoneTitle}
          </div>
          <div className="flex gap-2">
            {data.contactSection.phoneNumber.map((index) => (
              <div key={index} className="pt-3 underline">
                {index}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full py-20">
          <div className="  basis-1/2">
            <Image
              alt="image"
              src="./Globe.svg"
              className="hidden md:block md:pl-36"
              width={544}
              quality={100}
              height={541}
            />
          </div>
          <div className="flex basis-1/2 flex-col md:pt-20 md:ml-10">
            <div className="text-4xl pb-8">
              {data.addressSection.title.toUpperCase()}
            </div>
            <div className="md:w-1/2 w-3/4">
              <div className="text-slate-600 pb-4">
                {data.addressSection.addressTitle}
              </div>
              {data.addressSection.address}
            </div>
            <div className="pt-12">
              <div className="text-slate-600 pb-2">
                {data.addressSection.locationTitle}
              </div>
              <a
                href={data.addressSection.description.link}
                className="hover:text-white underline"
              >
                {data.addressSection.description.descriptionTitle}
              </a>
            </div>
          </div>
        </div>
        <Image
          className="absolute h-[500px] top-[800px] left-[-350px] opacity-50"
          src="/backdrop.png"
          alt="backdrop"
          width={700}
          height={600}
          priority
        />
      </div>
    </main>
  );
}

export default ContactUs;
