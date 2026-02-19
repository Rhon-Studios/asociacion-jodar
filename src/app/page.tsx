"use client";

import React from "react";
import {useRouter} from "next/navigation";
import Hero from "./hero/page"
import SobreNosotrosPage from "./nosotros/page"
import ContactPage from "./contact/page"
import Donaciones from "./donaciones/page"
import CatsSummary from "./cats/Summary/page"

export default function Home() {
    const router = useRouter();
    
    return (
        <div>
            <Hero/>
            <main className="flex min-h-1/2 flex-col items-right justify-between p-24 bg-[#F6F1FB]">
                <CatsSummary/>
                <div className="border-b border-gray-300 mb-6"></div>
                <SobreNosotrosPage/>
                <div className="border-b border-gray-300 mb-6"></div>
                <Donaciones />
                <ContactPage/>
            </main>
        </div>
    );
}


