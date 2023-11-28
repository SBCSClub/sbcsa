import React from "react";
import Image from "next/image";
import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () => {
    return (
        <footer className="bg-[#050404] p-3 flex items-center space-x-3">
            <SocialMediaIcon trailingText="@sbhs_cs_academy" color={"#f1437c"} altText={"Instagram"} imageSource={"/instagramlogo.svg"} href={"https://www.instagram.com/sbhs_cs_academy/"}/>
        </footer>
    )
}

export default Footer; 