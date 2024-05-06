import GalleryStrip from "@/components/Gallery/GalleryStrip";
import { classes } from "@/common/data/gallery.json";
import GalleryContainer from "@/components/Gallery/container";
import fs from "fs/promises";
import path from "path";
import { IPost } from "@/components/Gallery/Post";

interface IClass {
    year: number;
    posts: IPost[];
}

const YearGallery = async ({ params } : { params: { year: string }}) => {
    const data = classes as IClass[];
    const currentClass = data.find((c) => c.year.toString() === params.year);

    currentClass?.posts.forEach(async (post, i) => {
        if (!post.hasOwnProperty("images")) {
            currentClass.posts[i].images = [];
        }

        const postDir = path.join(process.cwd(), `public/gallery/${params.year}/${post.id}`);
        const postImages = await fs.readdir(postDir);

        for (const img of postImages) {
            if (!img.endsWith(".jpg")) continue; 
            currentClass.posts[i].images.push({
                src: `/gallery/${params.year}/${post.id}/${img}`
            });
        }
    });

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
        .map(async ({ year }) => {
            return { params: { year: year.toString() }}
        });
}

export default YearGallery;