"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

const NavItems = [
  {
    title: "Academics ",
    link: "",
    children: [
      {
        title: "Overall Structure",
        link: "https://study.iitm.ac.in/ds/academics.html#AC1",
      },
      {
        title: "Term Structure",
        link: "https://study.iitm.ac.in/ds/academics.html#AC2",
      },
      {
        title: "Course Registrations",
        link: "https://study.iitm.ac.in/ds/academics.html#AC3",
      },
      {
        title: "Assessments",
        link: "https://study.iitm.ac.in/ds/academics.html#AC4",
      },
      {
        title: "hr",
      },
      {
        title: "Exam Cities",
        link: "https://study.iitm.ac.in/ds/academics.html#AC9",
      },
      {
        title: "hr",
      },
      {
        title: "Fee Structure",
        link: "https://study.iitm.ac.in/ds/academics.html#AC10",
      },
      {
        title: "hr",
      },
      {
        title: "Foundation Level",
        link: "https://study.iitm.ac.in/ds/academics.html#AC11",
      },
      {
        title: "Diploma Level",
        link: "https://study.iitm.ac.in/ds/academics.html#AC12",
      },
      {
        title: "BSc Degree Level",
        link: "https://study.iitm.ac.in/ds/academics.html#AC15",
      },
      {
        title: "BS Degree Level",
        link: "https://study.iitm.ac.in/ds/academics.html#AC16",
      },
      {
        title: "hr",
      },
      {
        title: "Sample Certificates",
        link: "https://study.iitm.ac.in/ds/academics.html#AC17",
      },
      {
        title: "hr",
      },
      {
        title: "Academic Calendar",
        link: "https://study.iitm.ac.in/ds/academic_calendar.html",
      },
    ],
  },
  {
    title: "Admissions ",
    link: "",
    children: [
      {
        title: "Important Dates",
        link: "https://study.iitm.ac.in/ds/admissions.html#AD0",
      },
      {
        title: "Mandatory Requirements",
        link: "https://study.iitm.ac.in/ds/admissions.html#AD1",
      },
      {
        title: "hr",
      },
      {
        title: "Eligibility to Apply",
        link: "https://study.iitm.ac.in/ds/admissions.html#AD4",
      },
      {
        title: "Application Process",
        link: "https://study.iitm.ac.in/ds/admissions.html#AD5",
      },
      {
        title: "Admission to the Foundation Level",
        link: "https://study.iitm.ac.in/ds/admissions.html#AD6",
      },
      {
        title: "1. Regular Entry",
        link: "https://study.iitm.ac.in/ds/admissions.html#AD7",
      },
      {
        title: "2. JEE-based Entry",
        link: "https://study.iitm.ac.in/ds/admissions.html#AD8",
      },
      {
        title: "hr",
      },
      {
        title: "International Students",
        link: "https://study.iitm.ac.in/ds/admissions.html#AD9",
      },
    ],
  },
  {
    title: "Resources ",
    link: "",
    children: [
      {
        title: "Help Videos",
        link: "https://study.iitm.ac.in/ds/helpvideos.html",
      },
      {
        title: "hr",
      },
      {
        title: "In the Media",
        link: "https://study.iitm.ac.in/ds/inthemedia.html",
      },
      {
        title: "Archive",
        link: "https://study.iitm.ac.in/ds/archive.html",
      },
    ],
  },
  {
    title: "Student Life ",
    link: "",
    children: [
      {
        title: "Student Houses & Societies",
        link: "https://study.iitm.ac.in/ds/student_life.html",
      },
      {
        title: "PARADOX / Student Festivals",
        link: "https://sites.google.com/ds.study.iitm.ac.in/paradox-23/home",
      },
    ],
  },
  {
    title: "School Connect",
    link: "https://school-connect.study.iitm.ac.in/",
  },
  {
    title: "Achievements ",
    link: "",
    children: [
      {
        title: "Recognition",
      },
      {
        title: "1. Toppers Page",
        link: "https://study.iitm.ac.in/student-achievements/toppers",
      },
      {
        title: "2. Student's Best Projects",
        link: "https://study.iitm.ac.in/student-achievements/projects",
      },
      {
        title: "3. Teaching Assistance",
        link: "https://study.iitm.ac.in/student-achievements/interns",
      },
      {
        title: "4. Alumni",
        link: "https://study.iitm.ac.in/student-achievements/alumni",
      },
      {
        title: "hr",
      },
      {
        title: "Testimonials",
        link: "https://study.iitm.ac.in/ds/testimonials.html",
      },
      {
        title: "hr",
      },
      {
        title: "Research and Publication",
        link: "https://sites.google.com/ds.study.iitm.ac.in/booksandpublications/home",
      },
    ],
  },
  {
    title: "Events",
    link: "https://study.iitm.ac.in/ds/events.html",
  },
  {
    title: "FAQ",
    link: "https://study.iitm.ac.in/ds/faq.html",
  },
  {
    title: "About IITM ",
    link: "",
    children: [
      {
        title: "About IIT Madras",
        link: "https://study.iitm.ac.in/ds/aboutIITM.html",
      },
      {
        title: "Faculty Co-ordinators",
        link: "https://study.iitm.ac.in/ds/aboutIITM.html#FC",
      },
      {
        title: "hr",
      },
      {
        title: "Contact Us",
        link: "https://study.iitm.ac.in/ds/aboutIITM.html#footer",
      },
      {
        title: "hr",
      },
      {
        title: "Merchandise",
        link: "https://podgoodies.iitmadrasonline.in/",
      },
    ],
  },
  {
    title: "Partnerships",
    link: "https://study.iitm.ac.in/ds/partnerships.html",
  },
  {
    title: "Placements",
    link: "https://study.iitm.ac.in/ds/placements/",
  },
];

