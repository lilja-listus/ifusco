import {
  Resolver,
  Query,
  UseMiddleware,
  Arg,
  Ctx,
  Mutation,
  FieldResolver,
  Root,
} from "type-graphql";
import { ObjectId } from "mongodb";
import { MyContext } from "../types/MyContext";
import { isAuth } from "../middleware/isAuth";
import { User, UserModel } from "../entity/User";
import { Abstract, AbstractModel } from "../entity/Abstract";
import { ObjectIdScalar } from "../schema/object-id.scalar";
import { AbstractInput } from "../types/AbstractInput";

@Resolver(() => Abstract)
export class AbstractResolver {
  @Query(() => Abstract, { nullable: true })
  async abstract(
    @Arg("abstractId", () => ObjectIdScalar) abstractId: ObjectId
  ) {
    return await AbstractModel.findById(abstractId);
  }

  // edit for to be the admin?
  @Query(() => [Abstract])
  @UseMiddleware(isAuth)
  async abstracts() {
    return await AbstractModel.find();
  }

  @Query(() => Abstract)
  @UseMiddleware(isAuth)
  async abstractsByAuthor(@Ctx() ctx: MyContext) {
    return await AbstractModel.findOne({ author: ctx.res.locals.userId });
  }

  @Mutation(() => Abstract)
  @UseMiddleware(isAuth)
  async addAbstract(
    @Arg("input") abstractInput: AbstractInput,
    @Ctx() ctx: MyContext
  ): Promise<Abstract> {
    const abstract = new AbstractModel({
      ...abstractInput,
      author: ctx.res.locals.userId,
    } as Abstract);

    await abstract.save();
    return abstract;
  }

  @Mutation(() => Abstract)
  @UseMiddleware(isAuth)
  async editAbstract(
    @Arg("input") abstractInput: AbstractInput,
    @Ctx() ctx: MyContext
  ): Promise<Abstract> {
    const { id, title, text, language } = abstractInput;
    const abstract = await AbstractModel.findOneAndUpdate(
      {
        _id: id,
        author: ctx.res.locals.userId,
      },
      {
        title,
        text,
        language,
      },
      { runValidators: true, new: true }
    );
    if (!abstract) {
      throw new Error("Abstract not found");
    }
    return abstract;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteAbstract(
    @Arg("abstractId", () => ObjectIdScalar) abstractId: ObjectId,
    @Ctx() ctx: MyContext
  ): Promise<Boolean | undefined> {
    const deleted = await AbstractModel.findOneAndDelete({
      _id: abstractId,
      author: ctx.res.locals.userId,
    });

    if (!deleted) {
      throw new Error("Abstract not found");
    }
    return true;
  }

  @FieldResolver()
  async author(@Root() abstract: Abstract): Promise<User | null> {
    return await UserModel.findById(abstract.author);
  }
}
