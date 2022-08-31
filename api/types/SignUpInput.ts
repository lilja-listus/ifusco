import { InputType, Field } from "type-graphql";

@InputType()
export class SignUpInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  nameFirst: string;
}
