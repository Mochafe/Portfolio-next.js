import Link from "next/link"

interface LinkNavbarInfo {
    href?: string,
    name?: string,
    active?: boolean,
    onClick?: ((e: any) => void) | undefined,
}
export default function LinkNavbar(info: LinkNavbarInfo) {
    return (
        <Link href={(info.href) ? info.href : "#"} onClick={(info.onClick)? info.onClick : undefined} className={"md:w-auto md:h-auto flex flex-col justify-center p-3 rounded-2xl md:rounded-none hover:bg-slate-200 md:hover:scale-105 hover:border-2 text-center py-1 transition-all duration-300 " + ((info.active)? "bg-blue-400 translate-y-[-8px]" : "")}>
            <li>
                {info.name}
            </li>
        </Link>
    )
}