import { prop, getModelForClass, ModelOptions } from "@typegoose/typegoose";
import type { ProviderType } from "next-auth/providers";

@ModelOptions({
	schemaOptions: {
		collection: "accounts",
		timestamps: true,
		autoIndex: true,
	},
})
class Account {
	@prop({ type: String })
	public providerAccountId?: string;

	@prop({ type: String })
	public provider?: string;

	@prop({ type: String })
	public userId?: string;

	@prop({ type: String })
	public type?: ProviderType;
}

export const AccountModel = getModelForClass(Account);
