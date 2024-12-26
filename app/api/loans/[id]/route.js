import { NextResponse } from "next/server";
import loans from "@/data/loans.json";

export async function GET(req, { params }) {
  const { id } = params;
  const loan = loans.find((loan) => loan.id === parseInt(id));

  return NextResponse.json(loan);
}