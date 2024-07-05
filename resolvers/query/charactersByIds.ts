import { Characterfromapi } from "../../types.ts";

export const charactersByIds= async (id:string[]):Promise<Characterfromapi[]>=>{
    const arr = id.map((e)=>{return e+","})
    const result = await fetch("https://rickandmortyapi.com/api/character/"+arr)
    const content = await result.json() 
    return content as Characterfromapi[]
}