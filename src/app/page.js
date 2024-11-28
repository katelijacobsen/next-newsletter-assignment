import Newsletter from "@/components/Newsletter";

import { revalidatePath } from "next/cache";

import { getSubs, delSub } from "@/lib/supabase";

export default async function Home() {
  async function deleteSub(id) {
    "use server";
    await delSub(id);
    revalidatePath("/");
  }

  const subscribers = await getSubs();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Newsletter
        </h1>
        <Newsletter />
        <ul>
          {subscribers.map((sub) => (
            <li key={sub.id}>
              {sub.name} - {sub.email}
              <form>
                <button
                  formAction={deleteSub.bind(null, sub.id)}
                  className="p-2 bg-blue-200"
                >
                  Delete
                </button>
              </form>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
