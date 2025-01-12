import { auth } from "@/auth"
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/") {
    const newUrl = new URL("/", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|view|_next/static|_next/image|favicon.ico).*)"],
}