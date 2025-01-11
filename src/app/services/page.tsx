import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function ServicesPage() {
  return (
    <section className="bg-black h-screen w-screen flex items-center justify-center relative overflow-hidden">
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            // icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
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
    title: "Planificación estrategica",
    description: "descripción.",
    header: <Skeleton />,
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Gestion de redes sociales",
    description: "descripción.",
    header: <Skeleton />,
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Publicidad en redes sociales",
    description: "descripción.",
    header: <Skeleton />,
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automatización y Diseño de Funnels",
    description: "Coreos masivos, embudos de venta.",
    header: <Skeleton />,
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Diseño Gráfico y Web",
    description:
      "Creacion de identidades visuales, materiales graficos y paginas web a medida.",
    header: <Skeleton />,
    // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
