import React, { ComponentProps } from "react";
import {ImageWithFallBack} from "@/components/ui/ImageWithFallBack";
type Props = ComponentProps<"div"> &{

};
const Hero= ({ ...rest}: Props) => {
    return (
        <section className="relative h-[500px] overflow-hidden">
            <ImageWithFallBack
                src="/catphotos/Cat3.jpg"
                alt="Cat Photo"
                className="w-full h-full object-cover object-[50%_30%] -scale-x-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 h-full flex items-center">
                    <div className="text-gray-100 max-w-2xl">
                        <h2 
                            className="text-5xl mb-4"
                        >
                            Dale un hogar a un felino necesitado
                        </h2>
                        <p
                            className="text-xl mb-8 text-gray-200"
                        >
                            En Jódar, Jaén trabajamos cada día para rescatar, cuidar y encontrar familias para gatos abandonados.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="../adopcion/page.tsx"
                                className="bg-[#805BA6] hover:bg-[#6A4A8A] text-white px-8 py-3 rounded-lg transition-colors duration-200"
                            >
                                Ver gatos en adopcion
                            </a>
                            <a
                                href="#donaciones"
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg border-2 border-white transition-colors duration-200"
                            >
                                Ayúdanos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Hero;