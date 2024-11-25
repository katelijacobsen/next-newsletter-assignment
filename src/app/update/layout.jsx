import Link from "next/link";

function layout({ children }) {
  return (
    <div className="grid p-8 pb-2 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8">
        <Link href="/">Back</Link>
        {children}
      </main>
    </div>
  );
}

export default layout;
