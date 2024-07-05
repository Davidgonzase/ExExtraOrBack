import {startStandaloneServer} from "@apollo/server/standalone"
import {ApolloServer} from "@apollo/server"
import { typeDefs } from "./gql/schema.ts";
import { Query } from "./resolvers/Query.ts";
import { Episode } from "./resolvers/Episode.ts";
import { Character } from "./resolvers/Character.ts";
import { Location } from "./resolvers/Location.ts";

const server = new ApolloServer({typeDefs,resolvers:{
  Query,
  Episode,
  Location,
  Character
}})

const {url} = await startStandaloneServer(server);
console.log("Running at "+url)