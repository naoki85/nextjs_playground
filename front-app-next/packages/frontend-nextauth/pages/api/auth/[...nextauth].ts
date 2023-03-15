import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req) {
        const {email, password} = credentials as {email: string; password: string;};
        if (email !== "naoki85@example.com" || password !== "1234") {
          throw new Error('invalid credentials');
        }

        return {id: "1234", name: "naoki85", email: "naoki85@example.com"};
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
  },
}

export default NextAuth(authOptions);