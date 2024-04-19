import { EmblaOptionsType } from "embla-carousel";
import GalleryCarousel from "../../../components/Gallery/carousel";
import GalleryStrip from "@/components/Gallery/GalleryStrip";
import { classes } from "@/common/data/gallery.json";

const OPTIONS: EmblaOptionsType = { loop: true }

const YearGallery = ({ params } : { params: { year: string }}) => {
    const currentClass = classes.find((c) => c.year.toString() === params.year);

    return (
        <div className="h-screen w-screen relative">
            <GalleryStrip className="mt-4 absolute top-12" />
            <div className="mt-36">
                <GalleryCarousel slides={currentClass?.posts || []} options={OPTIONS} />
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return classes
        .filter((c) => c.posts.length > 0)
        .map((c => ({ year: c.year.toString() })));
}

export default YearGallery;