import { NextResponse } from "next/server";
import loans from "@/data/loans.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");

  if (limit) {
    const filteredLoans = loans.slice(0, parseInt(limit));
    return NextResponse.json(filteredLoans);
  }

  return NextResponse.json(loans);
}