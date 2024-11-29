const endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function apiFetch(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    return response.ok;
  }
  return await response.json();
}

export async function getSubs() {
  return apiFetch(`${endpoint}?order=id.desc`, {
    method: "GET",
    headers: {
      apikey: supabaseKey,
    },
  });
}

export async function getSubById(id) {
  return apiFetch(`${endpoint}?id=eq.${id}`, {
    headers: {
      apikey: supabaseKey,
    },
  });
}

export async function addSub(data) {
  return apiFetch(endpoint, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteSub(id) {
  return apiFetch(`${endpoint}?id=eq.${id}`, {
    method: "DELETE",
    headers: {
      apikey: supabaseKey,
      Prefer: "return=representation",
    },
  });
}

export async function updateSub(id, data) {
  return apiFetch(`${endpoint}?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      apikey: supabaseKey,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(data),
  });
}
