import PageWrapper from "@/components/extras/page-wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
          <div
            className={cn("flex-1 flex flex-col items-center justify-start")}
          >
            <h1
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl text-center font-bold !leading-[1.45]",
                "text-foreground"
              )}
            >
              Welcome to the{" "}
              <span className="text-secondary-foreground">Reimagined</span>
              <br />
              IITM BS Degree Portal
            </h1>
            <p
              className={cn(
                "text-lg sm:text-xl lg:text-2xl",
                "text-muted-foreground pt-4"
              )}
            >
              A unique 4-year degree program by IIT Madras, India&apos;s top
              technical institute
            </p>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "w-full max-w-7xl mx-auto pb-12 px-4",
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        )}
      >
        <Link href="/ds" className="min-h-full">
          <div
            className={cn(
              "w-full min-h-full rounded-2xl bg-white shadow-md overflow-clip",
              "border-b-8 border-orange-800/90"
            )}
          >
            <div className="relative w-full h-60">
              <Image
                src="https://res.cloudinary.com/djoo8ogmp/image/upload/v1735678598/uploaded/apply_now_card_3_l2kbgq.jpg"
                alt="Apply Now"
                width={440}
                height={228}
                className="w-full h-full object-cover"
              />

              <Image
                src="https://res.cloudinary.com/djoo8ogmp/image/upload/v1735678615/uploaded/logo_qjre9b.png"
                alt="IITM Logo"
                width={60}
                height={680}
                className="absolute -bottom-6 right-6"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-orange-800/90">
                BS in Data Science & Applications
              </h3>
            </div>
          </div>
        </Link>

        <Link href="/es" className="min-h-full">
          <div
            className={cn(
              "w-full min-h-full rounded-2xl bg-white shadow-md overflow-clip",
              "border-b-8 border-orange-800/90"
            )}
          >
            <div className="relative w-full h-60">
              <Image
                src="https://res.cloudinary.com/djoo8ogmp/image/upload/v1735678603/uploaded/apply_now_card_4_mlbpkx.jpg"
                alt="Apply Now"
                width={440}
                height={228}
                className="w-full h-full object-cover"
              />

              <Image
                src="https://res.cloudinary.com/djoo8ogmp/image/upload/v1735678615/uploaded/logo_qjre9b.png"
                alt="IITM Logo"
                width={60}
                height={680}
                className="absolute -bottom-6 right-6"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-orange-800/90">
                BS in Electronic Systems
              </h3>
            </div>
          </div>
        </Link>

        <Link href="/diploma" className="min-h-full">
          <div
            className={cn(
              "w-full min-h-full rounded-2xl bg-white shadow-md overflow-clip",
              "border-b-8 border-orange-800/90"
            )}
          >
            <div className="relative w-full h-60">
              <Image
                src="https://res.cloudinary.com/djoo8ogmp/image/upload/v1735678607/uploaded/apply_now_card_1_jbtkmv.jpg"
                alt="Apply Now"
                width={440}
                height={228}
                className="w-full h-full object-cover"
              />

              <Image
                src="https://res.cloudinary.com/djoo8ogmp/image/upload/v1735678615/uploaded/logo_qjre9b.png"
                alt="IITM Logo"
                width={60}
                height={680}
                className="absolute -bottom-6 right-6"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-orange-800/90">
                Diploma in Programming/Data Science
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </PageWrapper>
  );
}
