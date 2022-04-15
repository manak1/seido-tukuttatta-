import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    const basicAuth = req.headers.get("authorization")

    if (basicAuth) {
      const auth = basicAuth.split(" ")[1]
      const [user, pwd] = Buffer.from(auth, "base64").toString().split(":")

      if (user === "manaki" && pwd === "penguin") {
        return NextResponse.next()
      }
    }

    return new Response("ログインしてね", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    })
  }
}
