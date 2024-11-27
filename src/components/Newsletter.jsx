"use client";

import { useActionState } from "react";
import { actionSubmit } from "@/actions";
import SubmitButton from "./SubmitButton";

function Newsletter() {
  const [state, formAction] = useActionState(actionSubmit, undefined);

  return (
    <form
      action={formAction}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={state?.name}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <p className="bg-red-100 text-red-950">
          {state?.errors && state.errors.name}
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={state?.email}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
        <p className="bg-red-100 text-red-950">
          {state?.errors && state.errors.email}
        </p>
      </div>
      <SubmitButton />
      {state?.errors && state.errors.submit && (
        <p className="text-red-500 text-sm mt-2">{state.errors.submit}</p>
      )}
    </form>
  );
}

export default Newsletter;
