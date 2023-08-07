import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/helper/prismaclient";

export async function POST(request) {
  const data = await request.json();
  console.dir(data);
  try {
    const newMessage = await prisma.Messages.create({
      data,
    });
    return NextResponse.json(newMessage);
  } catch (error) {
    return NextResponse.json({ message: "error", error: error });
  }
}
