import { isAuthenticated } from "@/helpers/utils";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const session = await getServerSession();

	// todo - add a check for the user role
	if (isAuthenticated(session)) {
		return NextResponse.json(
			{
				error: "Unauthorized access",
			},
			{
				status: 401,
			}
		);
	}

	return NextResponse.json({ message: "hello world" });
}
