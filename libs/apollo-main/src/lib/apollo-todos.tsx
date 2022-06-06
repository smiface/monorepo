import { gql, useQuery } from '@apollo/client';
import { Button } from '@joindev/button';
import { useEffect } from 'react';

const TODOS = gql`
  query MyQuery {
    test_todos {
      author
      done
      date
    }
  }
`;

export const Todos = () => {
  const { loading, error, data } = useQuery(TODOS, {
    pollInterval: 500,
    // fetchPolicy: 'no-cache'
    fetchPolicy: 'network-only'
  });

  if (loading) return <>loading</>;
  if (error) return <>error</>;

  const handleClick = () => {
    // setInterval(() => {
    //   console.log(data);
    // }, 500);
  };

  return (
    <>
      <Button fn={handleClick}  size='md' text='btn'></Button>

      {data.test_todos.map((el: { id: number; author: string; title: string; done: boolean }) => (
          
        <div key={JSON.stringify(el)} onClick={()=> console.log(el)}>
          {el.id}
          {el.author}
          {el.title}
          {el.done}
        </div>
      ))}
    </>
  );
};
