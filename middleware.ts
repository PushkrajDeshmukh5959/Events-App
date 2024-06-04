import { authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:[
        '/',
        '/events/:id',
        '/api/webhook/clerk,',
        '/api/webhook/strip',
        '/api/uploadthing'

    ], 
    ignoredRoutes: [
        '/api/webhook/clerk,',
        '/api/webhook/strip',
        '/api/uploadthing'
    ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};