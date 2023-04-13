import { isAuthenticated } from "@/helpers/utils";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return new Response("Unauthorized Access", { status: 401 });

	return NextResponse.json({ message: "hello world" });
}
