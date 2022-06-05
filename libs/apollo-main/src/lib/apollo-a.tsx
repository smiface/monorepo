import { gql, useQuery } from '@apollo/client';

const TEST = gql`
  query MyQuery @cached {
    test_dream {
      id
    }
  }
`;

export const ApolloA = () => {
  const { loading, error, data } = useQuery(TEST);

//   if (loading) return <>loading</>;
//   if (error) return <>error</>;

  return (
    <button
      onClick={() => {
        console.log(error);
      }}
    >
      btn
    </button>
  );
};
