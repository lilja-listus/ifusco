import { InputType, Field } from "type-graphql";
import { Participant } from "../entity/Participant";

@InputType()
export class ParticipantInput implements Partial<Participant> {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  nameFirst?: string;

  @Field({ nullable: true })
  nameLast?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  university?: string;
}
