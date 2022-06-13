// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`query`, req.query);
  const users = await prisma.user.findMany({ take: 20 });
  res.status(200).json({ users });
}
