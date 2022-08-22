import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";
import { Ref } from "../types/Ref";
import { User } from "./User";

@ObjectType()
export class Abstract {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  title: string;

  @Field()
  @Property({ required: true })
  text: string;

  @Field()
  @Property({ required: true })
  language: string;

  @Field(() => User)
  @Property({ ref: User, required: true })
  author: Ref<User>;
}

export const AbstractModel = getModelForClass(Abstract);
