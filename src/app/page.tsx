import PageWrapper from "@/components/extras/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="h-[1000px]">
        <div className="h-64 w-full bg-gradient-to-tr from-amber-800 to-rose-800 content-center">
          <h1 className="text-4xl font-bold text-center">Home</h1>
        </div>
      </div>
    </PageWrapper>
  );
}
