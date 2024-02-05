import courses from "@/common/data/courses.json";
import { Course } from "@/common/interfaces/course";
import CourseItem from "@/components/Courses/CourseItem";
import styles from "./courses.module.css";

export default function Courses() {
  // load in data from courses.json
  const pre: Course[] = courses["pre"];
  const during: Course[] = courses["during"];

  return (
    <>
      <div id="title">
        <h1 className="text-9xl w-full justify-center text-center my-7">Courses</h1>
      </div>

      <div className={`${styles.courses} flex flex-col w-full gap-16`} id="courses">
        {pre.map((item, index) => (
          <CourseItem key={index} courseInfo={item} />
        ))}

        <hr className={`${styles.border} my-3`}></hr>

        {during.map((item, index) => (
          <CourseItem key={index} courseInfo={item} />
        ))}
      </div>
    </>
  );
}
