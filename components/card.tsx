import Image from "next/image"

interface CardInfo{
    key?: any,
    thumbnail?: string,
    title?: string,
    description?: string,
    link?: string
}
export default function Card(info: CardInfo) {
    return(
        <div key={info.key} className="hover:scale-105 hover:shadow-lg transition-all duration-300 border rounded-lg min-h-[80vh]">
            <Image src={(info.thumbnail)? info.thumbnail : ""} width="315" height="250" alt="test" className="w-full rounded-t-lg"/>
            <h3 className="text-center mt-2 font-semibold text-lg">{info.title}</h3>

            <p className="px-3 text-center mt-3">
                {info.description}
            </p>

            <a href={info.link} className="p-3 bg-blue-400 rounded-lg border border-blue-500 text-white">Voir</a>
        </div>
    )
}