import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const faqs = [
  {
    question: "Are these official Diploma and Degree of IIT Madras?",
    answer:
      "Yes. IITM senate approves and offers the Diploma(s) and Degree(s). Degree holders become alumni of IIT Madras.",
  },
  {
    question: "What is the qualifier process?",
    answer: (
      <>
        All applicants will have to go through a Qualifier Process, like a trial
        month, wherein they will get access to 4 weeks of content for the four
        foundational level courses - English I, Mathematics for Data Science I,
        Statistics for Data Science I and Computational Thinking. Check
        <a href="#"> Qualifier Process</a> in Admissions page
      </>
    ),
  },
  {
    question: "What is the language of instruction for these courses?",
    answer:
      "All our program courses are taught in English. Hence, we expect a minimum proficiency in English language to participate in the program.",
  },
  {
    question:
      "Does this course cover the basics of coding before progressing to advanced levels?",
    answer:
      "It is not necessary to have a prior knowledge of coding to learn from our program. Our program is structured in such a way that once a learner starts from the Foundational level and progresses towards the Degree level, in sequence, he / she will obtain sufficient proficiency in Programming and Data Science.",
  },
  {
    question: "What is the Fee structure?",
    answer: (
      <>
        The overall program fees will not be paid at one stretch. The actual
        fees you will be paying in each term will be in proportion to the number
        of courses you register for in the respective term. So, if you register
        for 2 courses in a term, you have to pay the fees only for those 2
        courses. For more details, please refer to <a href="#">Fee Structure</a>{" "}
        in Academics Page.
      </>
    ),
  },
  {
    question:
      "How / where do I ask questions or doubts related to the course content of the program?",
    answer: (
      <>
        Each course page will have a discussion forum where learners can raise
        their course-related questions and interact with the course instructor
        or course support team. For all questions not related to the course, you
        may write to{" "}
        <a href="mailto:support@onlinedegree.iitm.ac.in">
          support@onlinedegree.iitm.ac.in
        </a>
        .
      </>
    ),
  },
];

type Props = object;

export default function FAQs({}: Props) {
  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto my-12 mt-24 px-4 sm:px-8",
        "flex flex-col items-center"
      )}
    >
      <h2
        className={cn(
          "inline-block relative mt-8 mb-4",
          "text-4xl font-bold text-center text-foreground"
          // "after:absolute after:w-1/2 after:h-1 after:bg-secondary-foreground after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full"
        )}
      >
        Frequently Asked <span className="text-secondary-foreground">Questions</span>
      </h2>

      <p className="text-lg text-center text-muted-foreground mb-8">
        Have a question? Check out our FAQ section below.
      </p>

      <Accordion
        type="single"
        collapsible
        className={cn("w-full max-w-5xl mx-auto mt-8")}
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            value={`faq-${index}`}
            key={index}
            className={cn(
              "bg-selection/30 rounded-lg shadow-lg mb-4 border-b-0"
            )}
          >
            <AccordionTrigger
              className={cn(
                "px-8 py-4",
                "text-lg md:text-xl font-medium text-foreground hover:no-underline"
              )}
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "px-8 pb-4",
                "text-base text-muted-foreground",
                "[&_a]:text-secondary-foreground"
              )}
            >
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Link href="/faqs">
        <Button variant="secondary" size="lg" className="mt-4 text-lg bg-selection/70">
          View all FAQs
        </Button>
      </Link>
    </div>
  );
}
