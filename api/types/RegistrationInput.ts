import { InputType, Field } from "type-graphql";

@InputType()
export class RegistrationInput {
  @Field()
  email: string;

  @Field()
  nameFirst: string;

  @Field({ nullable: true })
  nameLast: string;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  university: string;

  @Field({ nullable: true })
  hasPaid: boolean;
}
