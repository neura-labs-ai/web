export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const preferredRegion = "auto";

import { COLLECTIONS, DATABASE_NAME } from "@/helpers/constants";
import { isAuthenticated } from "@/helpers/utils";
import clientPromise from "@/lib/db/connect";
import { getServerSession, User } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

interface ContextParams {
	params: {
		name: string;
	};
}

export async function GET(request: NextRequest, context: ContextParams) {
	const session = await getServerSession();

	console.log("context", context);

	// if (!isAuthenticated(session)) {
	// 	return NextResponse.json(
	// 		{
	// 			error: "Unauthorized access",
	// 		},
	// 		{
	// 			status: 401,
	// 		}
	// 	);
	// }

	const user = await (await clientPromise)
		.db(DATABASE_NAME)
		.collection<User>(COLLECTIONS.USERS)
		.findOne({ name: context.params.name });

	console.log("user", user);

	return NextResponse.json(user);
}
