
const RANDOM_FACT = 'https://catfact.ninja/fact'

export const GetRandomFact=async ()=>{
    const res = await fetch(RANDOM_FACT)
    if (!res.ok) throw new Error('error fetching fact')
    const data = await res.json()
    const { fact } = data
    return fact
}