import Link from "next/link"

interface LinkNavbarInfo {
    href?: string,
    name?: string
}
export default function LinkNavbar(info: LinkNavbarInfo) {
    return (
        <Link href={(info.href) ? info.href : "#"}>
            <li className="w-full hover:bg-slate-200 text-center py-3">
                {info.name}
            </li>
        </Link>
    )
}