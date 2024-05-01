"use client";

import { EmblaOptionsType } from "embla-carousel";
import React, { useMemo, useState } from "react";
import Modal from "../Modal";
import { IPost } from "./Post";
import GalleryCarousel from "./carousel";
import Image from "next/image";

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
                <div className="relative bg-black w-full h-[450px] flex justify-center gap-5">
                    <div className="relative h-full w-full flex-1">
                        <Image
                            src={selectedSlide?.images[0].src || ""}
                            alt={selectedSlide?.location || ""}
                            layout="fill"
                            className="object-top"
                            objectFit="contain"
                        />
                    </div>
                    <article className="flex-1">
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