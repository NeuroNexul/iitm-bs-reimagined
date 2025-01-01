import PageWrapper from "@/components/extras/page-wrapper";
import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Card({
  title,
  image,
  href,
  links,
}: {
  title: string;
  image: string;
  href: string;
  links?: { title: string; href: string }[];
}) {
  return (
    <div className="min-h-full">
      <Link href={href} className="">
        <div
          className={cn(
            "w-full min-h-[315px] rounded-2xl bg-white shadow-md overflow-clip",
            "border-b-8 border-orange-800/90"
          )}
        >
          <div className="relative w-full h-60">
            <Image
              src={image}
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
            <h3 className="text-2xl font-bold text-orange-800/90 line-clamp-2">
              {title}
            </h3>
          </div>
        </div>
      </Link>

      {links && (
        <div className="px-6 py-4 mt-4 bg-white rounded-2xl border-b-8 border-orange-800/90">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-lg text-orange-800/90 hover:text-orange-800"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <div
        className={cn(
          "w-full max-w-[90rem] mx-auto",
          "pt-12 lg:pt-24 px-4 sm:px-8"
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
          "w-full max-w-7xl mx-auto px-8 py-4 mt-8 flex flex-row gap-4",
          "rounded-lg",
          "bg-orange-100 text-orange-800/90 items-start justify-center"
        )}
      >
        <InfoIcon size={24} className="text-orange-800/90 flex-shrink-0" />

        <p className="text-lg text-orange-800/90">
          This page is not a part of our subbmision. It&apos;s just an indexing
          page to help the evaluators navigate through the different parts of
          our submission.
        </p>
      </div>

      <div
        className={cn(
          "w-full max-w-7xl mx-auto py-12 lg:py-24 px-4",
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        )}
      >
        <Card
          title="BS in Data Science & Applications"
          image="https://res.cloudinary.com/djoo8ogmp/image/upload/v1735678598/uploaded/apply_now_card_3_l2kbgq.jpg"
          href="/ds"
          links={[
            { title: "Curriculum", href: "/ds/curriculum" },
            { title: "Faculty", href: "/ds/faculty" },
            { title: "FAQs", href: "/ds/faqs" },
          ]}
        />

        <Card
          title="BS in Electronic Systems"
          image="https://res.cloudinary.com/djoo8ogmp/image/upload/v1735678603/uploaded/apply_now_card_4_mlbpkx.jpg"
          href="/es"
          links={[
            { title: "Curriculum", href: "/es/curriculum" },
            { title: "Faculty", href: "/es/faculty" },
            { title: "FAQs", href: "/es/faqs" },
          ]}
        />

        <Card
          title="Diploma in Programming/Data Science"
          image="https://res.cloudinary.com/djoo8ogmp/image/upload/v1735678607/uploaded/apply_now_card_1_jbtkmv.jpg"
          href="/diploma"
          links={[
            { title: "Curriculum", href: "/diploma/curriculum" },
            { title: "Faculty", href: "/diploma/faculty" },
            { title: "FAQs", href: "/diploma/faqs" },
          ]}
        />
      </div>
    </PageWrapper>
  );
}
