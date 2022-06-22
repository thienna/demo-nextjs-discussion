import { type NextRequest, NextResponse } from "next/server";

function sleep({ms}: { ms: any }) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const middleware = async (req: NextRequest) => {
    console.log('all middleware', req)
    const { pathname } = req.nextUrl;

    if (
        pathname.startsWith("/api") || //  exclude all API routes
        pathname.startsWith("/static") || // exclude static files
        pathname.includes(".") // exclude all files in the public folder
    )
        return NextResponse.next();

    if (pathname === "/") {
        const isBot = true; // fake for now

        if (isBot) {
            // for bots, let the request go through
            await sleep({ms: 200})
            req.nextUrl.pathname = "/login";
            return NextResponse.rewrite(req.nextUrl);
            return NextResponse.next();
        }

        // verify session
        await sleep({ms: 1000})
        const isLoggedIn = true

        // here you'd do some verify on the cookie, or even connect
        // to another service to confirm the session validity

        if (!isLoggedIn) {
            // show the login page in place of `/` (url still shows '/')
            req.nextUrl.pathname = "/login";
            return NextResponse.rewrite(req.nextUrl);
        }

        return NextResponse.next();
    }
};
