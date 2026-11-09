export async function GET() {
  const res = await fetch("https://dev.to/api/articles/me/published", {
    headers: { api_key: process.env.DEVTO_API_KEY },
  });
  const result = await res.json();
  return Response.json(result);
}

export async function POST(request) {
  const { title, markdown } = await request.json();
  const res = await fetch("https://dev.to/api/articles", {
    method: "POST",
    headers: {
      api_key: process.env.DEVTO_API_KEY,
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
  const { title, markdown, id } = await request.json();
  const res = await fetch(`https://dev.to/api/articles/${id}`, {
    method: "PUT",
    headers: {
      api_key: process.env.DEVTO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      article: {
        title: title,
        body_markdown: markdown,
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
      api_key: process.env.DEVTO_API_KEY,
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
