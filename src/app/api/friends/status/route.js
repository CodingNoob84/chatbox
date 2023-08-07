import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/helper/prismaclient";

export async function POST(req) {
  const { senderId, receiverId, type } = await req.json();
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
    if (existingFriendship.length > 0) {
      if (type === "cancelreq") {
        const result = await prisma.friends.delete({
          where: {
            id: existingFriendship[0].id,
          },
        });
        return NextResponse.json(null);
      }
      // If an existing friendship is found, update it with the new type
      const updatedFriendship = await prisma.friends.update({
        where: {
          id: existingFriendship[0].id,
        },
        data: {
          type,
        },
      });
      return NextResponse.json(updatedFriendship);
    } else {
      const newFriendship = await prisma.friends.create({
        data: {
          senderId,
          receiverId,
          type,
        },
      });
      return NextResponse.json(newFriendship);
    }
  } catch (error) {
    return NextResponse.json({ message: "error", error: error });
  }
}
