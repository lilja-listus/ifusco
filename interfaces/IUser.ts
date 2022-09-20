export interface IUser {
  readonly _id: string;
  readonly email: string;
  readonly password?: string;
  readonly nameFirst: string;
  readonly isParticipant?: boolean;
}
