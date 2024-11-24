import Link from "next/link";

function layout({ children }) {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Link href="/">Back</Link>
      {children}
    </main>
  );
}

export default layout;
