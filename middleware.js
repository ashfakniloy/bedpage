// // import { withAuth } from "next-auth/middleware";
// // import { NextResponse } from "next/server";

// // export default withAuth(
// //   function middleware(req) {
// //     return NextResponse.redirect(new URL("/admin", req.url));
// //   },
// //   {
// //     callbacks: {
// //       authorized({ token }) {
// //         return token?.role === "super admin";
// //       },
// //     },
// //   }
// // );

// // export const config = {
// //   matchers: ["/", "/login:path*"],
// // };

// // export { default } from "next-auth/middleware"
// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
// import { withAuth } from "next-auth/middleware";

// // import { Session } from "next-auth";

// // export default withAuth(function middleware(req) {
// //   const { url, nextauth } = req;
// //   const { origin, pathname } = req.nextUrl;

// //   console.log("nextauth", nextauth.token.user.token);

// //   // if (pathname === "/dashboard") {
// //   //   return NextResponse.redirect(`${origin}/user-signin`);
// //   // }
// //   // if (url.includes("/post-ad")) {
// //   //   return NextResponse.redirect(`${origin}/user-signin`);
// //   // }
// //   return NextResponse.next();
// // });

// export default function middleware(req) {
//   // const { cookies, url, nextauth } = req;
//   // const { origin, pathname } = req.nextUrl;
//   // const jwt = cookies.get("next-auth.session-token");
//   // const jwt = cookies.get("next-auth.session-token");
//   // const sessionToken = async () =>
//   //   process.env.NODE_ENV !== "development"
//   //     ? await cookies.get("__Secure-next-auth.session-token")
//   //     : await cookies.get("next-auth.session-token");
//   // const sessionToken = async () =>
//   //   process.env.NODE_ENV !==  "development"
//   //     ? await cookies.get("__Secure-next-auth.session-token")
//   //     : await cookies.get("next-auth.session-token");
//   // const sessionToken = async () => {
//   //   if (process.env.NODE_ENV !== "development") {
//   //     return await cookies.get("__Secure-next-auth.session-token");
//   //   } else {
//   //     return await cookies.get("next-auth.session-token");
//   //   }
//   // };
//   //   const tokenDev = cookies.get("next-auth.session-token");
//   //   const tokenProd = cookies.get("__Secure-next-auth.session-token");
//   //   const token =
//   //     cookies.get("__Secure-next-auth.session-token") ||
//   //     cookies.get("next-auth.session-token");
//   //   // const jwt = sessionToken();
//   //   // const jwt = process.env.NODE_ENV !== "development" ? tokenProd : tokenDev;
//   //   const jwt = token;
//   //   // const jwt = nextauth && nextauth;
//   //   // console.log("jwt is", nextauth);
//   //   // console.log("nextauth", jwt);
//   //   // console.log("nextauth", nextauth?.token?.user?.token);
//   //   // if (pathname === "/dashboard") {
//   //   //   if (jwt === undefined) {
//   //   //     return NextResponse.redirect(`${origin}/user-signin`);
//   //   //   }
//   //   //   // return NextResponse.next();
//   //   // }
//   //   if (pathname === "/user-profile") {
//   //     if (jwt === undefined) {
//   //       return NextResponse.redirect(`${origin}/user-signin`);
//   //     }
//   //   }
//   //   if (pathname === "/buy-credit") {
//   //     if (jwt === undefined) {
//   //       return NextResponse.redirect(`${origin}/user-signin`);
//   //     }
//   //   }
//   //   if (pathname === "/premium") {
//   //     if (jwt === undefined) {
//   //       return NextResponse.redirect(`${origin}/user-signin`);
//   //     }
//   //   }
//   //   if (pathname === "/message-blast") {
//   //     if (jwt === undefined) {
//   //       return NextResponse.redirect(`${origin}/user-signin`);
//   //     }
//   //   }
//   //   if (url.includes("/post-ad")) {
//   //     if (jwt === undefined) {
//   //       return NextResponse.redirect(`${origin}/user-signin`);
//   //     }
//   //   }
//   //   // const protectedRoutes = [
//   //   //   "/dashboard",
//   //   //   "/user-profile",
//   //   //   "/buy-credit",
//   //   //   "/premium",
//   //   //   "/message-blast",
//   //   //   "/post-ad",
//   //   // ];
//   //   // if (jwt === undefined) {
//   //   //   const redirect = () =>
//   //   //     protectedRoutes?.forEach((route) => {
//   //   //       if (pathname === route) {
//   //   //         return NextResponse.redirect(`${origin}/user-signin`);
//   //   //       }
//   //   //     });
//   //   //   redirect();
//   //   // }
//   //   // if (jwt) {
//   //   //   return NextResponse.next();
//   //   // }
//   //   // if (jwt === undefined) {
//   //   //   if (url.includes("/post-ad")) {
//   //   //     return NextResponse.redirect(`${origin}/user-signin`);
//   //   //   }
//   //   //   return NextResponse.next();
//   //   // }
//   //   // if (jwt === undefined) {
//   //   //   if (pathname === "/dashboard") {
//   //   //     return NextResponse.redirect(`${origin}/user-signin`);
//   //   //   }
//   //   //   if (pathname === "/user-profile") {
//   //   //     return NextResponse.redirect(`${origin}/user-signin`);
//   //   //   }
//   //   //   if (pathname === "/buy-credit") {
//   //   //     return NextResponse.redirect(`${origin}/user-signin`);
//   //   //   }
//   //   //   if (pathname === "/premium") {
//   //   //     return NextResponse.redirect(`${origin}/user-signin`);
//   //   //   }
//   //   //   if (pathname === "/message-blast") {
//   //   //     return NextResponse.redirect(`${origin}/user-signin`);
//   //   //   }
//   //   //   // if (pathname === "/post-ad") {
//   //   //   //   return NextResponse.redirect(`${origin}/user-signin`);
//   //   //   // }
//   //   //   // if (url.includes("/post-ad")) {
//   //   //   //   return NextResponse.redirect(`${origin}/user-signin`);
//   //   //   // }
//   //   //   return NextResponse.next();
//   //   // } else {
//   //   //   if (pathname === "/user-signin") {
//   //   //     return NextResponse.redirect(`${origin}`);
//   //   //   }
//   //   // }
//   //   // try {
//   //   //   if (url.includes("/post-ad")) {
//   //   //     if (!jwt) {
//   //   //       return NextResponse.redirect(`${origin}/user-signin`);
//   //   //     }
//   //   //   }
//   //   // } catch (error) {
//   //   //   return NextResponse.next();
//   //   // }
//   //   // if (url.includes("/post-ad")) {
//   //   //   if (!jwt) {
//   //   //     return NextResponse.redirect(`${origin}/user-signin`);
//   //   //   }
//   //   //   return NextResponse.next();
//   //   // }
//   //   // if (pathname === "/user-signin") {
//   //   //   if (jwt) {
//   //   //     return NextResponse.redirect(`${origin}`);
//   //   //   }
//   //   //   return NextResponse.next();
//   //   // }
//   //   return NextResponse.next();
//   // }
//   // export const config = {
//   //   matcher: [
//   //     "/dashboard",
//   //     "/user-profile",
//   //     "/buy-credit",
//   //     "/premium",
//   //     "/message-blast",
//   //     "/user-signin",
//   //     "/post-ad/:path*",
//   //   ],
// }

export { default } from "next-auth/middleware";

// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
// import { withAuth } from "next-auth/middleware";

// export default function middleware(req) {
//   const { url, nextauth } = req;
//   const { origin, pathname } = req.nextUrl;

//   console.log("nextauth", nextauth.token.user.token);

//   // if (pathname === "/dashboard") {
//   //   return NextResponse.redirect(`${origin}/user-signin`);
//   // }
//   // if (url.includes("/post-ad")) {
//   //   return NextResponse.redirect(`${origin}/user-signin`);
//   // }
//   return NextResponse.next();
// };

export const config = {
  matcher: [
    "/dashboard",
    "/user-profile",
    "/buy-credit",
    "/premium",
    "/message-blast",
    // "/user-signin",
    "/post-ad/:path*",
  ],
};
