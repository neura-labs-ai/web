import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/server/db";

type Body = {
  id: string;
};

export async function POST(res: NextRequest) {
  try {
    const body: Body = await res.json();

    // Prevents prisma invalid objectId errors.
    // If someone visits /search/1234 (not valid objectId) it will be checked here.
    // This Regex was pulled from the mongoose source code on GitHub.
    const objectIdRegex = /^[a-fA-F0-9]{24}$/;

    if (!objectIdRegex.test(body.id)) {
      return NextResponse.json(
        { message: "Invalid id" },
        {
          status: 400,
        }
      );
    }

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
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
}
