import { useEffect, useState } from "react"
import './style.css'
import { GetRandomFact } from "../services/Facts"
export function App() {
    
    // const CAT_ENDPOINT_IMAGE_URL= `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    function useCatImage({fact}){
        const [ImageURL, setImageURL] = useState(null)
        useEffect(() => {
            if(!fact) return
            const first_word = fact.split(' ',3).join('%20%20')
            const url_IMG=`https://cataas.com/cat/says/${first_word}?font=Impact&fontSize=30&fontColor=rojo&fontBackground=none&position=center&json=false`
            setImageURL(url_IMG)

        }, [fact])

        return {ImageURL}
    }
    const [fact, setFact] = useState(null)
    const {ImageURL}=useCatImage({fact})

    
    useEffect(() => {
        GetRandomFact().then(setFact)
        // async function GetRandomFact() {
        //     const res=await fetch(RANDOM_FACT)
        //     const json=await res.json()
        //     setFact(json.fact)
        // }
        // GetRandomFact()
    }, [])


   
    const handleOnClick=async()=>{
        const new_fact= await GetRandomFact()
        setFact(new_fact)
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