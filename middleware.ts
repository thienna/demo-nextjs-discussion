import { type NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    console.log('middleware at: ', pathname)
    if (
        pathname.includes('.') || // exclude all files in the public folder
        pathname.includes('/_next') || // exclude all next internal routes
        pathname.startsWith('/static') || // exclude static files
        pathname.startsWith('/api') //  exclude all API routes
    ) {
        return NextResponse.next()
    }

    // check is user logged in
    const isLoggedIn = req.cookies.get('logged_in')
    console.log('isLoggedIn:', isLoggedIn)
    if (!isLoggedIn) {
        console.log('NOT logged in')
        return NextResponse.rewrite(new URL(`/login`, req.url)) // rewrite login page
    }

    // user is logged in
    if (pathname === '/login') {
        // user is logged in and path is login > redirect to home page
        return NextResponse.redirect(new URL(`/`, req.url))
    }

    console.log('logged in')
    return NextResponse.next()
}
