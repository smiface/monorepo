import { useGetUsers } from './hooks/useGetUsers';
import { TodoElement } from './types';

export const Users = () => {
  const getUsers = useGetUsers();
  if (getUsers.loading) return <>loading</>;
  if (getUsers.error) return <>error</>;

  return (
    <div className="">
      <h2>users</h2>
      {getUsers.data.test_users.map((el: TodoElement) => (
        <div key={JSON.stringify(el)}>
          {el.id}
          {el.date}
          {el.author}
          {el.title}
        </div>
      ))}
    </div>
  );
};
