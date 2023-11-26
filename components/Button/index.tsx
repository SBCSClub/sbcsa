import clsx from "clsx";
import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    highlightColor?: string;
}

const Button : React.FC<ButtonProps> = ({ highlightColor = "#fff", children }) => {
    return (
        <button 
            style={{ borderColor: highlightColor }}
            className={clsx(
            "py-2 px-5 mt-5 bg-[#1F1E1F] border-solid border-b-2 border-x-[1px] hover:opacity-75 transition-all duration-300",
            `text-[${highlightColor}]`
        )}>
            { children }
        </button>
    )
}

export default Button; 