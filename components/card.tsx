import Image from "next/image"

interface CardInfo {
    key?: any,
    thumbnail?: string,
    title?: string,
    description?: string,
    link?: string,
    placeholder?: boolean
}
export default function Card(info: CardInfo) {
    if(info.placeholder) {
        return (
            <div key={info.key} className="hover:scale-105 hover:shadow-lg transition-all duration-300 border rounded-lg w-full h-auto flex flex-col justify-between">
                <div>
                    <div className="w-full h-[240px] rounded-t-lg bg-gray-400 animate-pulse" />
                </div>
                <div>
                    <div className="mx-auto mt-2 w-40 h-4 bg-gray-400 rounded-xl animate-pulse"></div>
                </div>
                <div>
                    <div className="px-2 pt-3 my-3 xl:my-0 text-sm text-center mt-3 min-h-[80px] max-h-[80px] overflow-y-clip ">
                        <div className="w-64 h-3 mx-auto rounded-xl bg-gray-400 animate-pulse"></div>
                        <div className="w-40 h-3 mx-auto rounded-xl bg-gray-400 animate-pulse mt-1"></div>
                        <div className="w-64 h-3 mx-auto rounded-xl bg-gray-400 animate-pulse mt-1"></div>
                    </div>
                </div>
                <div className="mb-3 min-h-fit mx-auto w-20 h-9 bg-gray-400 animate-pulse rounded-xl">
                    
                </div>
            </div>
        )
    } else {
        return (
            <div key={info.key} className="hover:scale-105 hover:shadow-lg transition-all duration-300 border rounded-lg w-full h-auto flex flex-col justify-between">
                <div>
                    <Image src={(info.thumbnail) ? info.thumbnail : ""} width="315" height="250" alt="test" className="w-full max-h-max rounded-t-lg" />
                </div>
                <div>
                    <h3 className="text-center mt-2 font-semibold text-lg">{info.title}</h3>
                </div>
                <div>
                    <p className="px-2 my-3 xl:my-0 text-sm text-center mt-3 min-h-[80px] max-h-[80px] overflow-y-clip ">
                        {info.description}
                    </p>
                </div>
                <div className="mb-3 min-h-fit mx-auto">
                    <a target="_blank" rel="noreferrer" href={info.link} className="p-2 bg-blue-400 hover:bg-blue-500 transition-all duration-300 rounded-lg border border-blue-500 text-white text-center ml-3 block w-[80px]">Voir</a>
                </div>
            </div>
        )
    }
    
}