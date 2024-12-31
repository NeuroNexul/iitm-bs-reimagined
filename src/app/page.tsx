import PageWrapper from "@/components/extras/page-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full max-w-[90rem] mx-auto py-24 px-4 sm:px-8 flex flex-col items-center gap-12">
        <Link href="/ds">
          <Button>Go to DS Page</Button>
        </Link>
        <Link href="/es">
          <Button>Go to ES Page</Button>
        </Link>
      </div>
    </PageWrapper>
  );
}
