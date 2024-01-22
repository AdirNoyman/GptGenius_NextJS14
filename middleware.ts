import { authMiddleware } from '@clerk/nextjs';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// The routes that don't need authentication should be added to the publicRoutes array
export default authMiddleware({
  publicRoutes: ['/'],
});

// The routes that do need authentication should be added to the matcher array
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
