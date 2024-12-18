import { useEffect, useState } from "react"
import { GetRandomFact } from "../services/Facts"
import { useCatImage } from "../services/hooks/useCatImage"
import './style.css'


const useCatFact=()=>{
    const [fact, setFact] = useState(null)
    const refreshRandomFact=()=>{
        GetRandomFact().then(setFact)
    }
    useEffect(()=>{
        refreshRandomFact
    },[])
    return {fact,refreshRandomFact}

}

export function App() {   
    const {fact,refreshRandomFact}=useCatFact() 
    const {ImageURL}=useCatImage({fact})
    
    const handleOnClick=async()=>{
        refreshRandomFact()
    }

    return (
        <main>
                <h1>app gtos</h1>
                <button onClick={handleOnClick}> Change CAT</button>
            <section>
                {/* renderizado condicional */}
                {fact && <p>{fact}</p>}
                {ImageURL && <img src={ImageURL} alt='cat'/>}
            </section>
        </main>
    )
}

// async function GetRandomFact() {
//     const res=await fetch(RANDOM_FACT)
//     const json=await res.json()
//     setFact(json.fact)
// }
// GetRandomFact()