import React, { ComponentProps } from "react";
import AnimalCarousel from "../../../components/ui/AnimalCarousel";
type Props = ComponentProps<"div"> &{

};

const CatsSummary= ({ ...rest}: Props) => {
    
    return (
        <section id="catssummary" className="relative bg-[#E9E1F3] rounded-xl p-6 shadow-md py-16 px-4 sm:px-6 lg:px-8 mb-13">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl mb-4 text-gray-800">Nuestros gatos</h2>
                </div>
            </div>
            <AnimalCarousel/>
            <div className="absolute bottom-7 right-10">
                <a
                    href="/cats"
                    className="inline-block bg-[#805BA6] hover:bg-[#6A4A8A] text-white px-5 py-2 rounded-lg transition-colors duration-200"
                >
                    Ver más gatos
                </a>
            </div>
        </section>
    )
}

export default CatsSummary;