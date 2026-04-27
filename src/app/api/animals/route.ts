import prisma from "@/lib/prisma"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (id) {
    const animal = await prisma.animal.findUnique({
      where: { id: Number(id) },
      include: { images: true },
    })

    if (!animal) {
      return new Response(JSON.stringify({ error: "Animal not found" }), { status: 404 })
    }

    return Response.json(animal)
  }

  const animals = await prisma.animal.findMany({
    include: { images: { take: 1 } },
  })

  return Response.json(animals)
}

export async function POST(req: Request) {
  const { name, description, age, race, specie, isAdopted, isAcogido, images } =
    await req.json()

  // const animal = await prisma.animal.create({
  //   data: {
  //     name,
  //     description,
  //     age: Number(age),
  //     race,
  //     specie,
  //     isAdopted,
  //     isAcogido,
  //     images: {
  //       create: images.map((url: string) => ({ url })),
  //     },
  //   },
  //   include: {
  //     images: true,
  //   },
  // })

  return Response.json(animal)
}