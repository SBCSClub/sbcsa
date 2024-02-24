import { MarkDownBlock } from "./markdown";

export interface FAQSection{
    title: string,
    items: FAQItem[],
}

export interface FAQItem{
    question: string,
    answer: string | MarkDownBlock[],
}