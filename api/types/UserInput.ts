import { InputType, Field } from "type-graphql";
import { ObjectId } from "mongodb";
import { User } from "../entity/User";

@InputType()
export class UserInput implements Partial<User> {
  @Field({ nullable: true })
  id?: ObjectId;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  nameFirst?: string;
}
