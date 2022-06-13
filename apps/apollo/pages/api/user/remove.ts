// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
    
  const user = await prisma.user.update({
    where : {
        id: id
    },
    data: {
      active: false,
    },
  });
  res.status(200).json({ user });
}
