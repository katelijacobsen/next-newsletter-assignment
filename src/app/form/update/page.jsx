import { redirect } from "next/navigation";

async function page({ searchParams }) {
  const { number } = await searchParams;

  async function handleSubmit(formData) {
    "use server";

    const fields = Array.from({ length: number }).map((_, i) => ({
      name: formData.get(`name-${i}`),
      email: formData.get(`email-${i}`),
    }));

    console.log(fields);

    const stringifiedFields = encodeURIComponent(JSON.stringify(fields));

    redirect(`/form/reservation?items=${stringifiedFields}`);
  }

  return (
    <div>
      <form action={handleSubmit}>
        {Array.from({ length: number }).map((item, i) => (
          <div key={i}>
            <div>
              <label htmlFor={`id-${i}`}>Name</label>
              <input type="text" name={`name-${i}`} id={`id-${i}`} />
            </div>
            <div>
              <label htmlFor={`id2-${i}`}>Email</label>
              <input type="email" name={`email-${i}`} id={`id2-${i}`} />
            </div>
          </div>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default page;
