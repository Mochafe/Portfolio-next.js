import { useState, useEffect } from "react"
import Card from "../components/card";

export default function Works() {
    const [games, setGames] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/api/games").then((res) => {
            res.json().then((games) => {
                setGames(games);
                setLoading(false);
    console.log(games.games[0]);

            })
        })
    }, [])


    return (
        <main>
            <h1 className="font-bold text-center text-2xl">Projets</h1>
            <div className="w-[80%] min-h-[33vh] mx-auto p-4 border rounded-lg grid grid-cols-4 gap-4">
                <Card thumbnail={(games)? games.games[0].cover_url : ""} title={games.games[0].title} description={games.games[0].short_text} link={games.games[0].url} />
            </div>

        </main>
    )
}

