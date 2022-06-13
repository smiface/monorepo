import { useGetUsers } from './hooks/useGetUsers';
import { UserElement } from './types';
import useSWR from 'swr';
import { useEffect } from 'react';
import Link from 'next/link';

export const Users = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // const { data, error } = useSWR('/api/user/123', fetcher)
  const { data, error } = useSWR('/api/user', () => fetcher('/api/user'));

  useEffect(() => {
    console.log(`data`, data);
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="mb-4 p-4 border-4 border-green-800">
      <h2>users</h2>

      {data.users.map((el: UserElement) => (
        <div key={JSON.stringify(el)}>
          <Link href={`/user/` + el.id}>
            <a href={`/user/` + el.id}>{el.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};
