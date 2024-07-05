import { Characterfromapi, episodefromapi } from "../types.ts";

export const Episode={
    characters:async (parent:episodefromapi):Promise<Characterfromapi[]>=>{
        const arr = parent.characters.map((e)=>{const split =e.split("/");return split.at(split.length-1)})
        let numbers=""
        arr.forEach((e)=>{numbers+=e+","})
        const content = await fetch("https://rickandmortyapi.com/api/character/"+numbers)
        const result = await content.json() as Characterfromapi[]
        return result
    }
}