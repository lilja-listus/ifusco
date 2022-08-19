import { GraphQLScalarType, Kind } from "graphql";
import { ObjectId } from "mongodb";

export const ObjectIdScalar = new GraphQLScalarType({
  name: "objectId",
  description: "Mongo Id scalar type",
  parseValue(value: unknown) {
    if (typeof value !== "string") {
            throw new Error("ObjectIdScalar can only parse string values");
          }
    return new ObjectId(value); // client from input variable
  },
  serialize(value: unknown) {
    if (!(value instanceof ObjectId)) {
      throw new Error("ObjectIdScalar can only serialize ObjectId values");
    }
    return value.toHexString();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new ObjectId(ast.value);
    }
    return null;
  },
});

