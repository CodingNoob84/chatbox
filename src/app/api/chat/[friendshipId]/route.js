import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/helper/prismaclient";

export async function GET(request, { params }) {
  const { friendshipId } = params;
  const page = parseInt(request.nextUrl.searchParams.get("page"));
  console.log("page", page);
  const limit = parseInt(request.nextUrl.searchParams.get("limit")) || 5;
  console.log("limit", limit);
  const skip = (page - 1) * limit;
  console.log(friendshipId);
  try {
    const allMessages = await prisma.Messages.findMany({
      where: {
        friendshipId: friendshipId,
      },
      orderBy: {
        updatedAt: "desc", // 'desc' for descending order, 'asc' for ascending order
      },
      take: parseInt(limit),
      skip: parseInt(skip),
    });
    return NextResponse.json(allMessages);
  } catch (error) {
    return NextResponse.json({ message: "error", error: error });
  }
}
