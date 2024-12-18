import { useEffect, useState } from "react"

export function useCatImage({fact}){
        const [ImageURL, setImageURL] = useState(null)
        useEffect(() => {
            if(!fact) return
            const first_word = fact.split(' ',3).join('%20%20')
            const url_IMG=`https://cataas.com/cat/says/${first_word}?font=Impact&fontSize=30&fontColor=rojo&fontBackground=none&position=center&json=false`
            setImageURL(url_IMG)

        }, [fact])

        return {ImageURL}
    }