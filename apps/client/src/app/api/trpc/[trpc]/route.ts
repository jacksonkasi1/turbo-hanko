// import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
// import { type NextRequest } from "next/server";
// import { appRouter } from "@repo/server";
// import { createContext } from "@repo/server";

// const handler = (req: NextRequest) =>
//   fetchRequestHandler({
//     endpoint: "/api/trpc",
//     req,
//     router: appRouter,
//     createContext: () => createContext({ req }),
//     onError:
//       process.env.NODE_ENV === "development"
//         ? ({ path, error }) => {
//             console.error(
//               `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
//             );
//           }
//         : undefined,
//   });

// export { handler as GET, handler as POST }


// --------

import { appRouter } from "@repo/server";
import { createContext } from "@repo/server";
import { createNextApiHandler } from "@trpc/server/adapters/next";
// import { NextApiResponse } from "next";
// import { NextRequest } from "next/server";

const handler = () =>createNextApiHandler({
  router: appRouter,
  createContext,
})

export { handler as GET, handler as POST }
