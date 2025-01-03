import NextAuth from "next-auth"

import  CredentialsProvider from "next-auth/providers/credentials"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials) {
            if (credentials?.email === "admin@example.com" && credentials?.password === "1234") {
              return {
                id: "1",
                name: "Admin Jyotishman",
                role: "admin",
              };
            }
            return null;
          },
        }),
      ],
})

