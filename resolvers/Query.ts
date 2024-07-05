import { Characterfromapi } from "../types.ts";
import { character } from "./query/characterfunction.ts";
import { charactersByIds } from "./query/charactersByIds.ts";

export const Query={
    character: async (_:unknown,args:{id:string}):Promise<Characterfromapi>=>{
        return await character(args.id)
    },
    charactersByIds: async(_:unknown,args:{ids:string[]}):Promise<Characterfromapi[]>=>{
        return await charactersByIds(args.ids)
    } 
}