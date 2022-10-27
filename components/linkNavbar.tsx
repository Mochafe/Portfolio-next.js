import Link from "next/link"

interface LinkNavbarInfo {
    href?: string,
    name?: string
}
export default function LinkNavbar(info: LinkNavbarInfo) {
    return (
        <Link href={(info.href) ? info.href : "#"}>
            <li className="w-full hover:bg-slate-200 hover:scale-105 hover:border-2 text-center py-3 transition-all duration-300">
                {info.name}
            </li>
        </Link>
    )
}