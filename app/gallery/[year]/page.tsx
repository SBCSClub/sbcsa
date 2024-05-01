import GalleryStrip from "@/components/Gallery/GalleryStrip";
import { classes } from "@/common/data/gallery.json";
import GalleryContainer from "@/components/Gallery/container";

const YearGallery = ({ params } : { params: { year: string }}) => {
    const currentClass = classes.find((c) => c.year.toString() === params.year);

    return (
        <div className="h-screen w-screen relative">
            <GalleryStrip className="mt-4 absolute top-12" />
            <GalleryContainer 
                slides={currentClass?.posts || []}
            />
        </div>
    )
}

export async function generateStaticParams() {
    return classes
        .filter((c) => c.posts.length > 0)
        .map((c => ({ year: c.year.toString() })));
}

export default YearGallery;