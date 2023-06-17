import { NextResponse } from "next/server"
import getAllQuotes from "@/lib/getAllQuotes"

export async function GET(request: Request) {
    const quotes = await getAllQuotes()

    return NextResponse.json(quotes)
}