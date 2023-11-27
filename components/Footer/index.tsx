import React from "react";
import Image from "next/image";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () => {
    return (
        <footer className="bg-[#050404] p-3 flex items-center space-x-3">
            <SocialMediaIcon trailingText="@hello" color={"#f1437c"} altText={"Instagram"} imageSource={"/instagramlogo.svg"} href={"https://www.instagram.com/sbhs_cs_academy/"}/>
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