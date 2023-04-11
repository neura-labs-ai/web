import { Account } from "next-auth";
import type {
	Adapter,
	AdapterUser,
	AdapterAccount,
	AdapterSession,
	VerificationToken,
} from "next-auth/adapters";
import { UserModel } from "./schemas/user-schema";
import { AccountModel } from "./schemas/accounts-schema";
import { SessionsModel } from "./schemas/sessions-schema";
import { VerificationTokenModel } from "./schemas/v-token-schema";

/**
 * Our custom adapter for NextAuth using mongoose ORM.
 * @param client
 * @param options
 * @returns
 */
export default function CustomMongoDBAdaptor(): Adapter {
	return {
		//@ts-ignore
		async createUser(user: AdapterUser) {
			await UserModel.create({
				id: user.id,
				email: user.email,
				emailVerified: user.emailVerified,
			});
		},
		//@ts-ignore
		async getUser(id: AdapterAccount) {
			return (await UserModel.findOne({ id })) ?? null;
		},
		//@ts-ignore
		async getUserByEmail(email: string) {
			return (await UserModel.findOne({ email })) ?? null;
		},
		//@ts-ignore
		async getUserByAccount({ providerAccountId, provider }: Account) {
			const account = await AccountModel.findOne({ providerAccountId });

			if (!account) return null;

			return await UserModel.findOne({ id: account.userId });
		},
		//@ts-ignore
		async updateUser(user: AdapterUser) {
			return UserModel.findOneAndUpdate(
				{ id: user.id },
				{
					$set: {
						email: user.email,
						emailVerified: user.emailVerified,
					},
				},
				{
					new: true,
					upsert: true,
				}
			);
		},
		async deleteUser(userId: string) {
			await Promise.all([
				UserModel.deleteOne({ id: userId }),
				AccountModel.deleteMany({ userId }),
				SessionsModel.deleteMany({ userId }),
			]);
		},
		//@ts-ignore
		async linkAccount(account: AdapterAccount) {
			return await AccountModel.create({
				providerAccountId: account.providerAccountId,
				provider: account.provider,
				userId: account.userId,
				type: account.type,
			});
		},
		//@ts-ignore
		async unlinkAccount({ providerAccountId, provider }: Account) {
			return await AccountModel.findOneAndDelete({
				providerAccountId,
				provider,
			});
		},
		//@ts-ignore
		async createSession({ sessionToken, userId, expires }: AdapterSession) {
			return await SessionsModel.create({
				sessionToken,
				userId,
				expires,
			});
		},
		//@ts-ignore
		async getSessionAndUser(sessionToken: string) {
			const session = await SessionsModel.findOne({ sessionToken });

			if (!session) return null;

			const user = await UserModel.findOne({ id: session.userId });

			if (!user) return null;

			return {
				session,
				user,
			};
		},
		//@ts-ignore
		async updateSession({ sessionToken }: AdapterSession) {
			return await SessionsModel.findOneAndUpdate(
				{
					sessionToken,
				},
				{
					$set: {
						expires: new Date(),
					},
				},
				{
					new: true,
					upsert: true,
				}
			);
		},
		//@ts-ignore
		async deleteSession(sessionToken: string) {
			return await SessionsModel.deleteOne({ sessionToken });
		},
		//@ts-ignore
		async createVerificationToken({
			identifier,
			expires,
			token,
		}: VerificationToken) {
			return await VerificationTokenModel.create({
				identifier,
				expires,
				token,
			});
		},
		//@ts-ignore
		async useVerificationToken({ identifier, token }: VerificationToken) {
			return await VerificationTokenModel.findOneAndDelete({
				identifier,
				token,
			});
		},
	};
}
