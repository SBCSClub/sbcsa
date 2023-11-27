import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                <li>
                    <Link href={"/events"}>
                        Events
                    </Link>
                </li>
                <li>
                    <Link href={"/classes"}>
                        Classes
                    </Link>
                </li>
                <li>
                    <Link href={"/resources"}>
                        Resources
                    </Link>
                </li>
                <li>
                    <Link href={"/projects"}>
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;