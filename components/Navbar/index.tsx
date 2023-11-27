import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinkElement from "./NavLinkElement";

const Navbar = () => {
    return (
        <nav 
            style={{ 
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)"
            }}
            className="py-3 px-3 md:px-9 fixed top-0 left-0 right-0 flex justify-between items-center z-50">
            <Link href={"/"}>
                <Image
                    src={"/logo.png"}
                    width={50}
                    height={50}
                    alt="CS Academy Logo"
                />
            </Link>
            
            <ul className="flex space-x-4 md:space-x-7">
                <NavLinkElement href="/events">Events</NavLinkElement>
                <NavLinkElement href="/classes">Classes</NavLinkElement>
                <NavLinkElement href="/resources">Resources</NavLinkElement>
                <NavLinkElement href="/projects">Projects</NavLinkElement>
            </ul>
        </nav>
    )
}

export default Navbar;