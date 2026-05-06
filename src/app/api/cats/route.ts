import { Cat } from "@/database/catDB";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const url = id
      ? `https://api.airtable.com/v0/${process.env.DATABASE_ID}/${process.env.DATABASE_TABLE_ID}/${id}`
      : `https://api.airtable.com/v0/${process.env.DATABASE_ID}/${process.env.DATABASE_TABLE_ID}`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_AIRTABLE}`,
      },
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Error obteniendo datos" }), {
        status: res.status,
      });
    }

    const data: Cat | { records: Cat[] } = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);

    return new Response(JSON.stringify({ error: "Error interno" }), {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await fetch(
      `https://api.airtable.com/v0/${process.env.DATABASE_ID}/${process.env.DATABASE_TABLE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOKEN_AIRTABLE}`,
        },
        body: JSON.stringify({
          fields: body,
        }),
      },
    );
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Error interno" }), {
      status: 500,
    });
  }
}
