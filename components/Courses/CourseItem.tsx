import { Course } from "@/common/interfaces/course";
import Image from "next/image";

interface CourseItemProps {
  courseInfo: Course;
}

export default function CourseItem({ courseInfo }: CourseItemProps) {
  return (
    <div className={`relative w-full px-[10%] flex justify-center`}>
      <div className="absolute top-1/2 left-[10%] transform -translate-x-1/2 -translate-y-1/2 bg-[#558C8C] rounded-full w-10 h-10"></div>
      <div className="absolute top-1/2 left-[10%] transform -translate-x-1/2 -translate-y-1/2 rounded-full text-2xl font-bold block">{courseInfo.grade}</div>
      <div className="bg-[#272626] text-white outline outline-1 gap-5 items-center outline-white flex flex-row w-10/12 px-5 py-5 rounded-xl">
        {courseInfo.image_path && (
          <div className="flex-shrink-0 hidden md:block">
            <Image src={courseInfo.image_path} alt={""} width={150} height={150} quality={50} className={"rounded-md"} />
          </div>
        )}
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-extrabold">{courseInfo.name}</h1>
          <p className="font-normal">{courseInfo.description}</p>
          <div className="flex justify-between font-bold">
            {courseInfo.grade}th Grade • {courseInfo.weighting} Weighting • {courseInfo.credits} Credits
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">Prerequisites:</h3>
            <ul className="list-inside list-disc">
              {courseInfo.prereqs?.map((item, index) => (
                <li key={index} className={"text-white "}>
                  <span className="font-semibold">{item.class}</span>
                  <span className="font-normal"> - {item.grade}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2 justify-start items-center">
            {courseInfo.tags?.map((item, index) => (
              <div key={index} className={"rounded-lg px-2 py-[2px] text-white bg-[#558C8C]"}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
