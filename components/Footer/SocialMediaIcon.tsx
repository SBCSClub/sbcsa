"use client"
import React from "react";
import { FaInstagram } from "react-icons/fa";

interface SocialMediaIconProps{
    altText: string
    href: string,
    children:  React.ReactNode
}

export default function SocialMediaIcon({ children, href, altText } : SocialMediaIconProps){
    return (
        <div className="flex justify-center items-center space-x-3">
            <a target="_blank" rel="noreferrer noopener" title={altText} href={href}>
                { children }
            </a>
        </div>
        
    )
}