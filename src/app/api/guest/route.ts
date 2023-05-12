import { NextRequest, NextResponse } from "next/server";
import { createGuest, getGuests, GuestI } from "../../../../lib/prisma/guest";

export async function POST(req: NextRequest) {
  const body: GuestI = await req.json();
  const resp = await createGuest({ name: body.name });
  return !resp.error ? NextResponse.json({ message: "Guest Created" }) : NextResponse.json({ message: resp.error }, { status: 500 });
}

export async function GET(req: NextRequest) {
  const resp = await getGuests();
  return !resp.error ? NextResponse.json({ guests: resp.guests }) : NextResponse.json({ message: resp.error }, { status: 500 });
}
