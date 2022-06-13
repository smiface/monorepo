// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title } = req.query;

  const user = await prisma.todo.create({
    data: {
      done: false,
      title: title,
    },
  });
  res.status(200).json({ user });
}
