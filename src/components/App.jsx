import { useEffect, useState } from "react"
import './style.css'
export function App() {
    const RANDOM_FACT = 'https://catfact.ninja/fact'
    // const CAT_ENDPOINT_IMAGE_URL= `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    const [fact, setFact] = useState(null)
    const [ImageURL, setImageURL] = useState(null)
    useEffect(() => {
        fetch(RANDOM_FACT)
            .then(res => {
                if(!res.ok) throw new Error('error fetching fact')
                return res.json()
            })
            .then(data => {


                const { fact } = data
                setFact(fact)
            })
            

        // async function GetRandomFact() {
        //     const res=await fetch(RANDOM_FACT)
        //     const json=await res.json()
        //     setFact(json.fact)
        // }
        // GetRandomFact()

    }, [])
    useEffect(() => {
        if(!fact) return
        const first_word = fact.split(' ',3).join('%20%20')
        const url_IMG=`https://cataas.com/cat/says/${first_word}?font=Impact&fontSize=30&fontColor=rojo&fontBackground=none&position=center&json=false`
        setImageURL(url_IMG)
        
    }, [fact])
    

    return (
        <main>
                <h1>app gtos</h1>
            <section>
                {/* renderizado condicional */}
                {fact && <p>{fact}</p>}
                {ImageURL && <img src={ImageURL} alt='cat'/>}
            </section>
        </main>
    )
}