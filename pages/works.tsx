import { useState, useEffect } from "react"
import Card from "../components/card";


export default function Works() {

    function CardSupport() {
        if(games !== null && games !== undefined) {
            let count = 0;
            return(
            games.map((game: any) => (
            <Card key={count++} thumbnail={ game["cover_url"] } title={ game["title"] } description={ game["short_text"] } link={ game["url"] }  />
            ))
            )
        }
    }
    const [games, setGames] = useState<[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/api/games").then((res) => {
            res.json().then((games) => {
                setGames(games);
                setLoading(false);
            })
        })
    }, [])

    return (
        <main>
            <h1 className="font-bold text-center text-2xl">Projets</h1>
            <div className="w-[80%] min-h-[33vh] mx-auto p-4 border rounded-lg grid grid-cols-4 gap-4">
                { CardSupport() }
            </div>

        </main>
    )
}

