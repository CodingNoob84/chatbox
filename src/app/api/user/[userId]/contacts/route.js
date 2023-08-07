import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/helper/prismaclient";

export async function GET(request, { params }) {
  const { userId } = params;
  console.log(userId);
  try {
    const acceptedFriends = await prisma.friends.findMany({
      where: {
        type: "accepted",
        OR: [
          {
            senderId: userId,
          },
          {
            receiverId: userId,
          },
        ],
      },
      select: {
        senderId: true,
        receiverId: true,
      },
    });
    //console.dir(acceptedFriends);
    const acceptedUserIdswoUserId = acceptedFriends
      .map((item) => [item.senderId, item.receiverId])
      .flat()
      .filter((id) => id !== userId);

    const friends = await prisma.user.findMany({
      where: {
        id: {
          in: acceptedUserIdswoUserId,
        },
      },
      select: {
        id: true,
        name: true,
        image: true,
      },
    });

    const globalswUser = await prisma.user.findMany({
      where: {
        NOT: {
          id: {
            in: acceptedUserIdswoUserId,
          },
        },
      },
      select: {
        id: true,
        name: true,
        image: true,
      },
    });

    const globals = globalswUser.filter((item) => item.id !== userId);

    return NextResponse.json({ friends, globals });
  } catch (error) {
    return NextResponse.json({ message: "error", error: error });
  }
}
