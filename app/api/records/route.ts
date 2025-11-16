import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET() {
  const records = await prisma.record.findMany({
    include: { category: true },
    orderBy: { date: "desc" }
  });
  return NextResponse.json(records);
}

export async function POST(req: Request) {
  const { amount, note, categoryId, userId } = await req.json();

  const record = await prisma.record.create({
    data: {
      amount,
      note,
      categoryId,
      userId
    }
  });

  return NextResponse.json(record);
}
