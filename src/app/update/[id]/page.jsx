import { getSubById, updateSub, deleteSub } from "@/lib/api";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function page({ params }) {
  const { id } = await params;
  const [{ name, email }] = await getSubById(id);

  async function updateAction(formData) {
    "use server";
    const data = {
      email: formData.get("email"),
      name: formData.get("name"),
    };

    const res = await updateSub(id, data);

    if (!res) {
      return;
    }

    if (data.email === email && data.name === name) {
      redirect("/");
    } else {
      revalidatePath("/");
      redirect(`/?updated=${res[0].id}`);
    }
  }

  async function deleteAction() {
    "use server";
    await deleteSub(id);
    revalidatePath("/");

    redirect("/");
  }

  return (
    <form action={updateAction} className="space-y-6">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={name}
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={email}
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex gap-4">
        <button
          formAction={deleteAction}
          type="submit"
          className="w-full py-2 px-4 bg-gray-300 text-black font-semibold rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Delete
        </button>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default page;
