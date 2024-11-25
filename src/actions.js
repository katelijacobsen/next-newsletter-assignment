"use server";

import { addSub } from "@/lib/api";
import { revalidatePath } from "next/cache";

export async function actionSubmit(prev, formData) {
  const data = {
    email: formData.get("email"),
    name: formData.get("name"),
  };
  const errors = {};

  if (!data.name) {
    errors.name = "Name is required";
  }
  if (!data.email) {
    errors.email = "Email is required";
  }

  // if (errors.email.length > 0 || errors.name.length > 0) {
  //   return { success: false, errors };
  // }
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  const res = await addSub(data);

  if (res) {
    revalidatePath("/");
    return { success: true, message: "Thanks for submitting" };
  } else {
    return { success: false, message: "Failed to submit" };
  }
}
