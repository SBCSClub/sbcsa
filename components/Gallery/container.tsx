"use client";

import { EmblaOptionsType } from "embla-carousel";
import React, { useMemo, useState } from "react";
import Modal from "../Modal";
import { IPost } from "./Post";
import GalleryCarousel from "./carousel";
import Image from "next/image";
import PostGallery from "./PostGallery";

const OPTIONS: EmblaOptionsType = { loop: true }

interface IGalleryContainerProps {
    slides: IPost[];
}

const GalleryContainer : React.FC<IGalleryContainerProps> = ({ slides }) => {
    const [ expandedSlideMeta, setExpandedSlideMeta ] = useState<{ show: boolean, id?: number }>({ show: false });

    const selectedSlide = useMemo(() => (
        slides.find((slide) => slide.id === expandedSlideMeta.id)
    ), [ slides, expandedSlideMeta ]);

    return (
        <>
            <Modal 
                open={expandedSlideMeta.show} 
                fullWidth={true}
                setOpen={(_e) => setExpandedSlideMeta({ ...expandedSlideMeta, show: false }) } 
            >
                <div className="relative bg-black w-full h-[calc(100vh-100px)] md:h-[450px] flex justify-center gap-5 md:flex-row flex-col">
                    <div className="relative h-full md:flex-1">
                        <PostGallery
                            slides={selectedSlide?.images || []}
                        />
                    </div>
                    <article className="md:flex-1">
                        <h1 className="font-semibold">{selectedSlide?.location}</h1>
                        <h2 className="text-[rgba(255,255,255,0.75)]">{selectedSlide?.date}</h2>
                        <p className="mt-3">
                            { selectedSlide?.description }
                        </p>
                    </article>
                </div>    
            </Modal>
            <div className="mt-36">
                <GalleryCarousel 
                    slides={slides} 
                    options={OPTIONS} 
                    onSlideClick={(id) => setExpandedSlideMeta({ id: id, show: true })}
                />
            </div>
        </>
    )
}

export default GalleryContainer;