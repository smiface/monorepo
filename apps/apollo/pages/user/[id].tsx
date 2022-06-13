import { useGetUsers } from './hooks/useGetUsers';
import { UserElement } from './types';
import useSWR from 'swr';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter();
  const params = router.query;

  console.log(params);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('/api/user/find/' + params.id, () => fetcher('/api/user/find/' + params.id));

  useEffect(() => {
    console.log(`data`, data);
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="mb-4 p-4 border-4 border-green-800">
      <h2>User page</h2>

      <div>
        <p>id: {data.user.id}</p>
        <p>name: {data.user.name}</p>
        <p>email: {data.user.email}</p>
      </div>
    </div>
  );
}
