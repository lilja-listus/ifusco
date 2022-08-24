import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { ObjectId } from "mongodb";
import path from "path";

import { UserResolver } from "../resolvers/UserResolver";
import { AuthResolver } from "../resolvers/AuthResolver";
import { ObjectIdScalar } from "./object-id.scalar";
import { TypegooseMiddleware } from "../middleware/typegoose";
import { AbstractResolver } from "../resolvers/AbstractResolver";
import { ParticipantResolver } from "../resolvers/ParticipantResolver";

export default async function createSchema(): Promise<GraphQLSchema> {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      AuthResolver,
      AbstractResolver,
      ParticipantResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    globalMiddlewares: [TypegooseMiddleware],
    scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    validate: false,
  });
  return schema;
}
