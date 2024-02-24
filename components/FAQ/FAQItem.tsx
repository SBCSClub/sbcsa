import { FAQItem } from "@/common/interfaces/faq";
import { useEffect, useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import MarkDownDiv from "../Markdown/MarkDownDiv";

export default function FAQItem({ item }: { item: FAQItem }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isAnswerVisible ? `${contentRef.current.scrollHeight}px` : "0";
    }
  }, [isAnswerVisible]);

  return (
    <div className="w-full">
      <div onClick={toggleAnswerVisibility} className="flex justify-between cursor-pointer">
        <h3 className="text-2xl font-medium">{item.question}</h3>
        <button className="relative w-6 h-6">
          <FaPlus className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isAnswerVisible ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"}`} />
          <FaMinus className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isAnswerVisible ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`} />
        </button>
      </div>

      <div ref={contentRef} className={`transition-all duration-500 ease-in-out overflow-hidden`} style={{ maxHeight: "0" }}>
        <div className="py-3">{typeof item.answer === "string" ? item.answer : <MarkDownDiv blocks={item.answer} />}</div>
      </div>
      <div className="w-full h-[1px] bg-white my-3"></div>
    </div>
  );
}
