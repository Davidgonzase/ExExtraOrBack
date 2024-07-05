import { Characterfromapi, episodefromapi, locationfromapi } from "../types.ts";

export const Character={
    origin:async (parent:Characterfromapi):Promise<locationfromapi>=>{ 
        if(parent.origin.name=="unknown"){
            return{
                name: "unknown",
                url: "unknown",
                residents:[],
            }
        }
        const result = await fetch(parent.origin.url)
        const content = await result.json() as locationfromapi
        return content
    },
    location:async (parent:Characterfromapi):Promise<locationfromapi>=>{
        if(parent.origin.name=="unknown"){
            return{
                name: "unknown",
                url: "unknown",
                residents:[],
            }
        }
        const result = await fetch(parent.location.url)
        const content = await result.json() as locationfromapi
        return content
    },
    episode:async (parent:Characterfromapi):Promise<episodefromapi[]>=>{
        const arr = parent.episode.map((e)=>{const split =e.split("/");return split.at(split.length-1)})
        let numbers=""
        arr.forEach((e)=>{numbers+=e+","})
        const content = await fetch("https://rickandmortyapi.com/api/episode/"+numbers)
        const result = await content.json() as episodefromapi[]
        return result
    },

}