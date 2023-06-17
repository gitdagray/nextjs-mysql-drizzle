import { NextResponse } from "next/server"
import getRandomQuote from "@/lib/getRandomQuote"

export async function GET(request: Request) {
    const quote = await getRandomQuote()

    return NextResponse.json(quote)
}