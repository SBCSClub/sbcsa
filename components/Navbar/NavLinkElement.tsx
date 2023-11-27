"use client"
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation';

interface NavLinkElementProps{
    children: ReactNode
    href: string
}

export default function NavLinkElement(props : NavLinkElementProps){
    const currentPath = usePathname();
    return (
        <li>
            <Link href={props.href} className={"hover:text-[#D6A756] " + ((currentPath ==props.href) ? "font-semibold" : "")}>
            {props.children}
            </Link>
        </li>
    )
}