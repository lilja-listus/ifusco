import { InputType, Field } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class AbstractInput {
  @Field({ nullable: true })
  id?: ObjectId;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field()
  language: string;
}
