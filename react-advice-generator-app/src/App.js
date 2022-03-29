import { useEffect, useState } from "react"
import "./App.css"

export default function App() {
    const [advice, setAdvice] = useState({
        id: "00",
        advice: "Loading...",
    })

    const getAdvice = async () => {
        try {
            const response = await fetch("https://api.adviceslip.com/advice")
            const data = await response.json()
            setAdvice(data.slip)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAdvice()
    }, [])

    return (
        <main className="card">
            <p className="card__id">ADVICE #{advice.id}</p>
            <h1 className="card__title">&ldquo;{advice.advice}&rdquo;</h1>
            <img className="card__image card__image--mobile" src="./images/pattern-divider-mobile.svg" alt="Divider" />
            <img className="card__image card__image--desktop" src="./images/pattern-divider-desktop.svg" alt="Divider" />
            <button className="card__button" onClick={getAdvice}>
                <img src="./images/icon-dice.svg" alt="Dice Icon" />
            </button>
        </main>
    )
}
