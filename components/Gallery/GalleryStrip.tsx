"use client";

import styled from "styled-components";

const StripDiv = styled.div`
    height: 45px; 
    width: 100%;
    background-color: #FEC31E;
    background-image: url("/gallery-strip-text.png");
    background-position: 0% 50%;
    background-size: 95px; 
    background-repeat: repeat-x;
`;

interface IGalleryStripProps extends React.HTMLAttributes<HTMLDivElement> {
}

const GalleryStrip : React.FC<IGalleryStripProps> = ({ ...props }) => {
    return (
        <StripDiv { ...props }></StripDiv>
    )
}   

export default GalleryStrip;