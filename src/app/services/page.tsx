import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function ServicesPage() {
  return (
    <section className="bg-black min-h-screen w-full flex items-center justify-center relative overflow-hidden py-16 px-4">
      <BentoGrid className="max-w-4xl mx-auto w-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn(i === 3 || i === 6 ? "md:col-span-2" : "", "w-full")}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Planificación estratégica",
    description:
      "Desarrollamos estrategias personalizadas para alcanzar tus objetivos de negocio.",
    header: <Skeleton />,
  },
  {
    title: "Gestión de redes sociales",
    description:
      "Manejamos tus perfiles en redes sociales para aumentar tu presencia online.",
    header: <Skeleton />,
  },
  {
    title: "Publicidad en redes sociales",
    description:
      "Creamos y gestionamos campañas publicitarias efectivas en plataformas sociales.",
    header: <Skeleton />,
  },
  {
    title: "Automatización y Diseño de Funnels",
    description:
      "Implementamos correos masivos y embudos de venta para optimizar tus conversiones.",
    header: <Skeleton />,
  },
  {
    title: "Diseño Gráfico y Web",
    description:
      "Creación de identidades visuales, materiales gráficos y páginas web a medida.",
    header: <Skeleton />,
  },
];
