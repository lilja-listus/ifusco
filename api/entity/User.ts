import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  email: string;

  @Field()
  @Property({ required: true })
  password: string;

  @Field()
  @Property({ required: true })
  nameFirst: string;

  @Field({ nullable: true })
  @Property()
  isParticipant?: boolean;
}

export const UserModel = getModelForClass(User);
