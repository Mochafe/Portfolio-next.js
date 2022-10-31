import Link from "next/link"

interface LinkNavbarInfo {
    href?: string,
    name?: string,
    active?: boolean,
    onClick?: ((e: any) => void) | undefined,
}
export default function LinkNavbar(info: LinkNavbarInfo) {
    return (
        <Link href={(info.href) ? info.href : "#"} onClick={(info.onClick)? info.onClick : undefined} className={"md:w-auto md:h-auto flex flex-col justify-center p-3 md:rounded-none hover:bg-blue-500 hover:text-white md:hover:scale-105 border-x text-center py-1 transition-all duration-300 bg-slate-100 " + ((info.active)? "md:translate-y-0 translate-y-[-16px] border-t rounded-t-lg md:rounded-none h-[80px] md:h-auto" : "")}>
            <li>
                {info.name}
            </li>
        </Link>
    )
}