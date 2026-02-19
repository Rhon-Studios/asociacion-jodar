"use client";
import React, { ComponentProps, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Props = ComponentProps<"div"> & {
    onSaved?: () => void;
};

type AnimalForm = {
    name: string;
    shdescription: string;
    description: string;
    age: number;
    sex: "macho" | "hembra";
    status: "normal" | "reservado" | "acogido";
    images: string[];
    priority: "urgente" | "alta" | "normal";
    isAdopted: boolean;
};

const EditAnimal = ({ onSaved, ...rest }: Props) => {
    const searchParams = useSearchParams();
    const animalId = searchParams.get("id");

    const [form, setForm] = useState<AnimalForm>({
        id: animalId,
        name: "",
        age: 0,
        sex: ("" as any),
        shdescription: "",
        description: "",
        status: ("" as any),
        images: [],
        priority: ("" as any),
        isAdopted: false,
    });

    useEffect(() => {
        if (animalId) {
        fetch(`/api/animals?id=${animalId}`)
            .then((res) => res.json())
            .then((data) => {
                setForm({
                    name: data.name,
                    age: data.age, 
                    sex: data.sex, 
                    shdescription: data.shdescription, 
                    description: data.description,
                    status: data.status,
                    images: data.images.map((img: { url: string }) => img.url), 
                    priority: data.priority,
                    isAdopted: data.isAdopted,
                });
            });
        }
    }, [animalId]);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const target = e.target;
        const name = target.name;

        if (target instanceof HTMLInputElement && target.type === "checkbox") {
            setForm(prev => ({
                ...prev,
                [name]: target.checked
            }));
        } else {
            setForm(prev => ({
                ...prev,
                [name]: target.value
            }));
        }
    };

    const handleImageChange = (index: number, value: string) => {
        const newImages = [...form.images];
        newImages[index] = value;
        setForm((prev) => ({ ...prev, images: newImages }));
    };

    const handleAddImage = () => setForm((prev) => ({ ...prev, images: [...prev.images, ""] }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const method = animalId ? "PUT" : "POST";
        await fetch("/api/animals", { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
        if (onSaved) onSaved();
    };

    return (
        <div className="bg-[#E9E1F3]">
            <div className="max-w-4xl mx-auto p-6 ">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-[#805BA6] to-[#6A4A8A] px-8 py-6">
                        <h2 className="text-3xl text-white flex items-center gap-3">
                            {animalId ? "Editar Gato" : "Añadir Gato"}
                        </h2>
                        <p className="text-[#E9E1F3] mt-2">
                            {animalId ? "Actualiza la información del gato" : "Añade un nuevo gato al sistema"}
                        </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-xl text-gray-800 border-b-2 border-[#6A4A8A] pb-2">
                                Información Básica
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">
                                        Nombre del Gato
                                    </label>
                                    <input
                                        name="name"
                                        placeholder="Ej: Luna, Simón, Mimi"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="text-black placeholder-gray-600 w-full px-4 py-3 rounded-lg transition-all
                                        border border-gray-300 
                                        focus:outline-none focus:ring-2 focus:ring-[#6A4A8A] focus:border-transparent
                                        [&:not(:focus):not(:placeholder-shown)]:ring-2 [&:not(:focus):not(:placeholder-shown)]:ring-[#6A4A8A]/60"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700 mb-2">
                                    Descripción Corta
                                </label>
                                <input
                                    name="shdescription"
                                    placeholder="Una frase corta que describa al gato"
                                    value={form.shdescription}
                                    onChange={handleChange}
                                    required
                                    maxLength={100}
                                    className="text-black placeholder-gray-600 w-full px-4 py-3 rounded-lg transition-all
                                        border border-gray-300 
                                        focus:outline-none focus:ring-2 focus:ring-[#6A4A8A] focus:border-transparent
                                        [&:not(:focus):not(:placeholder-shown)]:ring-2 [&:not(:focus):not(:placeholder-shown)]:ring-[#6A4A8A]/60"                                />
                                <p className="text-xs text-gray-500 mt-1">{form.shdescription.length}/100 caracteres</p>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700 mb-2">
                                    Descripción Completa
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="Describe la personalidad, comportamiento y necesidades del gato..."
                                    value={form.description}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="text-black placeholder-gray-600 w-full px-4 py-3 rounded-lg transition-all
                                        border border-gray-300 
                                        focus:outline-none focus:ring-2 focus:ring-[#6A4A8A] focus:border-transparent
                                        [&:not(:focus):not(:placeholder-shown)]:ring-2 [&:not(:focus):not(:placeholder-shown)]:ring-[#6A4A8A]/60"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl text-gray-800 border-b border-[#6A4A8A] pb-2">
                                Características
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2 ">
                                        Sexo
                                    </label>
                                    <div className="text-gray-800 border-0 rounded-md p-2 mb-4">
                                        <select
                                            name="sex"
                                            value={form.sex}
                                            onChange={handleChange}
                                            className={`
                                                text-black w-full px-4 py-3 rounded-lg transition-all
                                                border border-gray-300
                                                focus:outline-none focus:ring-2 focus:ring-[#6A4A8A] focus:border-transparent
                                                ${form.sex ? "ring-2 ring-[#6A4A8A]/60" : ""}
                                            `}
                                        >
                                            <option value="">Seleccionar</option>
                                            <option value="macho">Macho</option>
                                            <option value="hembra">Hembra</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">
                                        Edad
                                    </label>
                                    <input
                                        type="number"
                                        name="age"
                                        placeholder="Ej: 6, 12, 24..."
                                        value={form.age || ""}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                        className="text-black placeholder-gray-600 w-full px-4 py-3 rounded-lg transition-all
                                        border border-gray-300 
                                        focus:outline-none focus:ring-2 focus:ring-[#6A4A8A] focus:border-transparent
                                        [&:not(:focus):not(:placeholder-shown)]:ring-2 [&:not(:focus):not(:placeholder-shown)]:ring-[#6A4A8A]/60"                                    
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl text-gray-800 border-b border-[#6A4A8A] pb-2">
                                Estado
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">
                                        Estado
                                    </label>
                                    <div className="text-gray-800 border-0 rounded-md p-2 mb-4 focus:ring-[#6A4A8A] transition ease-in-out duration-150">
                                        <select
                                            name="status"
                                            value={form.status}
                                            onChange={handleChange}
                                            className={`
                                                text-black w-full px-4 py-3 rounded-lg transition-all
                                                border border-gray-300
                                                focus:outline-none focus:ring-2 focus:ring-[#6A4A8A] focus:border-transparent
                                                ${form.status ? "ring-2 ring-[#6A4A8A]/60" : ""}
                                            `}
                                        >
                                            <option value="">Seleccionar</option>
                                            <option value="normal">Normal</option>
                                            <option value="reservado">Reservado</option>
                                            <option value="acogido">En acogida</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-2">
                                        Prioridad
                                    </label>
                                    <div className="text-gray-800 border-0 rounded-md p-2 mb-4 focus:ring-[#6A4A8A] transition ease-in-out duration-150">
                                        <select
                                            name="priority"
                                            value={form.priority}
                                            onChange={handleChange}
                                            className={`
                                                text-black w-full px-4 py-3 rounded-lg transition-all
                                                border border-gray-300
                                                focus:outline-none focus:ring-2 focus:ring-[#6A4A8A] focus:border-transparent
                                                ${form.priority ? "ring-2 ring-[#6A4A8A]/60" : ""}
                                            `}
                                        >
                                            <option value="">Seleccionar</option>
                                            <option value="normal">Normal</option>
                                            <option value="alta">Alta</option>
                                            <option value="urgente">Urgente</option>
                                        </select>
                                    </div>
                                </div>
                                {animalId && (
                                    <div>
                                        <label className="block text-sm text-gray-700 mb-2">
                                            Adoptado:
                                        </label>
                                        <label>
                                            <input 
                                                
                                                type="checkbox"
                                                name="isAdopted"
                                                checked={form.isAdopted}
                                                onChange={handleChange}
                                                className="hidden peer"
                                            />
                                            <span className="relative mx-5 w-8 h-8 flex justify-center items-center bg-gray-100 border-2 border-[#8B6FB1] rounded-md shadow-md transition-all duration-500 peer-checked:border-[#6A4A8A] peer-checked:bg-[#E9E1F3] peer-hover:scale-105">
                                                <span className="absolute inset-0 bg-gradient-to-br from-[#6A4A8A] to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse" />
                                                <svg 
                                                    fill="currentColor" 
                                                    viewBox="0 0 20 20" 
                                                    className="hidden w-5 h-5 text-white peer-checked:block transition-transform duration-500 transform scale-50 peer-checked:scale-100" 
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path 
                                                        clipRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" 
                                                        fillRule="evenodd" 
                                                    />
                                                  </svg>
                                            </span>
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl text-gray-800 border-b border-[#6A4A8A] pb-2">
                                Imagen
                            </h3>
                            <div className="w-full max-w-sm mx-auto py-10">
                                <div className="h-[300px] w-full rounded-lg shadow-lg flex flex-col items-center justify-between p-3 gap-2 bg-[#E9E1F3]/40">
                                    <div className="flex-1 w-full border-2 border-dashed border-[#6A4A8A] rounded-lg flex flex-col items-center justify-center text-center">
                                        <svg
                                            className="h-24 mb-2"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path 
                                                d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10
                                                   C19.2091 10 21 11.7909 21 14
                                                   C21 15.4806 20.1956 16.8084 19 17.5
                                                   M7 10C4.79086 10 3 11.7909 3 14
                                                   C3 15.4806 3.8044 16.8084 5 17.5
                                                   M12 12V21
                                                   M12 12L15 15
                                                   M12 12L9 15" 
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p className="text-gray-800 text-sm">
                                            Buscar ficheros para importar.
                                        </p>
                                    </div>
                                    <label
                                        htmlFor="file"
                                        className="w-full h-10 px-3 rounded-lg cursor-pointer flex items-center justify-between bg-[#E9E1F3] text-gray-800"
                                    >
                                        <span className="text-sm flex-1 text-center">
                                            No se ha seleccionado archivo
                                        </span>
                                        <svg
                                            className="h-6 w-6 text-[#6A4A8A] bg-[#E9E1F3]/10 rounded-full p-1 shadow"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M5 5h14M10 3h4v2h-4zM6 10l1 9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-9"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </label>55
                                    <input
                                        id="file"
                                        type="file"
                                        name="image"
                                        onChange={handleChange}
                                        className="hidden"
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="bg-[#805BA6] hover:bg-[#6A4A8A] text-white rounded px-4 py-2 mt-2">
                            {animalId ? "Actualizar" : "Crear"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditAnimal;
