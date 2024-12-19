import { useEffect, useState } from "react"
import { GetRandomFact } from "../Facts"


export const useCatFact=()=>{
    const [fact, setFact] = useState(null)
    const refreshRandomFact=()=>{
        GetRandomFact().then(setFact)
    }
    useEffect(()=>{
        refreshRandomFact() 
    },[])
    return {fact,refreshRandomFact}

}
