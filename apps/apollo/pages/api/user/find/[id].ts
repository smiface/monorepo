// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const user = await prisma.user.findUnique({
    where: {
      id: 'cl4aj1wsw0000ntpe5jgbahkq',
    }
  });
  console.log(`user`, user)

  res.status(200).json({ user });
}
