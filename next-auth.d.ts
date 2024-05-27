import { UserRole } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  userId: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
