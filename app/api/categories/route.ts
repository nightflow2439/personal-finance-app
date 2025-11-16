import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function GET() {
  const records = await prisma.category.findMany();
  return NextResponse.json(records);
}