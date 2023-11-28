"use client"
import Image from "next/image";
import React from "react";
import styled from "styled-components"

const HoverDiv = styled.div`
    &:hover {
        background-color: ${props => props.color}
    }
`

const HoverText = styled.div`
    &:hover {
        color: ${props => props.color}
    }
`

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
            <a target="_blank" rel="noreferrer noopener" href={props.href}>
                <HoverDiv color={props.color} className={"group p-1 bg-gray-900 rounded-lg"}
                >
                        <Image
                            src={props.imageSource}
                            width={50}
                            height={50}
                            alt={props.altText}
                            className="group-hover:brightness-0 group-hover:invert"
                        />
                
                </HoverDiv>
            </a>
            <a target="_blank" rel="noreferrer noopener" href={props.href}>
                <HoverText color={props.color} className={"h-fit"}>{props.trailingText}</HoverText>
            </a>
        </div>
        
    )
}