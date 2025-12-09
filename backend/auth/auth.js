import { betterAuth } from "better-auth"
import { jwt } from "better-auth/plugins"
import { Pool } from "pg"
import dotenv from "dotenv";
dotenv.config();


const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),

  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false
  },

  trustedOrigins: [
    "http://localhost:5173",
    "https://composter.vercel.app",
    process.env.CLIENT_URL
  ].filter(Boolean),

  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 days in seconds
    updateAge: 60 * 60 * 24, // Update session every 24 hours
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },

  advanced: {
    useSecureCookies: true,
    cookies: {
      session_token: {
        name: "__Secure-better-auth.session_token",
        attributes: {
          httpOnly: true,
          sameSite: "none",
          secure: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 30, // 30 days
        }
      },
      session_data: {
        name: "__Secure-better-auth.session_data", 
        attributes: {
          httpOnly: true,
          sameSite: "none",
          secure: true,
          path: "/",
          maxAge: 60 * 60 * 24 * 30, // 30 days
        }
      }
    }
  },

  plugins: [
    jwt()
  ],
})

export default auth;
