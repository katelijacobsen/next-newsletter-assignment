import Newsletter from "@/components/Newsletter";
import SubList from "@/components/SubList";

export default async function Home({ searchParams }) {
  const { updated } = await searchParams;
  return (
    <div className="grid p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Newsletter
        </h1>
        <Newsletter />
        <hr />
        <SubList updated={updated} />
      </main>
    </div>
  );
}
