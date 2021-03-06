// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email } = req.query;

  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
      todos: {
        create: {
          done: true,
        },
      },
    },
  });
  res.status(200).json({ user });
}
