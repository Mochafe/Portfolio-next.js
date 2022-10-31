import Link from "next/link"
import Image from "next/image"
import LinkNavbar from "./linkNavbar"
import { useRouter } from "next/router";
import { useState } from "react";


export default function Navbar() {
    const [url, setUrl] = useState("");

    function updateActive() {
        setUrl(useRouter().pathname);
        console.log(url);
    }
    return (
        <nav className="bg-slate-100 border-t h-24 w-screen md:h-screen md:w-28 fixed bottom-0 flex md:flex-col border-r z-10">
            <Link href="/" className="hidden md:block" onClick={updateActive}>
                <Image className="md:mx-auto mt-3" src="/logo_florian_pasquet.png" width="100" height="73" alt="logo" draggable="false" />
            </Link>
            <ul className="my-3 md:mt-[30vh] w-full flex md:flex-col gap-4 justify-center md:border-y text-xl">
                <LinkNavbar href="/" name="Accueil" onClick={updateActive} />
                <LinkNavbar href="/works" name="Projets" onClick={updateActive} />
            </ul>
        </nav>
    )
}