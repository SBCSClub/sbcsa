import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface SocialMediaIconProps{
    altText: string
    imageSource: string
    href: string
    color: string;
    trailingText?: string;
}

export default function SocialMediaIcon(props : SocialMediaIconProps){
    return (
        <div className="flex justify-center items-center space-x-3">
            <div className={clsx("p-1 bg-slate-800 transition-colors duration-150 rounded-md", `hover:bg-[${props.color}]`)}>
                <a target="_blank" rel="noreferrer noopener" href={props.href}
                    >
                    <Image
                        src={props.imageSource}
                        width={50}
                        height={50}
                        alt={props.altText}
                    />
                </a>
            </div>
            <p className={clsx("h-fit", `hover:text-[${props.color}]`)}>{props.trailingText}</p>
        </div>
        
    )
}