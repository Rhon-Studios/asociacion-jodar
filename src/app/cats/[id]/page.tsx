"use client"

import React, {ComponentProps} from "react";
import CatsPage from "@/app/cats/page";
import { useParams, useRouter } from "next/navigation";
import {Calendar, CheckCircle2, House, Mail, Users, XCircle} from "lucide-react";
import {ImageWithFallBack} from "@/components/ui/ImageWithFallBack";

type Props = ComponentProps<"div"> &{

};

const catsData = [
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

const CatPage= ({ ...rest}: Props) => {
    const { id } = useParams();
    const numericId = Number(id);
    const cat = catsData.find(c => c.id === numericId);

    if (!cat) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl mb-4 text-gray-800">Gato no encontrado</h2>
                    <button
                        className="bg-[#805BA6] hover:bg-[#6A4A8A] text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }
    
    const priorityConfig = {
        urgente: { label: '🔴 Adopción Urgente', color: 'bg-red-100 text-red-700 border-red-300', description: 'Este gatito necesita un hogar urgentemente' },
        alta: { label: '🟡 Prioridad Alta', color: 'bg-yellow-100 text-yellow-700 border-yellow-300', description: 'Este gatito necesita un hogar pronto' },
        normal: { label: '', color: '', description: '' }
    }

    const sexLabel = cat.sex === 'macho' ? '♂️ Macho' : '♀️ Hembra';
    
    const statusConfig = {
        normal: { label: "Disponible"},
        reservado: { label: "Reservado"},
        acogido: { label: "En acogida"}
    }
    
    return (
        <main className="flex min-h-screen items-center justify-center p-8 bg-[#F6F1FB]">
            <section
                id="cats"
                className="w-full max-w-7xl bg-[#E9E1F3] rounded-xl shadow-md py-16 px-6"
            >
                <div className="mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-6">
                                <div className="relative">
                                    <div className="relative h-[500px]">
                                        <ImageWithFallBack
                                            src={cat.images[0]}
                                            alt={`${cat.name} - Foto`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden mb-8">
                                {!cat.isAdopted ? (
                                    <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-6 text-center">
                                        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                                        <h3 className="text-2xl mb-2 text-emerald-700">¡Disponible para Adopción!</h3>
                                        <p className="text-emerald-600 mb-4">
                                            {cat.name} está esperando encontrar su hogar definitivo
                                        </p>
                                        <a
                                            href="https://docs.google.com/forms/d/137J_fztI0y11rra4NhO9tvJ4nya14dUhJ6sNMO3F9og/edit"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-[#805BA6] hover:bg-[#6A4A8A text-white px-8 py-4 rounded-lg transition-colors duration-200 text-lg w-full"
                                        >
                                            Solicitar Adopción
                                        </a>
                                    </div>
                                ) : (
                                    <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-6 text-center">
                                        <XCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                        <h3 className="text-2xl mb-2 text-gray-700">Adoptado</h3>
                                        <p className="text-gray-600">
                                            {cat.name} ya ha encontrado su hogar para siempre
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <div className="mb-6">
                                <h1 className="text-5xl mb-4 text-gray-800">{cat.name}</h1>
                                <div className="flex items-center gap-4 text-lg text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-[#6A4A8A]" />
                                        <span>{cat.age}</span>
                                    </div>
                                    <span className="text-gray-400">•</span>
                                    <div className="flex items-center gap-2">
                                        <span>{sexLabel}</span>
                                    </div>
                                    <span className="text-gray-400">•</span>
                                    <div className="flex items-center gap-2">
                                        <House className="w-5 h-5 text-[#6A4A8A]" />
                                        <span>
                                          {statusConfig[cat.status as keyof typeof statusConfig].label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {cat.priority !== 'normal' && (
                                <div className={`mb-6 px-4 py-3 rounded-lg border-2 ${priorityConfig[cat.priority as keyof typeof priorityConfig].color}`}>
                                    <p className="text-lg">
                                        {priorityConfig[cat.priority as keyof typeof priorityConfig].label}
                                    </p>
                                    <p className="text-sm mt-1">
                                        {priorityConfig[cat.priority as keyof typeof priorityConfig].description}
                                    </p>
                                </div>
                            )}
                            <div className="mb-8">
                                <h2 className="text-2xl mb-3 text-gray-800">Sobre {cat.name}</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {cat.description}
                                </p>
                            </div>
                            <div className="hidden lg:block">
                                {!cat.isAdopted ? (
                                    <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-6 text-center">
                                        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                                        <h3 className="text-2xl mb-2 text-emerald-700">¡Disponible para Adopción!</h3>
                                        <p className="text-emerald-600 mb-4">
                                            {cat.name} está esperando encontrar su hogar definitivo
                                        </p>
                                        <a
                                            href="https://docs.google.com/forms/d/137J_fztI0y11rra4NhO9tvJ4nya14dUhJ6sNMO3F9og/edit"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-[#805BA6] hover:bg-[#6A4A8A text-white px-8 py-4 rounded-lg transition-colors duration-200 text-lg w-full"
                                        >
                                            Solicitar Adopción
                                        </a>
                                    </div>
                                ) : (
                                    <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-6 text-center">
                                        <XCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                        <h3 className="text-2xl mb-2 text-gray-700">Adoptado</h3>
                                        <p className="text-gray-600">
                                            {cat.name} ya ha encontrado su hogar para siempre
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl mb-6 text-gray-800 text-center">Proceso de Adopción</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-[#F6F1FB] rounded-xl p-6 shadow-md text-center">
                                <div className="bg-[#E9E1F3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl text-[#6A4A8A]">1</span>
                                </div>
                                <h3 className="text-black text-xl mb-2">Completa el Formulario</h3>
                                <p className="text-gray-600">
                                    Rellena el formulario de solicitud de adopción con tus datos y preferencias
                                </p>
                            </div>
                            <div className="bg-[#F6F1FB] rounded-xl p-6 shadow-md text-center">
                                <div className="bg-[#E9E1F3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl text-[#6A4A8A]">2</span>
                                </div>
                                <h3 className="text-black text-xl mb-2">Entrevista y Visita</h3>
                                <p className="text-gray-600">
                                    Nos pondremos en contacto contigo para conoceros mejor y concertar una visita
                                </p>
                            </div>
                            <div className="bg-[#F6F1FB] rounded-xl p-6 shadow-md text-center">
                                <div className="bg-[#E9E1F3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl text-[#6A4A8A]">3</span>
                                </div>
                                <h3 className="text-black text-xl mb-2">Bienvenido a Casa</h3>
                                <p className="text-gray-600">
                                    Si todo va bien, ¡tu nuevo compañero felino podrá ir a su hogar definitivo!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
    
}

export default CatPage;

