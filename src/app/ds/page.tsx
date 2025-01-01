import PageWrapper from "@/components/extras/page-wrapper";
import { AnimatedButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TrophyIcon } from "lucide-react";
import Image from "next/image";
import { FaPeopleGroup, FaQuoteRight } from "react-icons/fa6";
import { LuLaptop } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";
import { PiBrainLight, PiStudentLight } from "react-icons/pi";
import FAQs from "./faqs";
import { Metadata } from "next";
import OnlineLearningIcon from "@/components/icons/online-learning";
import Flexible from "@/components/icons/flexible";
import Support from "@/components/icons/support";
import AgeLimit from "@/components/icons/age-limit";
import dsInstructors from "@/assets/data/ds-instructor.json";

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
                    "text-foreground hover:text-foreground transition-all",
                    "font-medium tracking-wide",
                    // "bg-orange-600/70 hover:bg-orange-800/90",
                    "bg-transparent hover:bg-transparent",
                    "bg-[linear-gradient(to_right,_#ee7752,_#e73c7e,_#FF6347)]",
                    "[background-size:_200%_200%] [background-position:_100%_0%]",
                    "animate-gradient-xy"
                  )}
                  size="lg"
                >
                  Apply Now
                </AnimatedButton>

                <AnimatedButton
                  variant="outline"
                  className={cn(
                    "text-foreground transition-all duration-300",
                    "font-medium tracking-wide px-4 border-muted-foreground/50"
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
            <h3 className="text-2xl font-bold text-foreground">
              Best Online Program
            </h3>
            <p className="text-lg text-muted-foreground">
              Awarded by QS Reimagine Education
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
          "w-full max-w-7xl mx-auto my-12 lg:my-24 px-4 sm:px-8",
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
              "flex-1 [flex-basis:auto] rounded-lg border-2 shadow-lg w-full max-w-[300px] aspect-square"
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
              <p className="text-xm text-secondary-foreground">
                Director, IIT Madras
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Intension */}
      <div
        className={cn(
          "w-full max-w-[90rem] mx-auto my-12 mt-24 px-4 sm:px-8",
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
          Why Choose <span className="text-secondary-foreground">IITM BS</span>{" "}
          in Data Science?
        </h2>

        <p className="text-lg text-muted-foreground text-center max-w-3xl">
          Transform your future with a pioneering curriculum in data science.
        </p>

        <div
          className={cn(
            "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          )}
        >
          <div
            className={cn(
              "flex flex-col",
              "rounded-lg border-2 shadow-lg p-6 bg-selection/30"
            )}
          >
            <div className="flex flex-row items-center gap-4 mb-4">
              <OnlineLearningIcon className="size-10 text-secondary-foreground" />
              <h3 className="text-2xl font-bold text-foreground">
                World Class Faculty
              </h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Learn from carefully designed courses taught by experienced IIT
              Madras faculty and other industry experts.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col",
              "rounded-lg border-2 shadow-lg p-6 bg-selection/30"
            )}
          >
            <div className="flex flex-row items-center gap-4 mb-4">
              <PiBrainLight className="size-10 text-secondary-foreground" />
              <h3 className="text-2xl font-bold text-foreground">
                Industry-Relevant
              </h3>
            </div>
            <p className="text-lg text-muted-foreground">
              The graduates of this programme will have strong fundamentals and
              industry-ready skills.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col",
              "rounded-lg border-2 shadow-lg p-6 bg-selection/30"
            )}
          >
            <div className="flex flex-row items-center gap-4 mb-4">
              <AgeLimit className="size-10 text-secondary-foreground" />
              <h3 className="text-2xl font-bold text-foreground">
                No Age Limit
              </h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Learners from any age and any where in the world can study in this
              program. Current age of learners : 17 to 81 years.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col",
              "rounded-lg border-2 shadow-lg p-6 bg-selection/30"
            )}
          >
            <div className="flex flex-row items-center gap-4 mb-4">
              <Flexible className="size-10 text-secondary-foreground" />
              <h3 className="text-2xl font-bold text-foreground">Flexible</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Our program is flexible with exit points for learners from
              different backgrounds with different aspirations.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col",
              "rounded-lg border-2 shadow-lg p-6 bg-selection/30"
            )}
          >
            <div className="flex flex-row items-center gap-4 mb-4">
              <Support className="size-10 text-secondary-foreground" />
              <h3 className="text-2xl font-bold text-foreground">
                Course Support
              </h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Each course will have discussion forums with an active academic
              team to help in clearing doubts.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col",
              "rounded-lg border-2 shadow-lg p-6 bg-selection/30"
            )}
          >
            <div className="flex flex-row items-center gap-4 mb-4">
              <PiStudentLight className="size-10 text-secondary-foreground" />
              <h3 className="text-2xl font-bold text-foreground">
                Scholarship
              </h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Learners from &lt; 5LPA eligible for up to 75% fee waivers. 2000+
              students study for free
            </p>
          </div>
        </div>
      </div>

      {/* Instructor's corousol */}
      <div className={cn("py-12", "flex flex-col items-center")}>
        <h2
          className={cn(
            "inline-block relative mt-8 pb-4",
            "text-4xl font-bold text-center text-foreground",
            "after:absolute after:w-1/2 after:h-1 after:bg-secondary-foreground after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full"
          )}
        >
          Meet Our{" "}
          <span className="text-secondary-foreground">Instructors</span>
        </h2>

        <div
          className={cn(
            "relative w-dvw mt-12 overflow-hidden",
            "flex flex-row flex-nowrap *:flex-shrink-0 *:px-2",
            "*:animate-slide-x *:hover:[animation-play-state:paused]",
            "before:absolute before:z-10 before:top-0 before:left-0 before:pointer-events-none before:w-40 lg:before:w-56 before:h-full before:bg-gradient-to-r before:from-background before:via-background/60 before:via-50% before:to-transparent",
            "after:absolute after:z-10 after:top-0 after:right-0 after:pointer-events-none after:w-40 lg:after:w-56 after:h-full after:bg-gradient-to-l after:from-background after:via-background/60 after:via-50% after:to-transparent"
          )}
        >
          {Array.from({ length: 2 }).map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "w-auto flex flex-row flex-nowrap *:flex-shrink-0 gap-4"
              )}
            >
              {dsInstructors
                .slice(0, dsInstructors.length / 2)
                .map((ins, idx) => (
                  <InstructorsCard
                    key={idx}
                    name={ins.name}
                    designation={ins.designation}
                    image={ins.image_link}
                  />
                ))}
            </div>
          ))}
        </div>
        <div
          className={cn(
            "relative w-dvw mt-12 overflow-hidden",
            "flex flex-row flex-nowrap *:flex-shrink-0 *:px-2",
            "*:animate-slide-x *:hover:[animation-play-state:paused]",
            "before:absolute before:z-10 before:top-0 before:left-0 before:pointer-events-none before:w-40 lg:before:w-56 before:h-full before:bg-gradient-to-r before:from-background before:via-background/60 before:via-50% before:to-transparent",
            "after:absolute after:z-10 after:top-0 after:right-0 after:pointer-events-none after:w-40 lg:after:w-56 after:h-full after:bg-gradient-to-l after:from-background after:via-background/60 after:via-50% after:to-transparent"
          )}
        >
          {Array.from({ length: 2 }).map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "w-auto flex flex-row flex-nowrap *:flex-shrink-0 gap-4"
              )}
            >
              {dsInstructors
                .slice(dsInstructors.length / 2)
                .map((ins, idx) => (
                  <InstructorsCard
                    key={idx}
                    name={ins.name}
                    designation={ins.designation}
                    image={ins.image_link}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Offerings */}


      {/* FAQs */}
      <FAQs />
    </PageWrapper>
  );
}

function InstructorsCard({
  name,
  designation,
  image,
}: {
  name: string;
  designation: string;
  image: string;
}) {
  return (
    <div className="group/card relative h-48 w-52 lg:h-64 lg:w-72">
      <div
        className={cn(
          "size-40 lg:size-56 relative rounded-2xl overflow-hidden",
          "after:absolute after:z-0 after:top-0 after:left-0 after:w-full after:h-full after:bg-selection/30 after:rounded-2xl",
          "group-hover/card:after:bg-transparent after:transition-all after:duration-300"
        )}
      >
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className={cn(
            "w-full h-full object-cover opacity-50",
            "group-hover:opacity-100 group-hover:transition-all group-hover:duration-300"
          )}
        />
      </div>
      <div
        className={cn(
          "absolute bottom-0 right-0 p-2 px-4 lg:p-4 w-max max-w-40 lg:max-w-60",
          "bg-selection rounded-2xl"
        )}
      >
        <h3 className="text-base lg:text-lg font-bold text-foreground line-clamp-1">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {designation}
        </p>
      </div>
    </div>
  );
}
