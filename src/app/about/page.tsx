"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function AboutPage() {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center overflow-hidden mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-4 md:m-14 sm:m-10">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Compromiso con la Calidad
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Nos aseguramos de ofrecer soluciones de alta calidad, siempre
              orientadas a satisfacer las necesidades de nuestros clientes con
              resultados medibles y sostenibles.
            </p>
          </div>
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[25%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Innovación y Creatividad
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Creemos en la innovación constante y en la creación de estrategias
            disruptivas que no solo sigan las tendencias, sino que las lideren.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Enfoque en nuestros resultados y Ética profesional
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Nuestra prioridad es generar resultados tangibles. Cada acción y
              estrategia que diseñamos está orientada a optimizar los resultados
              comerciales de nuestros clientes.
            </p>
          </div>
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
}
