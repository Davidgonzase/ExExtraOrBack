import { Characterfromapi, locationfromapi } from "../types.ts";

export const Location={
    residents:async (parent:locationfromapi):Promise<Characterfromapi[]>=>{
        if(parent.residents.length==0)return []
        const arr = parent.residents.map((e)=>{const split =e.split("/");return split.at(split.length-1)})
        let numbers=""
        arr.forEach((e)=>{numbers+=e+","})
        const content = await fetch("https://rickandmortyapi.com/api/character/"+numbers)
        const result = await content.json() as Characterfromapi[]
        return result
    }
}