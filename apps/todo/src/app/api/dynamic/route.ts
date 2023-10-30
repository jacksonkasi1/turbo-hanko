import { NextApiRequest, NextApiResponse } from 'next';

// export function GET(req: NextApiRequest, res: NextApiResponse) {
//   const { query } = req;

//   const id: string | string[] | undefined = query.id as string;

//   if (id === 'all') {
//     // Handle getAll
//     res.status(200).json({
//       message: 'Hello, All Next.js!',
//       id: id,
//     });
//   } else {
//     // Handle getSingle
//     res.status(200).json({
//       message: 'Hello, Single Next.js!',
//       id: id,
//     });
//   }
// }

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const {searchParams}: URL = new URL(req.url)
  
  const id = searchParams.get("id");
  const skip = searchParams.get("skip");
  const limit = searchParams.get("limit");

  console.log(id);
  console.log(skip);
  console.log(limit);
  

  return new Response(`${id} Hello, ALL Next.js!`);
}
