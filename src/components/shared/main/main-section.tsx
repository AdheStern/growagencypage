"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import Link from "next/link";

export default function MainSection() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <section className="bg-black h-screen w-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <h2 className="text-3xl md:text-7xl font-bold text-white text-center">
          Transformamos ideas en resultados
        </h2>
        <h2 className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          Impulsamos tu marca con soluciones que marcan la diferencia
        </h2>
        <Modal>
          {" "}
          <ModalTrigger className="bg-white text-black  flex justify-center group/modal-btn">
            {" "}
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              {" "}
              Habla con nosotros{" "}
            </span>{" "}
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              {" "}
              📞{" "}
            </div>{" "}
          </ModalTrigger>{" "}
          <ModalBody>
            {" "}
            <ModalContent>
              {" "}
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                {" "}
                Comunicanos tus{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  {" "}
                  ideas{" "}
                </span>{" "}
                💡{" "}
              </h4>{" "}
              <div className="flex justify-center items-center">
                {" "}
                {images.map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{ rotate: Math.random() * 20 - 10 }}
                    whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                    whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                  >
                    {" "}
                    <Image
                      src={image}
                      alt="bali images"
                      width="500"
                      height="500"
                      className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                    />{" "}
                  </motion.div>
                ))}{" "}
              </div>{" "}
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                {" "}
                <div className="flex items-center justify-center">
                  {" "}
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    {" "}
                    Planificación Estratégica{" "}
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center justify-center">
                  {" "}
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    {" "}
                    Gestion de Redes{" "}
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center justify-center">
                  {" "}
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    {" "}
                    Publicidad{" "}
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center justify-center">
                  {" "}
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    {" "}
                    Diseño Gráfico{" "}
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center justify-center">
                  {" "}
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    {" "}
                    Edición de video{" "}
                  </span>{" "}
                </div>{" "}
                <div className="flex items-center justify-center">
                  {" "}
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    {" "}
                    Embudos de venta{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </ModalContent>{" "}
            <ModalFooter className="gap-4">
              {" "}
              <Link href="https://api.whatsapp.com/send/?phone=59177285576&text&type=phone_number&app_absent=0&wame_ctl=1">
                <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black">
                  {" "}
                  Iniciar Conversación{" "}
                </button>{" "}
              </Link>
            </ModalFooter>{" "}
          </ModalBody>{" "}
        </Modal>
      </motion.div>
    </section>
  );
}
