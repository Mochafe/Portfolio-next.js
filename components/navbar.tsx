import Link from "next/link"
import Image from "next/image"
import LinkNavbar from "./linkNavbar"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface Active{
    home: boolean,
    works: boolean
}

export default function Navbar() {
    const [active, setActive] = useState<Active>({
        home: true,
        works: false
    })
    let urlTest = useRouter().pathname;


    useEffect(() => {
        switch(urlTest) {
            case "/":
                setActive(
                    {
                        home: true,
                        works: false
                    }
                );
            break;
            case "/works":
                setActive(
                    {
                        home: false,
                        works: true
                    }
                )
        }
    }, [useRouter().pathname])



    return (
        <nav className="bg-slate-100 border-t h-24 w-screen md:h-screen md:w-28 fixed bottom-0 flex md:flex-col border-r z-10">
            <Link href="/" className="hidden md:block">
                <Image className="md:mx-auto mt-3" src="/logo_florian_pasquet.png" width="100" height="73" alt="logo" draggable="false" />
            </Link>
            <ul className="md:mt-[30vh] w-full flex md:flex-col justify-center md:border-y text-xl">
                <LinkNavbar href="/" name="Accueil" active={active.home}/>
                <LinkNavbar href="/works" name="Projets" active={active.works}/>
            </ul>
        </nav>
    )
}