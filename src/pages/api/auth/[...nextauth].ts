import NextAuth from "next-auth";
import { authOptions } from "src/utils/affinidi/auth/authOptions";

export default NextAuth(authOptions);
