import { useState, useEffect } from "react"
import Card from "../components/card";


export default function Works() {

    let count = 0;

    function CardGames() {
        if(games !== undefined) {      
            return(
            games.map((game: any) => (
            <Card key={count++} thumbnail={ game["cover_url"] } title={ game["title"] } description={ game["short_text"] } link={ game["url"] }  />
            ))
            )
        }
    }

    function CardRepo() {
        if(repos !== undefined) {
            return(
                repos.map((repo: any) => (
                    <Card key={count++} thumbnail={ repo["image"] } title={ repo["repo"] } description={ repo["description"] } link={ repo["link"] }  />
                ))
            )
        }
    }
    const [games, setGames] = useState<[]>([]);
    const [repos, setRepo] = useState<[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/api/games").then((res) => {
            res.json().then((games) => {
                setGames(games);
            });
        fetch("/api/repos").then((res) => {
            res.json().then(repo => {
                setRepo(repo);
                console.log(repo);
            })
        })
        })
    }, [])

    return (
        <main>
            <h1 className="font-bold text-center text-2xl">Projets</h1>
            <div className="w-[80%] min-h-[33vh] mx-auto p-4 border rounded-lg grid grid-cols-4 gap-4 ">
                { CardGames() }
                { CardRepo() }
            </div>

        </main>
    )
}

