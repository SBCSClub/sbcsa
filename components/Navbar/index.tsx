import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinkElement from "./NavLinkElement";

const Navbar = () => {
  return (
    <nav
      style={
        {
          // backdropFilter: "blur(10px)",
          // WebkitBackdropFilter: "blur(10px)"
        }
      }
      className="py-3 bg-black px-3 md:px-9 fixed top-0 left-0 right-0 flex justify-center items-center z-50"
    >
      {/* <Link href={"/"}>
                <Image
                    src={"/logo.png"}
                    width={50}
                    height={50}
                    alt="CS Academy Logo"
                />
            </Link> */}

      <ul className="flex space-x-5">
        <NavLinkElement href="/" title="Home"></NavLinkElement>
        <NavLinkElement href="/courses" title="courses"></NavLinkElement>
        <NavLinkElement href="/projects" title="projects"></NavLinkElement>
        <NavLinkElement href="/trips" title="trips"></NavLinkElement>
        <NavLinkElement href="/faq" title="faq"></NavLinkElement>

        {/* TODO: Replace with nav button */}
        <NavLinkElement href="https://docs.google.com/document/d/1qrq504NNbUvJ0f42lQehynbf83H611cQjeTQmuMBv2o/edit#bookmark=id.29fj8xypyizl" title="apply" last></NavLinkElement>
      </ul>
    </nav>
  );
};

export default Navbar;
