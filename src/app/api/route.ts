import { hasPermission, isAuthenticated } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const session = await getServerSession();

	if (!hasPermission(session, "ADMIN")) {
		return NextResponse.json(
			{
				error: `Unauthorized access (${session?.user.role ?? "unknown"})`,
			},
			{
				status: 401,
			}
		);
	}

	return NextResponse.json({ message: "hello world" });
}
