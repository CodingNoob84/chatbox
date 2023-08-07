import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/helper/prismaclient";

export async function GET(request, { params }) {
  const { friendshipId } = params;
  console.log(friendshipId);
  try {
    const allMessages = await prisma.Messages.findMany({
      where: {
        friendshipId: friendshipId,
      },
    });
    return NextResponse.json(allMessages);
  } catch (error) {
    return NextResponse.json({ message: "error", error: error });
  }
}
