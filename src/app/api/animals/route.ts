import prisma from "@/lib/prisma";


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    
    if (id) {
    // GET de un solo animal: todas las imágenes
        const animal = await prisma.animal.findUnique({
            where: { id: Number(id) }, 
            include: { images: true },
        });
        if (!animal) return new Response(JSON.stringify({ error: "Animal not found" }), { status: 404 });
        return Response.json(animal);
    }

  // GET general: solo la primera imagen de cada animal
    const animals = await prisma.animal.findMany({
        include: { images: { take: 1 } },
    });
    
    return Response.json(animals);
}
export async function POST(req: Request) {
  const { name, shdescription,  description, age, sex, status, priority, isAdopted, images } = await req.json()
  // images es un array de URLs: ["url1", "url2"]
    const animal = await prisma.animal.create({
        data: {
            name, 
            shdescription, 
            description, 
            age: Number(age), 
            sex, 
            status, 
            priority,
            isAdopted, 
            images: {
                create: images.map((url: string) => ({ url }))
            }
            }, 
        include: {
            images: true
        }
    })
    
    return Response.json(animal)

}