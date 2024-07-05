import { GraphQLError } from "graphql";
import { Characterfromapi } from "../../types.ts";

export const character = async (id:string):Promise<Characterfromapi>=>{
    const result = await fetch("https://rickandmortyapi.com/api/character/"+id)
    const content = await result.json() as Characterfromapi
    if(content.error)throw new GraphQLError("Not valid ID",{extensions:{code:content.error}})
    return content
}