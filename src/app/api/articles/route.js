export async function GET() {
  const res = await fetch("https://dev.to/api/articles/me/published", {
    headers: { api_key: "Kfxu1zBnT9ZQMaJHUYpHUUzn" },
  });
  const result = await res.json();
  return Response.json(result);
}

export async function POST(request) {
  const { title, markdown } = await request.json();
  const res = await fetch("https://dev.to/api/articles", {
    method: "POST",
    headers: {
      api_key: "Kfxu1zBnT9ZQMaJHUYpHUUzn",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      article: {
        title: title,
        published: true,
        body_markdown: markdown,
      },
    }),
  });
  return Response.json(res);
}

export async function PUT(request) {
  const article = await request.json();
  const res = await fetch(`https://dev.to/api/articles/${article.id}`, {
    method: "PUT",
    headers: {
      api_key: "Kfxu1zBnT9ZQMaJHUYpHUUzn",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      article: {
        title: article.title,
        body_markdown: article.body_markdown,
      },
    }),
  });
  return Response.json(res);
}

export async function PATCH(request) {
  const id = await request.json();
  const res = await fetch(`https://dev.to/api/articles/${id}`, {
    method: "PATCH",
    headers: {
      api_key: "Kfxu1zBnT9ZQMaJHUYpHUUzn",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      article: {
        published: false,
      },
    }),
  });
  return Response.json(res);
}
