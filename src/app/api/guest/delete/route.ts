import { GuestI } from "./../../../../../lib/prisma/guest";
import { NextRequest, NextResponse } from "next/server";
import { deleteGuest } from "../../../../../lib/prisma/guest";

export async function POST(req: NextRequest) {
  const body: { data: GuestI } = await req.json();
  console.log(body);
  const resp = await deleteGuest(body.data.name);
  return !resp.error ? NextResponse.json({ message: "Guest Deleted" }) : NextResponse.json({ message: resp.error }, { status: 500 });
}
