"use client";

import React, { ComponentProps, useState, useEffect } from "react";
import { CatCard, type CatCardProps } from "@/components/ui/AnimalCard"; 
import Link from "next/link";

type Cat = {
    id: string;
    name: string;
    description: string;
    age: number;
    sex: "macho" | "hembra";
    priority: "urgente" | "alta" | "normal";
    isReserved: boolean;
    images: string[];
};

type Props = ComponentProps<"div"> &{
  
};
const CatsPage= ({ ...rest}: Props) => {
    const [loading, setLoading] = useState(true);

    const cats: CatCardProps[] = [
        {
            id: 1,
            name: "Luna",
            shdescription: "Cariñosa y tranquila, ideal para hogares serenos.",
            description: "Luna es una gata muy dulce que disfruta pasar tiempo cerca de las personas. Le encanta tomar el sol junto a la ventana y recibir caricias. Se adapta perfectamente a pisos pequeños y es muy limpia y educada.",
            age: 3,
            sex: "hembra",
            status: "normal",
            images: [
                "https://images.unsplash.com/photo-1667518158994-8b3b2957dd01"
            ],
            priority: "normal",
            isAdopted: false
        },
        {
            id: 2,
            name: "Simón",
            shdescription: "Juguetón y curioso, siempre explorando.",
            description: "Simón es un gato macho muy activo y divertido. Le encanta jugar con pelotas y perseguir juguetes. Es sociable con otros gatos y sería ideal para una familia con niños.",
            age: 2,
            sex: "macho",
            status: "normal",
            images: [
                "https://images.unsplash.com/photo-1595433562696-54d9d1a0d1a7"
            ],
            priority: "alta",
            isAdopted: false
        },
        {
            id: 3,
            name: "Mimi",
            shdescription: "Pequeña y dulce, busca un hogar acogedor.",
            description: "Mimi es una gatita muy tranquila que disfruta dormir en lugares cómodos. Es algo tímida al principio, pero cuando gana confianza se vuelve muy cariñosa.",
            age: 1,
            sex: "hembra",
            status: "reservado",
            images: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
            ],
            priority: "urgente",
            isAdopted: false
        },
        {
            id: 4,
            name: "Thor",
            shdescription: "Grande y protector, pero muy mimoso.",
            description: "Thor es un gato fuerte y tranquilo. Aunque su tamaño impone, es extremadamente cariñoso y le encanta que le rasquen la barriga. Perfecto para hogares sin otros animales.",
            age: 5,
            sex: "macho",
            status: "acogido",
            images: [
                "https://images.unsplash.com/photo-1543852786-1cf6624b9987"
            ],
            priority: "normal",
            isAdopted: false
        },
        {
            id: 5,
            name: "Nala",
            shdescription: "Activa y muy sociable.",
            description: "Nala es una gata joven llena de energía. Le encanta correr y jugar, pero también disfruta momentos de calma junto a sus humanos. Está esterilizada y lista para encontrar su familia definitiva.",
            age: 2,
            sex: "hembra",
            status: "normal",
            images: [
                "https://images.unsplash.com/photo-1533738363-b7f9aef128ce"
            ],
            priority: "alta",
            isAdopted: false
        },
        {
            id: 6,
            name: "Leo",
            shdescription: "Muy tranquilo y acostumbrado a niños.",
            description: "Leo es un gato adulto muy equilibrado. Está acostumbrado a convivir con niños y otros gatos. Es independiente pero disfruta la compañía.",
            age: 6,
            sex: "macho",
            status: "normal",
            images: [
                "https://images.unsplash.com/photo-1507149833265-60c372daea22"
            ],
            priority: "normal",
            isAdopted: true
        }
    ];
    
    const [selectedSex, setSelectedSex] = useState<string>("todos");
    const [selectedAgeRange, setSelectedAgeRange] = useState<string>("todos");
    const [selectedPriority, setSelectedPriority] = useState<string>("todos");

    const filteredCats = cats.filter(cat => {
        if (selectedSex !== 'todos' && cat.sex !== selectedSex) return false;
        if (selectedAgeRange !== 'todos') {
            if (selectedAgeRange === 'cachorro' && cat.age > 1) return;
            if (selectedAgeRange === 'joven' && (cat.age <= 1 || cat.age > 36)) return false;
            if (selectedAgeRange === 'adulto' && (cat.age <= 4 || cat.age > 7)) return false;
            if (selectedAgeRange === 'senior' && cat.age <= 7) return false;
        }
        if (selectedPriority !== 'todos' && cat.priority !== selectedPriority) return false;
        
        return true;
    });

    return (
        <main className="flex min-h-screen items-center justify-center p-8 bg-[#F6F1FB]">
            <section
                id="cats"
                className="w-full max-w-7xl bg-[#E9E1F3] rounded-xl shadow-md py-16 px-6"
            >
                <div className="mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4 text-gray-800">
                            Gatos en Adopción
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Conoce a todos nuestros felinos que buscan un hogar lleno de amor.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
                        <h3 className="text-xl mb-4 text-gray-800">
                            Filtrar por:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm mb-2 text-black">Sexo</label>
                                <select
                                    value={selectedSex}
                                    onChange={(e) => setSelectedSex(e.target.value)}
                                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6A4A8A]"
                                >
                                    <option value="todos">Todos</option>
                                    <option value="macho">Macho</option>
                                    <option value="hembra">Hembra</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-black">Edad</label>
                                <select
                                    value={selectedAgeRange}
                                    onChange={(e) => setSelectedAgeRange(e.target.value)}
                                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6A4A8A]"
                                >
                                    <option value="todos">Todas las edades</option>
                                    <option value="cachorro">Cachorro (0-1 año)</option>
                                    <option value="joven">Joven (1-3 años)</option>
                                    <option value="adulto">Adulto (3-7 años)</option>
                                    <option value="senior">Senior (7+ años)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-black">
                                    Prioridad de Adopción
                                </label>
                                <select
                                    value={selectedPriority}
                                    onChange={(e) => setSelectedPriority(e.target.value)}
                                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#6A4A8A]"
                                >
                                    <option value="todos">Todas las prioridades</option>
                                    <option value="urgente">🔴 Urgente</option>
                                    <option value="alta">🟡 Alta</option>
                                    <option value="normal">🟢 Normal</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-gray-600">
                            {filteredCats.length === cats.length ? (
                                <p>Mostrando todos los gatos {cats.length}</p>
                            ) : (
                                <p>
                                    Mostrando {filteredCats.length} de {cats.length} gatos
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {filteredCats.map((cat) => (
                            <Link key={cat.id} href={`/cats/${cat.id}`}>
                                <CatCard {...cat} />
                            </Link>
                        ))}
                    </div>
                    <div className="text-center">
                        <a
                            href="https://docs.google.com/forms/d/137J_fztI0y11rra4NhO9tvJ4nya14dUhJ6sNMO3F9og/edit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#805BA6] hover:bg-[#6A4A8A] text-white px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
                        >
                            Solicitar Adopción
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};



export default CatsPage;