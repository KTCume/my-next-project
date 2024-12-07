import { NextRequest,NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log("middleware: " + request.url);

    return NextResponse.next();
}

export const config = {};