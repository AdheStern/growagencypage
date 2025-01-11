import Image from "next/image";
import Link from "next/link";

export default function MainNav() {
  return (
    <main>
      <header className="py-0 px-10 flex items-center fixed top-0 w-full justify-between z-40 backdrop-blur-md bg-white/30 dark:bg-black/30 ">
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

        <nav>
          <ul className="flex text-sm [&>li>a]:text-white [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
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
          </ul>
        </nav>

        <nav className="flex flex-grow basis-0 justify-end">
          <ul className="flex text-sm [&>li>a]:text-white">
            <li>
              <Link href="https://api.whatsapp.com/send/?phone=59177285576&text&type=phone_number&app_absent=0&wame_ctl=1">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
