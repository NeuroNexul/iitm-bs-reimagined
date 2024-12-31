import PageWrapper from "@/components/extras/page-wrapper";
import { AnimatedButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TrophyIcon } from "lucide-react";
import Image from "next/image";
import { FaPeopleGroup, FaQuoteRight } from "react-icons/fa6";
import { LuLaptop } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";
import FAQs from "./faqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IITM BS in Data Science & Applications",
  description:
    "A unique 4-year degree program by IIT Madras, India's top technical institute",
};

export default function DSPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <div
        className={cn(
          "w-full max-w-[90rem] mx-auto",
          "py-12 lg:py-24 px-4 sm:px-8"
        )}
      >
        <div className={cn("flex flex-col lg:flex-row items-center gap-12")}>
          {/* Left */}
          <div className={cn("flex-1 flex flex-col items-start justify-start")}>
            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl font-bold !leading-[1.25]",
                "text-foreground"
              )}
            >
              BS in{" "}
              <span className="text-secondary-foreground">Data Science</span>
              <br />
              and Applications
            </h1>
            <p
              className={cn(
                "text-lg sm:text-xl lg:text-2xl",
                "text-muted-foreground"
              )}
            >
              A unique 4-year degree program by IIT Madras, India&apos;s top
              technical institute
            </p>

            {/* Apply Now */}
            <div className={cn("flex flex-col mt-12 gap-4")}>
              <div className="flex flex-row items-center gap-4">
                <AnimatedButton
                  className={cn(
                    "bg-orange-600/70 bg-blend-screen hover:bg-orange-800/90",
                    "text-foreground hover:text-foreground transition-all duration-300",
                    "font-medium tracking-wide"
                  )}
                  size="lg"
                >
                  Apply Now
                </AnimatedButton>

                <AnimatedButton
                  variant="ghost"
                  className={cn(
                    "text-foreground transition-all duration-300",
                    "font-medium tracking-wide px-4"
                  )}
                  size="lg"
                >
                  Explore Curriculum
                </AnimatedButton>
              </div>

              <p className="text-lg text-muted-foreground">
                Applications Open now for{" "}
                <span className="text-secondary-foreground font-medium tracking-wide">
                  January 2025 Batch
                </span>
                <br />
                Applications Close:{" "}
                <span className="text-secondary-foreground font-medium tracking-wide">
                  January 02, 2025
                </span>
                <br />
                Exam:{" "}
                <span className="text-secondary-foreground font-medium tracking-wide">
                  February 23, 2025
                </span>
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 w-full flex justify-center items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lEMtlAqlJww?si=9IdaYr8YSxAzDbck"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-auto aspect-video max-w-xl rounded-xl shadow-lg border-2"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className={cn("w-full max-w-[90rem] mx-auto", "py-12 px-4 sm:px-8")}>
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          )}
        >
          <div
            className={cn(
              "flex flex-col items-center justify-center",
              "rounded-lg border-2 shadow-lg p-6 bg-selection/30"
            )}
          >
            <TrophyIcon size={48} className="text-secondary-foreground mb-6" />
            <h3 className="text-2xl font-bold text-foreground">Awarded</h3>
            <p className="text-lg text-muted-foreground">
              by QS Reimagine Education
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col items-center justify-center",
              "rounded-lg border-2 shadow-lg p-6 bg-selection/30"
            )}
          >
            <FaPeopleGroup
              size={48}
              className="text-secondary-foreground mb-6"
            />
            <h3 className="text-2xl font-bold text-foreground">29,000+</h3>
            <p className="text-lg text-muted-foreground">Students Enrolled</p>
          </div>

          <div
            className={cn(
              "flex flex-col items-center justify-center",
              "rounded-lg border-2 shadow-lg p-6 bg-selection/30"
            )}
          >
            <MdOutlineVerified
              size={48}
              className="text-secondary-foreground mb-6"
            />
            <h3 className="text-2xl font-bold text-foreground">
              Recognized Degree
            </h3>
            <p className="text-lg text-muted-foreground">
              UGC-approved degree program
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col items-center justify-center",
              "rounded-lg border-2 shadow-lg p-6 bg-selection/30"
            )}
          >
            <LuLaptop size={48} className="text-secondary-foreground mb-6" />
            <h3 className="text-2xl font-bold text-foreground">
              Online Learning
            </h3>
            <p className="text-lg text-muted-foreground">
              Flexible online classes with interactive learning modules
            </p>
          </div>
        </div>
      </div>

      {/* Director's Message */}
      <div
        className={cn(
          "w-full max-w-7xl mx-auto my-12 px-4 sm:px-8",
          "flex flex-col items-center"
        )}
      >
        <h2
          className={cn(
            "inline-block relative mt-8 mb-4 pb-4",
            "text-4xl font-bold text-center text-foreground",
            "after:absolute after:w-1/2 after:h-1 after:bg-secondary-foreground after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full"
          )}
        >
          Director<span>&apos;</span>s Message
        </h2>

        <div
          className={cn(
            "w-full flex flex-col lg:flex-row items-center justify-center gap-12 mt-8"
          )}
        >
          <Image
            src="https://res.cloudinary.com/djoo8ogmp/image/upload/v1735421069/uploaded/director_kjgw6q.jpg"
            alt="Director"
            width={500}
            height={500}
            className={cn(
              "flex-1 rounded-lg border-2 shadow-lg w-full max-w-[300px] aspect-square"
            )}
          />

          <div
            className={cn(
              "relative z-0 w-full rounded-lg border-2 py-6 px-6 lg:px-6 bg-selection/30 shadow-lg"
            )}
          >
            <FaQuoteRight
              className={cn(
                "absolute z-0 top-0 left-0 transform -translate-x-1/4 -translate-y-1/3",
                "text-9xl text-muted-foreground/20"
              )}
            />

            <p className="text-lg">
              IIT Madras started this unique BS program to provide access to IIT
              quality education to the learners across the country. Data Science
              is a growing field and the demand for skilled resources in the
              market is very high. IIT Madras has a rich history of providing
              high-quality education and this program is designed to underline
              the fact that IIT is within the reach of everyone. This BS program
              is meticulously drafted and is aligned with the goals of the
              National Educational Policy.
              <br />
              <br />
              We are planning to make IIT Madras a `Vishwa-guru (Global
              Teacher)` through innovative approaches to enhance the quality of
              education. In order to support the students from financially
              disadvantaged backgrounds to pursue this program, scholarships are
              being provided.
            </p>
            <div className="mt-8">
              <p className="text-xl font-medium text-foreground">
                Prof. V. Kamakoti
              </p>
              <p className="text-xm text-secondary-foreground">Director, IIT Madras</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <FAQs />
    </PageWrapper>
  );
}
