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
        let promises: Promise<Response | void>[] = [];
        setLoading(true);
        promises[0] = fetch("/api/games").then((res) => {
            res.json().then((games) => {
                setGames(games);
            });
        promises[1] = fetch("/api/repos").then((res) => {
            res.json().then(repo => {
                setRepo(repo);
            })
        })
        });

        Promise.all(promises).then(() => {
            setLoading(false);

        })
    }, [])

    return (
        <main>
            <h1 className="font-bold text-center text-2xl">Projets</h1>
            <div className="w-[90%] min-h-[33vh] mb-32 md:mb-0 mx-auto p-4 border rounded-lg grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                { CardGames() }
                { CardRepo() }
                <span className="animate-spin">{ (isLoading)? "Loading" : "" }</span>
            </div>

        </main>
    )
}

