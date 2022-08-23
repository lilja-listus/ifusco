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
  @Property()
  nameFirst: string;

  @Field({ nullable: true })
  @Property()
  nameLast: string;

  @Field({ nullable: true })
  @Property()
  country: string;

  @Field({ nullable: true })
  @Property()
  university: string;

  @Field({ nullable: true })
  @Property()
  hasPaid: boolean;
}

export const UserModel = getModelForClass(User);
