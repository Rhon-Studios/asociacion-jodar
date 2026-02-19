import React, { ComponentProps } from "react";
import {DonationCard} from "@/components/ui/DonationCard";
type Props = ComponentProps<"div"> &{

};
const Donaciones= ({ ...rest}: Props) => {
    return (
        <section id="donaciones" className="bg-[#E9E1F3] rounded-xl p-6 shadow-md py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl mb-4 text-gray-800">Como Ayudar</h2>
                    <p className="text-gray-600 text-lg">
                        Tu apoyo es fundamental para seguir rescatando y cuidando a nuestros felinos.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <DonationCard
                        icon="heart"
                        title="Bizum"
                        description="Donación rápida y segura"
                        action="+34 664 43 50 87"
                    />
                    <DonationCard 
                        icon="euro" 
                        title="Teaming" 
                        description="Solo 1€ al mes marca la diferencia" 
                        action="Únete al Teaming"
                        link="https://www.teaming.net/asociacionfelinosprotegidosdejodar-7razones"
                    />
                </div>
                <DonationCard
                    icon="box"
                    title="Donaciones de Material"
                    description="Arena, comida, rascadores, juguetes y más"
                    action="Envía a: C. Tiburcio Vargas, 5, 23500 Jódar, Jaén"
                    link="https://maps.app.goo.gl/zKTmbogyMWYXnKsR6"
                    isPriority={true}
                />
            </div>
        </section>
    )
};



export default Donaciones;