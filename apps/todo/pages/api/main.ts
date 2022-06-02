import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

type Data = {
  name: string;
};

function saveData() {
  fs.writeFileSync('./pages/api/data.json', `sup`);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  saveData();
  res.status(200).json({ name: 'John Doe' });
}
