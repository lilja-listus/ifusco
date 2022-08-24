import { Resolver, Query, UseMiddleware, Arg, Mutation } from "type-graphql";
import { ObjectId } from "mongodb";
import { isAuth } from "../middleware/isAuth";
import { ObjectIdScalar } from "../schema/object-id.scalar";
import { Participant, ParticipantModel } from "../entity/Participant";
import { ParticipantInput } from "../types/ParticipantInput";
import { RegistrationInput } from "../types/RegistrationInput";

@Resolver(() => Participant)
export class ParticipantResolver {
  @Mutation(() => Participant)
  async registerParticipant(
    @Arg("input")
    { email, nameFirst, nameLast, country, university }: RegistrationInput
  ): Promise<Participant> {
    const existingUser = await ParticipantModel.findOne({
      email,
    });

    if (existingUser) {
      throw new Error("The participant has already registered");
    }

    const participant = new ParticipantModel({
      email,
      nameFirst,
      nameLast,
      country,
      university,
    });

    await participant.save();

    return participant;
  }

  @Mutation(() => Participant)
  @UseMiddleware(isAuth)
  async editParticipant(
    @Arg("input") participantInput: ParticipantInput
  ): Promise<Participant> {
    const { id, nameFirst, nameLast, country, university } = participantInput;

    const updatedParticipant = await ParticipantModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        nameFirst,
        nameLast,
        country,
        university,
      },
      { new: true }
    );

    if (!updatedParticipant) {
      throw new Error("Participant not found");
    }
    return updatedParticipant;
  }

  @Query(() => Participant, { nullable: true })
  async Participant(
    @Arg("participantId", () => ObjectIdScalar) participantId: ObjectId
  ) {
    return await ParticipantModel.findById(participantId);
  }
}
