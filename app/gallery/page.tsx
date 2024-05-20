import GalleryStrip from "@/components/Gallery/GalleryStrip";
import Folder from "@/components/Gallery/Folder";

import { classes } from "@/common/data/gallery.json";

const Gallery = () => {
    const currentClasses = classes.filter((c) => c.posts.length > 0);
    const futureClasses = classes.filter((c) => c.posts.length === 0);

    return (
        <div className="min-h-screen w-screen relative pb-10">
            <GalleryStrip className="mt-4 absolute top-12" />
            <div className="mt-40 px-12 flex gap-12 flex-wrap">
                {
                    currentClasses.map((c) => (
                        <Folder 
                            key={c.year}
                            year={c.year}
                            hasPhotos={true}
                        />
                    ))
                }
            </div>
            <div className="mt-12 px-12 flex gap-12 flex-wrap">
                {
                    futureClasses.map((c) => (
                        <Folder 
                            key={c.year}
                            year={c.year}
                            hasPhotos={false}
                        />
                    ))
                }
            </div>
            {/* <GalleryStrip className="!w-[200vw] mt-4 absolute top-96 left-28 -translate-x-14 -rotate-[25deg]" /> */}
        </div>
    )

}

export default Gallery;