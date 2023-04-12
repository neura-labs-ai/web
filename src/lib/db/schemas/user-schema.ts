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
    /** 
     * ? WARNING
     * This is a user type on the User Session from NextAuth. This should not be used to query users from the id. Use there name.
     * Github names are unique so we can use that to query user without worrying about multiple users with the same name.
     */
	public id?: string;

	@prop({ type: String })
	public name?: string;

	@prop({ type: String })
	public email?: string;

	@prop({ type: String })
	public emailVerified?: Date | null;

	@prop({ type: String })
	public image?: string;
}

export const UserModel = getModelForClass(User);
