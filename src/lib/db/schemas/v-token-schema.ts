import { prop, getModelForClass, ModelOptions } from "@typegoose/typegoose";

@ModelOptions({
	schemaOptions: {
		collection: "verification-tokens",
		timestamps: true,
		autoIndex: true,
	},
})
class VerificationTokens {
	@prop({ type: String })
	public identifier?: string;

    @prop({ type: String })
    public token?: string;

    @prop({ type: Date })
    public expires?: Date;
}

export const VerificationTokenModel = getModelForClass(VerificationTokens);
