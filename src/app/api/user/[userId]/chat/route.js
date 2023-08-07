import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/helper/prismaclient";

export async function POST(request, { params }) {
  const data = await request.json();
  const { userId } = params;
  console.log(userId);
  try {
    return NextResponse.json({ friends, globals });
  } catch (error) {
    return NextResponse.json({ message: "error", error: error });
  }
}
