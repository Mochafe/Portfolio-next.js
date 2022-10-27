import Link from "next/link"
import Image from "next/image"
import LinkNavbar from "./linkNavbar"


export default function Navbar() {
    return (
        <nav className="bg-slate-100 h-screen w-28 fixed border-r">
            <Link href="/">
                <Image className="mx-auto mt-3" src="/logo_florian_pasquet.png" width="100" height="73" alt="logo" />
            </Link>

            <ul className="mt-[30vh] flex flex-col justify-center border-t border-b">
                <LinkNavbar href="/" name="Accueil" />
                <LinkNavbar href="/works" name="Projets" />
            </ul>
        </nav>
    )
}