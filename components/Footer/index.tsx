import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#050404] p-3 flex items-center space-x-3">
            <Image
                src={"/ig.png"}
                width={50}
                height={50}
                alt="Instagram"
            />
            <a 
                className="hover:opacity-75 transition-all duration-300"
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.instagram.com/sbhs_cs_academy/"
            >
                @sbhs_cs_academy
            </a>
        </footer>
    )
}

export default Footer; 