type Props = object;

export default function NavBar({}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav className={cn("w-full h-20")}>
      <div className={cn("w-full h-full max-w-[100rem] mx-auto px-4")}>
        <div className={cn("flex justify-between items-center w-full h-full")}>
          <div className={cn("flex items-center")}>
            <div className={cn("")}>
              <Link href="https://study.iitm.ac.in/">
                <Logo className={cn("w-auto h-12")} textColor="#ffffff" />
              </Link>
            </div>
          </div>
          <div className={cn("flex items-center gap-5 text-muted-foreground")}>
            {NavItems.map((item, index) => (
              <div key={index} className={cn("flex items-center gap-4")}>
                {item.children ? (
                  <div className={cn("relative group flex items-center gap-2")}>
                    <a
                      className={cn(
                        "hover:text-foreground transition-colors duration-200 cursor-pointer",
                        "whitespace-nowrap",
                        "flex items-center gap-1.5"
                      )}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onMouseLeave={() => setSelectedIndex(-1)}
                    >
                      {item.title}
                      <FaChevronDown className={cn("text-sm")} />
                    </a>
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-4",
                        "transition-all duration-200 ease-in-out",
                        selectedIndex === index
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      )}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onMouseLeave={() => setSelectedIndex(-1)}
                    >
                      <div
                        className={cn(
                          "w-auto min-w-60 bg-muted shadow-lg py-1",
                          "rounded-lg"
                        )}
                      >
                        {item.children.map((child, childIndex) =>
                          child.title === "hr" ? (
                            <hr key={childIndex} className={cn("my-2")} />
                          ) : (
                            <a
                              key={childIndex}
                              href={child.link}
                              className={cn(
                                "block hover:text-foreground transition-colors duration-200",
                                "whitespace-nowrap",
                                "px-4 py-1"
                              )}
                            >
                              {child.title}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className={cn(
                      "hover:text-foreground transition-colors duration-200",
                      "whitespace-nowrap"
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <Link href={"https://study.iitm.ac.in/ds/login.html"}>
              <button className={cn("px-4 py-2 bg-foreground hover:bg-muted-foreground transition-colors duration-300 text-background font-semibold rounded-lg uppercase")}>
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
