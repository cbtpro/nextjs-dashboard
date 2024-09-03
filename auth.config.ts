import type { NextAuthConfig } from 'next-auth';
 
const basePath = process.env.NODE_ENV === 'development' ? `${process.env.AUTH_URL}` : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/auth`;

export const authConfig = {
  basePath,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;