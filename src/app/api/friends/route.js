import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/helper/prismaclient";

export async function POST(req) {
  const { senderId, receiverId } = await req.json();
  try {
    const existingFriendship = await prisma.friends.findMany({
      where: {
        OR: [
          {
            senderId: { equals: receiverId },
            receiverId: { equals: senderId },
          },
          {
            senderId: { equals: senderId },
            receiverId: { equals: receiverId },
          },
        ],
      },
    });
    return NextResponse.json(existingFriendship);
  } catch (error) {
    return NextResponse.json({ message: "error", error: error });
  }
}
