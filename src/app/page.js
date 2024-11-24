import Newsletter from "@/components/Newsletter";
import SubList from "@/components/SubList";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Newsletter
        </h1>
        <Newsletter />
        <hr />
        <SubList />
      </main>
    </div>
  );
}
