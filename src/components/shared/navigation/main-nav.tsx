"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-0 px-4 md:px-10 flex items-center fixed top-0 w-full justify-between z-40 backdrop-blur-md bg-white/30 dark:bg-black/30">
      <div className="flex flex-grow basis-0">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Logo Grow Agency"
          width={90}
          height={0}
          priority
        />
      </div>

      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent`}
      >
        <ul className="flex flex-col md:flex-row text-lg [&>li>a]:text-white [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/services">Servicios</Link>
          </li>
          <li>
            <Link href="/about">Acerca de</Link>
          </li>
          <li>
            <Link href="/us">Nosotros</Link>
          </li>
          <li className="md:hidden">
            <Link href="https://api.whatsapp.com/send/?phone=59177285576&text&type=phone_number&app_absent=0&wame_ctl=1">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="hidden md:flex flex-grow basis-0 justify-end">
        <ul className="flex text-lg [&>li>a]:text-white">
          <li>
            <Link href="https://api.whatsapp.com/send/?phone=59177285576&text&type=phone_number&app_absent=0&wame_ctl=1">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
