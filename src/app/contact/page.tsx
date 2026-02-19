import React, { ComponentProps } from "react";
import { Mail, MapPin, Facebook, Instagram } from 'lucide-react';
type Props = ComponentProps<"div"> &{
  
};
const ContactPage= ({ ...rest}: Props) => {
  return (
      <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                  <h2 className="text-4xl mb-4 text-gray-800">Contacto</h2>
                  <p className="text-gray-600 text-lg">
                      ¿Tienes preguntas? Estamos aquí para ayudarte
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md text-center">
                      <div className="bg-[#E9E1F3] p-4 rounded-full inline-block mb-4">
                          <Mail className="w-6 h-6 text-[#6A4A8A]"/>
                      </div>
                      <h3 className="text-black text-lg mb-2">Email</h3>
                      <a
                        href="mailto:gatosjodar@gmail.com"
                        className="text-[#6A4A8A] hover:underline"
                      >
                          gatosjodar@gmail.com
                      </a>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md text-center">
                      <div className="bg-[#E9E1F3] p-4 rounded-full inline-block mb-4">
                          <MapPin className="w-6 h-6 text-[#6A4A8A]" />
                      </div>
                      <h3 className="text-black text-lg mb-2">Dirección</h3>
                      <a
                          href="https://maps.app.goo.gl/2gWAH1ufmCETsdnA8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6A4A8A] hover:underline"
                      >
                          C. Tiburcio Vargas, 5<br />
                          23500 Jódar, Jaén
                      </a>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md text-center">
                      <div className="bg-[#E9E1F3] p-4 rounded-full inline-block mb-4">
                          <Instagram className="w-6 h-6 text-[#6A4A8A]" />
                      </div>
                      <h3 className="text-black text-lg mb-2">Instagram</h3>
                      <a
                          href="https://www.instagram.com/asociacionfelinosprotegidos"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6A4A8A] hover:underline"
                      >
                          @asociacionfelinosprotegidos
                      </a>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md text-center">
                      <div className="bg-[#E9E1F3] p-4 rounded-full inline-block mb-4">
                          <Facebook className="w-6 h-6 text-[#6A4A8A]" />
                      </div>
                      <h3 className="text-black text-lg mb-2">Facebook</h3>
                      <a
                          href="https://www.facebook.com/share/1ATuhNaV3z/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6A4A8A] hover:underline"
                      >
                          Visitar Página
                      </a>
                  </div>
              </div>
          </div>
      </section>
  );
};



export default ContactPage;