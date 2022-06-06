import { gql, useQuery } from '@apollo/client';
import { Button } from '@joindev/button';

const TODOS = gql`
  query MyQuery @cached {
    test_todos {
      id
      date
      title
      author
    }
  }
`;

export const Users = () => {
  const { loading, error, data } = useQuery(TODOS);

  if (loading) return <>loading</>;
  if (error) return <>error</>;

  const handleClick = () => {
    console.log(data.test_todos); // [{…}, {…}]
  };

  return (
    <>
      <Button fn={handleClick} text="btn users" />

      <div className="">
        {data.test_todos.map((el: { id: number; date: string; author: number; title: string }) => (
          <div key={JSON.stringify(el)}>
            {el.id}
            {el.date}
            {el.author}
            {el.title}
          </div>
        ))}
      </div>
    </>
  );
};
