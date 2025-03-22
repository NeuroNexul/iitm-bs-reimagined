import PageWrapper from "@/components/extras/page-wrapper";
import {
  BookOpenIcon,
  FeesIcon,
  OnlineQuizIcon,
  ScholerIcon,
  StopwatchIcon,
} from "@/components/icons/academics";
import Support from "@/components/icons/support";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <PageWrapper>
      {/* Overall structure */}
      <div
        className={cn(
          "w-full max-w-7xl mx-auto",
          "py-12 lg:py-24 px-4 sm:px-8",
          "[&>p]:mt-4 [&>p]:text-lg",
          "[&_u]:underline-offset-4"
        )}
      >
        <h2
          className="text-3xl font-bold text-foreground mt-4 mb-8"
          id="overall-structure"
        >
          {/* <Link className="text-secondary-foreground" href="#overall-structure">
            <LinkIcon size={24} className="inline-block -mt-1 mr-2" />
          </Link> */}
          Overall Structure
        </h2>

        <p>
          There are four levels in the IIT Madras Degree program and to get the
          BS Degree in Data Science and Applications from IIT Madras, a{" "}
          <u>learner has to successfully complete all four levels.</u>
        </p>

        <p>
          There is also the <u>flexibility to exit at any level.</u> Depending
          on the courses completed and credits earned, the learner can receive a
          Foundation Certificate from IITM CODE (Centre for Outreach and Digital
          Education) or Diploma(s) from IIT Madras or BSc Degree in Programming
          and Data Science from IIT Madras or BS Degree in Data Science and
          Applications from IIT Madras.
        </p>

        <div className={cn("w-full flex flex-row items-stretch gap-8", "mt-8")}>
          <div className="w-96 p-4 flex-shrink-0 bg-white rounded-lg shadow-md grid place-items-center">
            <Image
              src="https://study.iitm.ac.in/ds/assets/img/academics/Programme_Structure.jpg"
              alt="Programme Structure"
              width={800}
              height={1577}
              className="w-full h-auto"
            />
          </div>

          <div className="flex-1 w-full">
            <p className="text-lg">
              Those who are interested in pursuing an exclusive Diploma Program
              in Programming or Data Science can also check out our Diploma
              Program website.
            </p>

            <div
              className={cn(
                "mt-4 bg-selection/30 p-4 rounded-lg",
                "flex flex-col gap-2"
              )}
            >
              <div className={cn("flex flex-row items-start gap-4")}>
                <BookOpenIcon className="size-10 flex-shrink-0" />
                <div className="[&>p]:text-lg &>p:mt-2">
                  <h3 className="text-xl font-bold pb-2 pt-2">
                    Courses and Credits in Each Level:
                  </h3>
                  <p>Foundation Level: 32 credits | 8 courses</p>
                  <p>Diploma Level:</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; - Programming: 27 credits | 6
                    courses + 2 projects
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp; - Data Science: 27 credits | 6
                    courses + 2 projects
                  </p>
                  <p>BSc Degree Level: 28 credits</p>
                  <p>BS Degree Level: 28 credits</p>
                </div>
              </div>

              <div className={cn("flex flex-row items-start gap-4")}>
                <ScholerIcon className="size-10 flex-shrink-0" />
                <div className="[&>p]:text-lg &>p:mt-2">
                  <h3 className="text-xl font-bold pb-2 pt-2">
                    Total credits to be earned to get:
                  </h3>
                  <p>BSc Degree: 114 credits</p>
                  <p>BS Degree: 142 credits</p>
                </div>
              </div>

              <div className={cn("flex flex-row items-start gap-4")}>
                <StopwatchIcon className="size-10 flex-shrink-0" />
                <div className="[&>p]:text-lg &>p:mt-2">
                  <h3 className="text-xl font-bold pb-2 pt-2">
                    Completion time: 4 - 8 years
                  </h3>
                  <p>
                    The time period for this is based on learner’s preferred
                    pace and performance in assessments. Expected learner
                    engagement will be approximately 10hrs/course/week.
                  </p>
                </div>
              </div>

              <div className={cn("flex flex-row items-start gap-4")}>
                <FeesIcon className="size-10 flex-shrink-0" />
                <div className="[&>p]:text-lg &>p:mt-2">
                  <h3 className="text-xl font-bold pb-2 pt-2">
                    Fees: Each term, pay only for courses you register for!
                  </h3>
                  <p>Refer Fee Structure.</p>
                </div>
              </div>

              <div className={cn("flex flex-row items-start gap-4")}>
                <Support className="size-10 flex-shrink-0" />
                <div className="[&>p]:text-lg &>p:mt-2">
                  <h3 className="text-xl font-bold pb-2 pt-2">
                    Online Courses & Assignments
                  </h3>
                  <p>
                    Duration of each course: 12 weeks - Each week comprising 2-3
                    hrs of videos, practice questions, text transcripts and
                    online graded assignment(s).
                  </p>
                </div>
              </div>

              <div className={cn("flex flex-row items-start gap-4")}>
                <OnlineQuizIcon className="size-10 flex-shrink-0" />
                <div className="[&>p]:text-lg &>p:mt-2">
                  <h3 className="text-xl font-bold pb-2 pt-2">
                    Quizzes and Exams
                  </h3>
                  <p>
                    In-person invigilated quizzes and exams as per the grading
                    pattern defined for each course.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </PageWrapper>
  );
}
