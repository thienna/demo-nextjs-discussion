import {NextFetchEvent, NextRequest, NextResponse} from "next/server";

export default function middleware(request: NextRequest, event: NextFetchEvent) {
    console.log('middleware post etail', request)
    return NextResponse.next();
}
