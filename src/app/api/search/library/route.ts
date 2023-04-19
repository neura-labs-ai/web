import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/server/db";

type Body = {
  id: string;
};

export async function POST(res: NextRequest) {
  const body: Body = await res.json();

  const data = await prisma.library.findUnique({
    where: {
      id: decodeURI(body.id),
    },
  });

  if (!data) {
    return NextResponse.json(
      { message: "Library not found" },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(data, {
    status: 200,
  });
}
