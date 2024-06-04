import { authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:[
        '/',
        '/events/:id',
        '/a[i/webhook/clerk,',
        '/api/webhook/strip',
        '/api/uploadthing'

    ], 
    ignoredRoutes: [
        '/a[i/webhook/clerk,',
        '/api/webhook/strip',
        '/api/uploadthing'
    ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};