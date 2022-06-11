// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const todos = await prisma.todo.findMany({ take: 20 });
  prisma.user.create({
    data: {
      email: 'zxc@mail.ru',
      todos: {
        create: {
         done: true
        },
      },
    },
  });
  res.status(200).json({ todos });
}
