import React, { ComponentProps } from "react";
import {ImageWithFallBack} from "@/components/ui/ImageWithFallBack";
type Props = ComponentProps<"div"> &{
  
};
const SobreNosotrosPage= ({ ...rest}: Props) => {
  return (
      <section id="nosotros" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                      <h2 className="text-4xl mb-6 text-gray-800">Sobre nosotros</h2>
                      <div className="space-y-4 text-gray-600 text-lg">
                          <p>
                              La <strong className="text-[#6A4A8A]">Asociación de Felinos Protegidos</strong> nació en octubre de 2023 con el propósito de mejorar la calidad de vida de los gatos callejeros en Jódar. Esta iniciativa fue impulsada por dos jóvenes comprometidas con la protección animal, quienes, al observar la difícil situación de las colonias felinas en el municipio, decidieron actuar.
                          </p>
                          <p>
                              Desde sus inicios, la asociación ha crecido gracias al apoyo de voluntarios locales, consolidándose como un proyecto comunitario basado en la solidaridad y el respeto por los animales. Nuestro trabajo se centra en la gestión ética de las colonias felinas mediante la aplicación del método CER (Captura, Esterilización y Retorno), el rescate de gatos en situación de riesgo y la búsqueda de hogares responsables para aquellos que no pueden regresar a la calle.
                          </p>
                          <p>
                              Comprometidos con el bienestar felino en Jódar
                          </p>
                      </div>
                      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                          <div className="bg-[#E9E1F3] p-4 rounded-lg">
                              <p className="text-3xl text-[#6A4A8A] mb-1">+1</p>
                              <p className="text-gray-600 text-sm">Gatos Rescatados</p>
                          </div>
                          <div className="bg-[#E9E1F3] p-4 rounded-lg">
                              <p className="text-3xl text-[#6A4A8A] mb-1">+1</p>
                              <p className="text-gray-600 text-sm">Adopciones Exitosas</p>
                          </div>
                          <div className="bg-[#E9E1F3] p-4 rounded-lg">
                              <p className="text-3xl text-[#6A4A8A] mb-1">24/7</p>
                              <p className="text-gray-600 text-sm">Cuidado y Atención</p>
                          </div>
                      </div>
                  </div>
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                      <ImageWithFallBack
                        src="/catphotos/Cat4.jpg"
                        alt="Voluntarios cuidando gatos"
                        className="w-full h-full object-cover"
                      />
                  </div>
              </div>
          </div>
      </section>
  );
};



export default SobreNosotrosPage;