export async function GET() {
  const res = await fetch("https://dev.to/api/articles/me/all", {
    headers: { api_key: "Kfxu1zBnT9ZQMaJHUYpHUUzn" },
  });
  const result = await res.json();
  return Response.json(result);
}
