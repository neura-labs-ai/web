import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

// See lib/auth.ts for the authOptions object
export default NextAuth(authOptions)