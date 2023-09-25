import { NextResponse } from 'next/server'
 
export function middleware(request) {
    if (!request.cookies.has("gestanca_token")){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
 
export const config = {
  matcher: [
    '/categorias/:path*',
    '/farmacia/:path*',
    '/despesas/:path*',
    '/contas/:path*',
  ]
}