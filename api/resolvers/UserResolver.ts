import {
  Resolver,
  Query,
  UseMiddleware,
  Arg,
  Ctx,
  Mutation,
} from "type-graphql";
import { ObjectId } from "mongodb";
import { MyContext } from "../types/MyContext";
import { isAuth } from "../middleware/isAuth";
import { User, UserModel } from "../entity/User";
import { ObjectIdScalar } from "../schema/object-id.scalar";
import { UserInput } from "../types/UserInput";

@Resolver(() => User)
export class UserResolver {
  @Mutation(() => User)
  @UseMiddleware(isAuth)
  async editUser(@Arg("input") userInput: UserInput): Promise<User> {
    const { id, nameFirst } = userInput;

    const updatedUser = await UserModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        nameFirst,
      },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("User not found");
    }
    return updatedUser;
  }

  @Query(() => User, { nullable: true })
  async user(@Arg("userId", () => ObjectIdScalar) userId: ObjectId) {
    return await UserModel.findById(userId);
  }

  @Query(() => User)
  @UseMiddleware(isAuth)
  async currentUser(
    @Ctx()
    ctx: MyContext
  ): Promise<User | null> {
    return await UserModel.findById(ctx.res.locals.userId);
  }
}
