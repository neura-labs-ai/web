export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const preferredRegion = "auto";

import { isAuthenticated } from "@/lib/utils";
import { prisma } from "@/server/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

interface ContextParams {
	params: {
		name: string;
	};
}

export async function GET(request: NextRequest, context: ContextParams) {
	const session = await getServerSession();

	if (!isAuthenticated(session)) {
		return NextResponse.json(
			{
				error: "Unauthorized access",
			},
			{
				status: 401,
			}
		);
	}

	const user = await prisma.user.findUnique({
		where: {
			id: context.params.name,
		},
	});

	console.log("user", user);

	return NextResponse.json(user);
}
