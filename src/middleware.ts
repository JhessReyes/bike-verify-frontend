import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up', '/forgot-password', '/reset-password', '/landing']);
const isAppRoute = createRouteMatcher(['/(.*)']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
  //No need to protect public routes
  if (isPublicRoute(req)) return;

  // Restrict admin route to users with specific role
  if (isAdminRoute(req)) auth().protect({ role: 'org:admin' });

  // Restrict dashboard routes to logged in users
  if (isAppRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};