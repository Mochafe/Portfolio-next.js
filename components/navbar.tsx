import Link from "next/link"
import Image from "next/image"
import LinkNavbar from "./linkNavbar"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface Active {
    home: boolean,
    works: boolean,
    contact: boolean
}

export default function Navbar() {
    const [active, setActive] = useState<Active>({
        home: true,
        works: false,
        contact: false
    })
    let urlTest = useRouter().pathname;

    console.log(urlTest);


    useEffect(() => {
        switch (urlTest) {
            case "/":
                setActive(
                    {
                        home: true,
                        works: false,
                        contact: false
                    }
                );
                break;
            case "/works":
                setActive(
                    {
                        home: false,
                        works: true,
                        contact: false
                    }
                )
                break;
            case "/contact":
                setActive(
                    {
                        home: false,
                        works: false,
                        contact: true
                    }
                )
                break;
        }
    }, [useRouter().pathname])



    return (
        <nav className="bg-slate-100 border-t h-16 w-screen md:h-screen md:w-28 fixed bottom-0 flex md:flex-col md:border-r z-10">
            <Link href="/" className="hidden md:block">
                <Image className="md:mx-auto mt-3" src="/logo_florian_pasquet.png" width="100" height="73" alt="logo" draggable="false" />
            </Link>
            <ul className="md:mt-[30vh] w-full flex md:flex-col justify-center text-xl">
                <LinkNavbar href="/" name="Accueil" active={active.home} />
                <LinkNavbar href="/works" name="Projets" active={active.works} />
                <LinkNavbar href="/contact" name="Contact" active={active.contact} />
            </ul>
        </nav>
    )
}