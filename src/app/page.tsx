import PageWrapper from "@/components/extras/page-wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <div className="">
        <div className="h-64 w-full bg-gradient-to-tr from-amber-800 to-rose-800 content-center">
          <h1 className="text-4xl font-bold text-center">Home</h1>
        </div>
      </div>

      {/* Director's Message */}
      <div
        className={cn(
          "w-full max-w-7xl mx-auto my-12 px-8",
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
              "w-full rounded-lg border-2 py-6 px-6 lg:px-12 bg-card shadow-lg"
            )}
          >
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
              <p className="text-xm">Director, IIT Madras</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
