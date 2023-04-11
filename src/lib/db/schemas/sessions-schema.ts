import { prop, getModelForClass, ModelOptions } from "@typegoose/typegoose";

@ModelOptions({
	schemaOptions: {
		collection: "sessions",
		timestamps: true,
		autoIndex: true,
	},
})
class Sessions {
	@prop({ type: String })
	public userId?: string;

    @prop({ type: String })
    public sessionToken?: string;

    @prop({ type: Date })
    public expires?: Date;
}

export const SessionsModel = getModelForClass(Sessions);
