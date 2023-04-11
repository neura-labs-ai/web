import { prop, getModelForClass, ModelOptions } from "@typegoose/typegoose";

@ModelOptions({
	schemaOptions: {
		collection: "users",
		timestamps: true,
		autoIndex: true,
	},
})
export class User {
	@prop({ type: String })
	public id?: string;

	@prop({ type: String })
	public email?: string;

	@prop({ type: String })
	public emailVerified?: Date | null;

	@prop({ type: String, default: null })
	public image?: string;

	@prop({ type: String })
	public name?: string;
}

export const UserModel = getModelForClass(User);